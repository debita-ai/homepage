import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
  cacheKey?: string;
  cacheTime?: number;
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Check cache if cacheKey is provided
      if (options.cacheKey) {
        const cachedData = localStorage.getItem(options.cacheKey);
        if (cachedData) {
          const { data: cached, timestamp } = JSON.parse(cachedData);
          const now = Date.now();
          if (options.cacheTime && now - timestamp < options.cacheTime) {
            setData(cached);
            setLoading(false);
            return;
          }
        }
      }

      const result = await apiCall();
      setData(result);

      // Cache the result if cacheKey is provided
      if (options.cacheKey) {
        localStorage.setItem(
          options.cacheKey,
          JSON.stringify({
            data: result,
            timestamp: Date.now(),
          })
        );
      }

      options.onSuccess?.(result);
    } catch (err: any) {
      setError(err);
      options.onError?.(err);

      // Handle unauthorized error
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    } finally {
      setLoading(false);
    }
  }, [apiCall, options, router]);

  // Clear cache when component unmounts
  useEffect(() => {
    return () => {
      if (options.cacheKey) {
        localStorage.removeItem(options.cacheKey);
      }
    };
  }, [options.cacheKey]);

  return {
    data,
    loading,
    error,
    execute,
  };
} 
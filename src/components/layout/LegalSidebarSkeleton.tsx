export default function LegalSidebarSkeleton() {
  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-6 animate-pulse" />
        <div className="space-y-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="p-3 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-1 animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
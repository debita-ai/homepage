'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SimpleFooter from '@/components/layout/SimpleFooter';

export default function VerificationPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center relative overflow-hidden">
      {/* Radial background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E85A27]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E85A27]/5 via-transparent to-transparent scale-150" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E85A27]/5 via-transparent to-transparent scale-200" />
      
      {/* Radial lines effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#E85A27_1px,_transparent_1px),_linear-gradient(to_bottom,_#E85A27_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Brand Logo and Home Button */}
      <div className="mt-8 mb-4 relative z-10 flex justify-between items-center w-full max-w-[1124px]">
        <img src="/logo.svg" alt="Debita.aí" className="h-8 w-auto object-contain drop-shadow-lg" />
        <Button
          variant="outline"
          onClick={() => router.push('/')}
          className="text-[#E85A27] border-[#E85A27] hover:bg-[#E85A27] hover:text-white transition-all duration-200"
        >
          Voltar para a home
        </Button>
      </div>

      <div className="flex-1 flex items-center justify-center w-full mb-32">
        <Card className="w-full max-w-[600px] p-8 shadow-2xl border-none bg-white/80 backdrop-blur-sm relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-[#E85A27]/10 flex items-center justify-center mb-6"
          >
            <Mail className="w-10 h-10 text-[#E85A27]" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Verifique seu e-mail
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 text-lg mb-8"
          >
            Enviamos um link de verificação para o seu e-mail. Por favor, verifique sua caixa de entrada e clique no link para ativar sua conta.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-4 w-full max-w-[400px]"
          >
            <Button
              onClick={() => router.push('/login')}
              className="w-full bg-[#E85A27] hover:bg-[#D84A1F] text-lg py-6 rounded-xl"
            >
              Ir para o login
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/signup')}
              className="w-full text-lg py-6 rounded-xl"
            >
              Voltar para o cadastro
            </Button>
          </motion.div>
        </Card>
      </div>

      {/* Footer */}
      <div className="w-full mt-8 relative z-50">
        <SimpleFooter />
      </div>
    </div>
  );
} 
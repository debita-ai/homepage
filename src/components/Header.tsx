import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Componente que detecta quando está no topo da página
const ScrollDetector = ({ onIntersect }: any) => {
  // Este componente só é renderizado no cliente
  if (typeof window === 'undefined') return null;

  // Criamos um elemento que observa o topo da página

  const ref = React.useRef();
  const observer = new IntersectionObserver(
    ([entry]) => {
      // Chamamos onIntersect quando o estado de interseção muda
      onIntersect(entry.isIntersecting);
    },
    { threshold: 0 }
  );

  React.useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [observer]);

  // Este div é colocado no topo absoluto da página
  return <div style={{ position: 'absolute', top: 0, height: '1px', width: '100%' }} />;
};

// Componente principal do Header usando CSS para alternar estilos
const Header = () => {
  // Este component é renderizado no cliente e no servidor
  return (
    <>
      {/* No cliente, este componente ativa/desativa a classe "scrolled" no body */}
      {typeof window !== 'undefined' && (
        <ScrollDetector 
          onIntersect={(isAtTop: any) => {
            document.body.classList.toggle('at-page-top', isAtTop);
          }} 
        />
      )}

      {/* O header usa seletores CSS que respondem à classe no body */}
      <header className="header-component py-4 px-4 md:px-8 flex items-center justify-between transition-all duration-300 sticky top-0 z-50">
        <div className="flex items-center ml-14">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">debita<span className="header-text">.ai</span></span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/sobre-nos" className="header-link hover:text-orange-500 transition-colors">
            Quem Somos
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="header-link flex items-center gap-1 hover:text-orange-500 transition-colors">
              Soluções <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/pix-parcelado" className="w-full">Boleto</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/pix-recorrente" className="w-full">Pix</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/cross-border" className="w-full">Agente de IA</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/link-de-pagamento" className="w-full">Cobranças</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/para-seu-negocio" className="header-link hover:text-orange-500 transition-colors">
            Para seu negócio
          </Link>
          <Link href="/compradores" className="header-link hover:text-orange-500 transition-colors">
            Compradores
          </Link>
          <Link href="/contato" className="header-link hover:text-orange-500 transition-colors">
            Contato
          </Link>
          <Link href="/ajuda" className="header-link hover:text-orange-500 transition-colors">
            Ajuda
          </Link>
        </div>

        <div className="mr-14 flex items-center gap-4">
          <Link href="/signup" className="hidden md:block">
            <Button variant="default" className="header-button transition-colors hover:bg-orange-600 hover:text-white">
              Entrar na lista de espera
            </Button>
          </Link>

          {/* Mobile navigation */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6 header-icon" />
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/sobre-nos" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Quem Somos
                </Link>
                <div className="py-2">
                  <h3 className="text-lg font-medium mb-2">Soluções</h3>
                  <div className="flex flex-col gap-2 pl-2">
                    <Link href="/pix-parcelado" className="hover:text-orange-500">Pix Parcelado</Link>
                    <Link href="/pix-recorrente" className="hover:text-orange-500">Pix Recorrente</Link>
                    <Link href="/cross-border" className="hover:text-orange-500">Cross Border</Link>
                    <Link href="/link-de-pagamento" className="hover:text-orange-500">Link de Pagamento</Link>
                  </div>
                </div>
                <Link href="/para-seu-negocio" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Para seu negócio
                </Link>
                <Link href="/compradores" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Compradores
                </Link>
                <Link href="/contato" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Contato
                </Link>
                <Link href="/ajuda" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Ajuda
                </Link>
                <Button variant="default" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Entrar na lista de espera
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

     
    </>
  );
};

export default Header;
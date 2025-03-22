"use client";

import { useState, useRef, useEffect } from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { PlusIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DebitaLogo from '../../../public/logo.svg'
import { Button } from "@/components/ui/button";
import {
  User, Bell, Settings, Wallet, ChevronDown, LogOut, Menu, X,
  Plus, Users, FileText, Zap, Clock, Landmark, Plug, Bot, Link as LinkIcon,
  Home,
  RefreshCw,
  Check
} from "lucide-react";
import { toast } from "sonner";

// Mock user data
const mockUser = {
  name: "Usuário Demo",
  email: "demo@debita.ai",
  type: "SELLER"
};

// Navigation items
const navigationItems = [
  { name: "Início", href: "/dashboard", icon: <Home className="h-5 w-5" /> },
  { name: "Cobranças", href: "/dashboard/charges", icon: <FileText className="h-5 w-5" /> },
  { name: "Clientes", href: "/dashboard/clients", icon: <Users className="h-5 w-5" /> },
  { name: "Carteira", href: "/dashboard/wallet", icon: <Wallet className="h-5 w-5" /> },
  { name: "Pix", href: "/dashboard/pix", icon: <Zap className="h-5 w-5" /> },
  { name: "Links", href: "/dashboard/links", icon: <LinkIcon className="h-5 w-5" /> },
];

// Profile menu dropdown
const ProfileMenu = ({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: any }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLogout = () => {
    router.push('/login');
    toast.success('Logout realizado com sucesso');
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-30">
      <div className="p-4 border-b border-gray-100">
        <p className="font-medium">{user?.name}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>
      <ul className="py-2">
        <li>
          <Link href="/dashboard/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <User className="w-4 h-4 mr-2" />
            Meu Perfil
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Link>
        </li>
        <li>
          <Link href="/dashboard/accounts" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Landmark className="w-4 h-4 mr-2" />
            Minhas Contas Bancárias
          </Link>
        </li>
        <li className="border-t border-gray-100 mt-2">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
};

// Notification interface
interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'payment' | 'system' | 'alert';
}

// Notifications dropdown
const NotificationsMenu = ({ isOpen, onClose, notifications }: { isOpen: boolean, onClose: () => void, notifications: Notification[] }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-30">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Notificações</h3>
          <button className="text-sm text-primary-600">Marcar todas como lidas</button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-gray-100 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
          >
            <div className="flex items-start">
              <div className={`p-2 rounded-full ${
                notification.type === 'payment' ? 'bg-green-100' :
                notification.type === 'system' ? 'bg-blue-100' : 'bg-yellow-100'
              } mr-3`}>
                {notification.type === 'payment' ? <Check className="h-4 w-4 text-green-600" /> :
                 notification.type === 'system' ? <RefreshCw className="h-4 w-4 text-blue-600" /> :
                 <Bell className="h-4 w-4 text-yellow-600" />}
              </div>
              <div>
                <p className="font-medium text-sm">{notification.title}</p>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-100">
        <button className="text-sm text-primary-600 w-full text-center">Ver todas as notificações</button>
      </div>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);

  // Mock notifications
  useEffect(() => {
    setNotifications([
      {
        id: 1,
        title: 'Pagamento recebido',
        message: 'Você recebeu um pagamento de R$ 1.500,00 de João Silva',
        timestamp: '2 minutos atrás',
        read: false,
        type: 'payment'
      },
      {
        id: 2,
        title: 'Sistema atualizado',
        message: 'O sistema foi atualizado com novos recursos',
        timestamp: '1 hora atrás',
        read: true,
        type: 'system'
      },
      {
        id: 3,
        title: 'Cobrança pendente',
        message: 'Você tem uma cobrança pendente que vence hoje',
        timestamp: '3 horas atrás',
        read: false,
        type: 'alert'
      }
    ]);
  }, []);

  const paymentOptions = [
    { 
      label: 'Pix', 
      value: 'pix', 
      icon: <Zap className="h-4 w-4 mr-2" />,
      route: "/dashboard/charges/new/pix" 
    },
    { 
      label: 'Boleto', 
      value: 'boleto', 
      icon: <FileText className="h-4 w-4 mr-2" />,
      route: "/dashboard/charges/new/boleto" 
    },
    { 
      label: 'Link de pagamento', 
      value: 'payment_link', 
      icon: <LinkIcon className="h-4 w-4 mr-2" />,
      route: "/dashboard/charges/new/link" 
    },
  ];
  
  // Create charge popup
  const handlePaymentSelection = (value: string) => {
    const option = paymentOptions.find(opt => opt.value === value);
    if (option) {
      router.push(option.route);
    }
  };

  // Handle clicks outside the profile menu and notifications menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
      if (notificationsMenuRef.current && !notificationsMenuRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get current page title from pathname
  const getPageTitle = () => {
    const path = pathname.split('/').pop();
    if (!path) return 'Dashboard';
    
    const item = navigationItems.find(item => item.href.includes(path));
    return item ? item.name : 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center">
              <Image src={DebitaLogo} alt="Debita AI" width={32} height={32} />
              <span className="ml-2 text-xl font-semibold text-gray-900">Debita AI</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  pathname === item.href
                    ? 'bg-[#E85A27] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#E85A27] flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{mockUser.name}</p>
                <p className="text-xs text-gray-500">{mockUser.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`lg:pl-64 flex flex-col flex-1 ${sidebarOpen ? 'lg:ml-0' : 'lg:ml-0'}`}>
        {/* Top Bar */}
        <div className="sticky top-0 z-40 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E85A27] lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <h1 className="text-2xl font-semibold text-gray-900 self-center">
                {getPageTitle()}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* New Charge Button */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button className="bg-[#E85A27] hover:bg-[#D64A1A] text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Cobrança
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-[220px] bg-white rounded-md p-1 shadow-lg border border-gray-200"
                    sideOffset={5}
                    align="end"
                  >
                    {paymentOptions.map((option) => (
                      <DropdownMenu.Item
                        key={option.value}
                        className="flex items-center px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-gray-100 rounded"
                        onSelect={() => handlePaymentSelection(option.value)}
                      >
                        {option.icon}
                        {option.label}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              {/* Notifications */}
              <div className="relative" ref={notificationsMenuRef}>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E85A27] focus:ring-offset-2"
                >
                  <Bell className="h-6 w-6" />
                </button>
                <NotificationsMenu
                  isOpen={notificationsOpen}
                  onClose={() => setNotificationsOpen(false)}
                  notifications={notifications}
                />
              </div>

              {/* Profile Menu */}
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center gap-2 p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E85A27] focus:ring-offset-2"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E85A27] flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <ProfileMenu
                  isOpen={profileMenuOpen}
                  onClose={() => setProfileMenuOpen(false)}
                  user={mockUser}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
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
import authService from "@/app/services/auth";
import { toast } from "sonner";

// Navigation items
const navigationItems = [
  { name: "Início", href: "/dashboard", icon: <Home className="h-5 w-5" /> },
  { name: "Cobranças", href: "/dashboard/charges", icon: <FileText className="h-5 w-5" /> },
  { name: "Clientes", href: "/dashboard/clients", icon: <Users className="h-5 w-5" /> },
  { name: "Carteira", href: "/dashboard/wallet", icon: <Wallet className="h-5 w-5" /> },
  { name: "Pix", href: "/dashboard/pix", icon: <Zap className="h-5 w-5" /> },
  // { name: "IA", href: "/dashboard/ia", icon: <Bot className="h-5 w-5" /> },
  { name: "Links", href: "/dashboard/links", icon: <LinkIcon className="h-5 w-5" /> },
];

// Profile menu dropdown
const ProfileMenu = ({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: any }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLogout = () => {
    authService.logout();
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
  const [user, setUser] = useState<any>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!authService.isAuthenticated()) {
          router.push('/login');
          return;
        }

        const userProfile = await authService.getUserProfile();
        setUser(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  // Mock notifications - replace with real API call
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
    // const path = pathname.split('/').pop() || '';
    // const item = navigationItems.find(item => {
    //   const itemPath = item.href.split('/').pop() || '';
    //   return path === itemPath;
    // });
    // return item ? item.name : "Painel de Controle";
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        className="fixed z-50 md:hidden top-4 left-4 p-2 rounded-md bg-white shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-white border-r border-gray-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-auto`}
        style={{ width: sidebarCollapsed ? 70 : 250 }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex justify-center py-6 border-b border-gray-200">
            <Link href="/dashboard">
              {sidebarCollapsed ? (
                <div className="w-10 h-10 rounded-full bg-[#E85A27] flex items-center justify-center text-white font-bold">
                  D
                </div>
              ) : (
                <Image
                  src={DebitaLogo}
                  alt="Debita.aí"
                  width={100}
                  height={35}
                  unoptimized
                />
              )}
            </Link>
          </div>

          {/* Create charge button */}
          <div className="px-3 py-4">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button className="w-full bg-[#E85A27] hover:bg-[#D64A1A] text-white">
                  <Plus className="h-5 w-5 mr-2" />
                  {!sidebarCollapsed && "Nova Cobrança"}
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-[220px] bg-white rounded-md p-2 shadow-lg border border-gray-200 z-[100]"
                  sideOffset={5}
                  align="start"
                >
                  {paymentOptions.map((option) => (
                    <DropdownMenu.Item
                      key={option.value}
                      className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => handlePaymentSelection(option.value)}
                    >
                      {option.icon}
                      {option.label}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#E85A27]/10 text-[#E85A27]"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className={isActive ? "text-[#E85A27]" : "text-gray-500"}>
                    {item.icon}
                  </div>
                  {!sidebarCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="px-3 py-4 border-t border-gray-200">
            <div className={`flex items-center ${sidebarCollapsed ? "justify-center" : "px-4 py-3"}`}>
              <div className="w-10 h-10 rounded-full bg-[#E85A27]/20 flex items-center justify-center">
                <User className="h-5 w-5 text-[#E85A27]" />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-3">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">Plano Pessoal</p>
                </div>
              )}
            </div>
          </div>

          {/* Collapse Button */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-3 border-t border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {sidebarCollapsed ? (
              <ChevronDown className="h-5 w-5 mx-auto" />
            ) : (
              <div className="flex items-center justify-center">
                <ChevronDown className="h-5 w-5 mr-2" />
                <span>Recolher menu</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4">
            <h1 className="text-2xl font-semibold"></h1>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative" ref={notificationsMenuRef}>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 text-gray-400 hover:text-gray-500 relative"
                >
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
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
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E85A27]/20 flex items-center justify-center">
                    <User className="h-4 w-4 text-[#E85A27]" />
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
                <ProfileMenu
                  isOpen={profileMenuOpen}
                  onClose={() => setProfileMenuOpen(false)}
                  user={user}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
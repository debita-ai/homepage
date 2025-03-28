/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Home, RefreshCw, Check, Package, Sparkles, Sun, Moon, Type, Maximize2, Minimize2,
  QrCode
} from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

// Add this CSS to style the scrollbar
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #FDF6F2;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #FF8B5C;
    border-radius: 3px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #E85A27;
  }
`;

// Profile menu dropdown
const ProfileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-30">
      <div className="p-4 border-b border-gray-100">
        <p className="font-medium">João Silva</p>
        <p className="text-sm text-gray-500">joao.silva@email.com</p>
      </div>
      <ul className="py-2">
        <li>
          <Link href="/dashboard/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <User className="w-4 h-4 mr-2" />
            Meu Perfil
          </Link>
        </li>
        <li>
          <Link href="/dashboard/configuracoes" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Link>
        </li>
        <li>
          <Link href="/dashboard/contas" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Landmark className="w-4 h-4 mr-2" />
            Minhas Contas Bancárias
          </Link>
        </li>
        <li className="border-t border-gray-100 mt-2">
          <Link href="/login" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Link>
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
const NotificationsMenu = ({ isOpen, onClose, notifications, markAsRead, markAllAsRead }: { 
  isOpen: boolean, 
  onClose: () => void,
  notifications: Notification[],
  markAsRead: (id: number) => void,
  markAllAsRead: () => void
}) => {
  if (!isOpen) return null;

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case 'payment':
        return <Wallet className="w-5 h-5 text-green-500" />;
      case 'alert':
        return <Bell className="w-5 h-5 text-red-500" />;
      case 'system':
      default:
        return <Settings className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-30 max-h-[80vh] overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <p className="font-medium">Notificações</p>
        <button 
          onClick={markAllAsRead}
          className="text-xs text-[#E85A27] hover:text-[#D84A1F] font-medium"
        >
          Marcar todas como lidas
        </button>
      </div>
      
      <div className="overflow-y-auto flex-1">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            <p>Nenhuma notificação</p>
          </div>
        ) : (
          <ul className="py-2">
            {notifications.map((notification) => (
              <li key={notification.id} className={`border-b border-gray-100 last:border-0 ${!notification.read ? 'bg-gray-50' : ''}`}>
                <button 
                  onClick={() => markAsRead(notification.id)} 
                  className="w-full px-4 py-3 text-left flex items-start hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 mr-3 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
                  </div>
                  {!notification.read && (
                    <span className="w-2 h-2 rounded-full bg-[#E85A27] flex-shrink-0 mt-2"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="p-3 border-t border-gray-100 text-center">
        <Link href="/dashboard/notificacoes" className="text-sm text-[#E85A27] hover:text-[#D84A1F] font-medium">
          Ver todas as notificações
        </Link>
      </div>
    </div>
  );
};

// Create charge popup
const CreateChargePopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const router = useRouter();
  if (!isOpen) return null;

  const handleCreateCharge = (type: 'pix' | 'boleto') => {
    onClose();
    router.push(`/dashboard/billings/create/${type}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Emitir Cobrança</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleCreateCharge('pix')}
            className="flex flex-col items-center justify-center p-6 border-2 border-[#E85A27]/20 hover:border-[#E85A27] bg-[#E85A27]/5 rounded-xl transition-colors"
          >
            <Zap className="text-[#E85A27] w-8 h-8 mb-2" />
            <span className="font-medium text-[#E85A27]">PIX</span>
          </button>

          <button 
            onClick={() => handleCreateCharge('boleto')}
            className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 hover:border-[#E85A27]/40 hover:bg-gray-50 rounded-xl transition-colors"
          >
            <FileText className="text-gray-600 w-8 h-8 mb-2" />
            <span className="font-medium text-gray-600">Boleto</span>
          </button>
        </div>

        <div className="mt-8">
          <Button 
            onClick={() => router.push('/dashboard/billings/create')}
            className="w-full py-6 bg-[#E85A27] hover:bg-[#D84A1F] text-white font-medium"
          >
            Ver todas as opções
          </Button>
        </div>
      </div>
    </div>
  );
};

// AI assistant popup
const AIAssistantPopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-end md:items-center justify-center z-50">
      <div className="bg-white rounded-t-xl md:rounded-xl p-6 w-full max-w-xl h-[80vh] md:h-[70vh] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-xl font-bold">Assistente Financeiro</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto border rounded-xl p-4 mb-4 bg-gray-50">
          <div className="flex mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center mr-3">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
              <p className="text-gray-800">Olá, João! Como posso ajudar você com suas finanças hoje?</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Digite sua pergunta..."
            className="w-full border-gray-300 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#E85A27] focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E85A27]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Add these interfaces at the top of the file
interface SubItem {
  name: string;
  href: string;
  subitems?: SubItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  subitems?: SubItem[];
}

// Update the navigation items type
const navigationItems: NavigationItem[] = [
  { name: "Início", href: "/dashboard", icon: <Home className="h-5 w-5 text-gray-500" /> },
  { 
    name: "Receber (Cobranças)", 
    href: "/dashboard/billings", 
    icon: <FileText className="h-5 w-5 text-gray-500" />,
    subitems: [
      { name: "Emitir Cobrança", href: "/dashboard/billings/create" },
      { name: "Todas as Cobranças", href: "/dashboard/billings" },
      { name: "Pendentes", href: "/dashboard/billings/pending" },
      { name: "Recebidas", href: "/dashboard/billings/received" },
      { name: "Vencidas", href: "/dashboard/billings/overdue" },
      { 
        name: "Gestão de Cobranças", 
        href: "/dashboard/billings/management",
        subitems: [
          { name: "PIX", href: "/dashboard/billings/management/pix" },
          { name: "Carnê", href: "/dashboard/billings/management/installment" },
          { name: "Boleto", href: "/dashboard/billings/management/boleto" },
          { name: "Link de Pagamento", href: "/dashboard/billings/management/payment-link" },
          { name: "Assinaturas", href: "/dashboard/billings/management/subscriptions" }
        ]
      },
      { name: "Relatórios", href: "/dashboard/billings/reports" }
    ]
  },
  { name: "Transferências", href: "/dashboard/transfers", icon: <RefreshCw className="h-5 w-5 text-gray-500" /> },
  { name: "PIX", href: "/dashboard/pix", icon: <QrCode className="h-5 w-5 text-gray-500" /> },
  { 
    name: "Meu dinheiro", 
    href: "/dashboard/wallet", 
    icon: <Wallet className="h-5 w-5 text-gray-500" />,
    subitems: [
      { name: "Saldo", href: "/dashboard/wallet" },
      { name: "Extrato", href: "/dashboard/wallet/statement" },
      { name: "Transferências", href: "/dashboard/wallet/transfers" },
      { name: "Configurações", href: "/dashboard/wallet/settings" }
    ]
  },
  { 
    name: "Meus Clientes", 
    href: "/dashboard/customers", 
    icon: <Users className="h-5 w-5 text-gray-500" />,
    subitems: [
      { name: "Lista de Clientes", href: "/dashboard/customers" },
      { name: "Grupos", href: "/dashboard/customers/groups" },
      { name: "Importar Clientes", href: "/dashboard/customers/import" },
      { name: "Exportar Clientes", href: "/dashboard/customers/export" }
    ]
  },
  { name: "Links de Pagamento", href: "/dashboard/links", icon: <LinkIcon className="h-5 w-5 text-gray-500" /> },
  { name: "Produtos", href: "/dashboard/products", icon: <Package className="h-5 w-5 text-gray-500" /> },
];

const paymentOptions = [
  { label: 'Pix', value: 'pix', route: 'pix' },
  { label: 'Boleto', value: 'boleto', route: 'boleto' },
  { label: 'Link de pagamento', value: 'payment_link', route: 'payment_link' },
];

const SidebarItem = ({ item, isActive, isExpanded, onToggle, onSelect, sidebarCollapsed }: {
  item: NavigationItem;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onSelect: () => void;
  sidebarCollapsed: boolean;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const hasSubitems = item.subitems && item.subitems.length > 0;
  const isSubitemActive = item.subitems?.some(subitem => 
    pathname === subitem.href || (subitem.subitems?.some(nested => pathname === nested.href))
  );

  const handleClick = () => {
    if (hasSubitems) {
      onToggle();
    } else {
      router.push(item.href);
    }
  };

  const isItemActive = isActive || isSubitemActive || pathname === item.href;

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
          isItemActive
            ? "bg-[#252E54]/15 text-[#252E54]"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <div className={`mr-3 ${isItemActive ? "text-[#252E54]" : "text-gray-500"}`}>
          {item.icon}
        </div>
        {!sidebarCollapsed && (
          <>
            <span className="flex-1 text-left">{item.name}</span>
            {hasSubitems && (
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isExpanded ? "transform rotate-180" : ""
                } ${isItemActive ? "text-[#252E54]" : "text-gray-500"}`}
              />
            )}
          </>
        )}
      </button>
      {!sidebarCollapsed && hasSubitems && isExpanded && (
        <div className="ml-4 mt-2 space-y-1">
          {item.subitems?.map((subitem) => {
            const isSubActive = pathname === subitem.href;
            const hasNestedSubitems = subitem.subitems && subitem.subitems.length > 0;
            const isNestedActive = subitem.subitems?.some(nested => pathname === nested.href);

            if (hasNestedSubitems) {
              return (
                <div key={subitem.href}>
                  <button
                    onClick={() => {
                      const subitemElement = document.getElementById(`subitem-${subitem.href}`);
                      if (subitemElement) {
                        subitemElement.classList.toggle('hidden');
                      }
                    }}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${
                      isSubActive || isNestedActive
                        ? "bg-[#252E54]/15 text-[#252E54]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="flex-1 text-left">{subitem.name}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div id={`subitem-${subitem.href}`} className="hidden ml-4 mt-1 space-y-1">
                    {subitem.subitems?.map((nestedItem) => (
                      <Link
                        key={nestedItem.href}
                        href={nestedItem.href}
                        className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                          pathname === nestedItem.href
                            ? "bg-[#252E54]/15 text-[#252E54]"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {nestedItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={subitem.href}
                href={subitem.href}
                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                  isSubActive
                    ? "bg-[#252E54]/15 text-[#252E54]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {subitem.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-4">
        {navigationItems.map((item) => {
          const isActive = item.href === "/dashboard" 
            ? pathname === item.href 
            : pathname.startsWith(item.href + '/');

          return (
            <SidebarItem
              key={item.name}
              item={item}
              isActive={isActive}
              isExpanded={expandedItems.includes(item.name)}
              onToggle={() => toggleItem(item.name)}
              onSelect={() => {}}
              sidebarCollapsed={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [createChargeOpen, setCreateChargeOpen] = useState(false);
  const [aiAssistantOpen, setAIAssistantOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Pagamento recebido',
      message: 'Você recebeu um pagamento de R$ 250,00 de Cliente XYZ',
      timestamp: 'Hoje, 14:30',
      read: false,
      type: 'payment'
    },
    {
      id: 2,
      title: 'Cobrança expirada',
      message: 'A cobrança #12345 expirou sem pagamento',
      timestamp: 'Ontem, 16:45',
      read: false,
      type: 'alert'
    },
    {
      id: 3,
      title: 'Atualização do sistema',
      message: 'Nova versão do sistema está disponível com novos recursos',
      timestamp: '20/03/2025, 09:15',
      read: true,
      type: 'system'
    }
  ]);
  
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
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
    const item = navigationItems.find(item => pathname.startsWith(item.href));
    return item ? item.name : "Painel de Controle";
  };

  const handlePaymentOptionSelect = (route: string) => {
    if (route === 'pix') {
      router.push('/dashboard/billings/create/pix');
    } else if (route === 'boleto') {
      router.push('/dashboard/billings/create/boleto');
    } else if (route === 'payment_link') {
      router.push('/dashboard/billings/create/link');
    }
  };

  const toggleItem = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <style jsx global>{scrollbarStyles}</style>
      
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 z-20">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-2 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
                <Image
                  src={DebitaLogo}
                  alt="Debita.aí"
                  width={100}
                  height={35}
                  unoptimized
                />
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Font Size Controls */}
          <div className="flex items-center border rounded-lg">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Sun className="h-4 w-4" />
          </Button>

          {/* Settings Button */}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>

          {/* Notifications Button */}
          <div className="relative" ref={notificationsMenuRef}>
            <Button 
              variant="outline" 
              size="icon" 
              title="Notificações" 
              className="relative h-8 w-8"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </Button>
            <NotificationsMenu 
              isOpen={notificationsOpen} 
              onClose={() => setNotificationsOpen(false)} 
              notifications={notifications}
              markAsRead={markAsRead}
              markAllAsRead={markAllAsRead}
            />
          </div>
          
          {/* Profile Menu */}
          <div className="relative" ref={profileMenuRef}>
            <Button 
              variant="ghost" 
              className="flex items-center h-8"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            >
              <div className="w-6 h-6 rounded-full bg-[#E85A27] text-white flex items-center justify-center mr-2 text-xs">
                JS
              </div>
              <span className="hidden md:block">João Silva</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <ProfileMenu isOpen={profileMenuOpen} onClose={() => setProfileMenuOpen(false)} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 z-10 h-[calc(100vh-4rem)] transition-all duration-300 bg-white border-r border-gray-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{ width: sidebarCollapsed ? 70 : 312 }}
      >
        <div className="flex flex-col h-full">
          {/* User Profile */}
          <div className="px-4 py-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#E85A27]/20 flex items-center justify-center">
                <User className="h-5 w-5 text-[#E85A27]" />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-3">
                  <p className="font-medium">João Silva</p>
                  <p className="text-xs text-gray-500">Plano Pessoal</p>
                </div>
              )}
            </div>
          </div>

          {/* Create charge button */}
          <div className="px-4 py-5">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className={`w-full bg-gradient-to-r from-[#E85A27] to-[#FF8B5C] hover:from-[#D84A1F] hover:to-[#E85A27] text-white shadow-sm ${
                    sidebarCollapsed ? 'px-0 rounded-full aspect-square' : 'px-3 rounded-xl py-3'
                  } flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.02] active:scale-[0.98] hover:brightness-110`}
                >
                  <PlusIcon className={`${sidebarCollapsed ? 'mx-auto' : 'mr-2'} h-5 w-5 transition-transform duration-300 group-hover:rotate-90`} />
                  {!sidebarCollapsed && <span className="font-medium">Emitir Cobrança</span>}
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content
                className="bg-white rounded-md shadow-lg py-1 mt-2 w-56"
                sideOffset={5}
                align="end"
              >
                {paymentOptions.map((option) => (
                  <DropdownMenu.Item
                    key={option.value}
                    onSelect={() => handlePaymentOptionSelect(option.route)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                  >
                    {option.value === 'pix' && <Zap className="h-4 w-4 mr-2 text-[#E85A27]" />}
                    {option.value === 'boleto' && <FileText className="h-4 w-4 mr-2 text-[#E85A27]" />}
                    {option.value === 'payment_link' && <LinkIcon className="h-4 w-4 mr-2 text-[#E85A27]" />}
                    {option.label}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>

          {/* Menu items */}
          <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
            {navigationItems.map((item) => {
              const isActive = item.href === "/dashboard" 
                ? pathname === item.href 
                : pathname.startsWith(item.href + '/');

              return (
                <SidebarItem
                  key={item.name}
                  item={item}
                  isActive={isActive}
                  isExpanded={expandedItems.includes(item.name)}
                  onToggle={() => toggleItem(item.name)}
                  onSelect={() => {}}
                  sidebarCollapsed={sidebarCollapsed}
                />
              );
            })}
          </div>

          {/* Collapse Button */}
          <div className="px-3 py-4 border-t border-gray-200">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full flex items-center p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label={sidebarCollapsed ? "Expandir menu" : "Minimizar menu"}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${sidebarCollapsed ? "rotate-180" : ""}`}
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              {!sidebarCollapsed && <span className="ml-2">Minimizar menu</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <main className={`flex-1 overflow-y-auto p-6 mt-16 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-[70px]' : 'md:ml-[312px]'}`}>
          {children}

          {/* AI Assistant button */}
          <Button
            onClick={() => setAIAssistantOpen(true)}
            className="w-12 h-12 fixed bottom-5 right-5 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white flex items-center justify-center"
            aria-label="Abrir assistente AI"
          >
            <Sparkles className="h-6 w-6 text-white" />
          </Button>

          {/* Create Charge Popup */}
          <CreateChargePopup isOpen={createChargeOpen} onClose={() => setCreateChargeOpen(false)} />

          {/* AI Assistant Popup */}
          <AIAssistantPopup isOpen={aiAssistantOpen} onClose={() => setAIAssistantOpen(false)} />
        </main>
      </div>
    </div>
  );
}
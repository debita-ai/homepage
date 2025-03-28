"use client";

import { useState } from "react";
import { Settings, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConfiguracoesPage() {
  const [settings, setSettings] = useState({
    notificacoes: true,
    tema: "claro",
    idioma: "pt-br",
  });

  const handleToggleNotifications = () => {
    setSettings({ ...settings, notificacoes: !settings.notificacoes });
  };

  const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, tema: e.target.value });
  };

  const handleChangeIdioma = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, idioma: e.target.value });
  };

  const handleSave = () => {
    // Simulação de salvamento
    alert("Configurações salvas!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
        <Settings className="mr-2 text-[#E85A27]" /> Configurações
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Notificações</span>
          <button
            onClick={handleToggleNotifications}
            className={`p-2 rounded ${settings.notificacoes ? "bg-green-500" : "bg-red-500"}`}
          >
            {settings.notificacoes ? "Ativo" : "Inativo"}
          </button>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Tema</label>
          <select value={settings.tema} onChange={handleChangeTheme} className="w-full p-2 border rounded">
            <option value="claro">Claro</option>
            <option value="escuro">Escuro</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Idioma</label>
          <select value={settings.idioma} onChange={handleChangeIdioma} className="w-full p-2 border rounded">
            <option value="pt-br">Português (Brasil)</option>
            <option value="en">Inglês</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSave} className="bg-[#E85A27] hover:bg-[#D84A1F] text-white flex items-center">
            <Save size={16} className="mr-2" /> Salvar Configurações
          </Button>
        </div>
      </div>
    </div>
  );
}

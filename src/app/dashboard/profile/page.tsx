"use client";

import { useState } from "react";
import { User, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PerfilPage() {
  const [perfil, setPerfil] = useState({
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "1234-5678",
  });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(perfil);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setPerfil(formData);
    setEditMode(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
        <User className="mr-2 text-[#E85A27]" /> Meu Perfil
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Nome:</label>
          {editMode ? (
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mt-1"
            />
          ) : (
            <p className="mt-1 text-gray-900">{perfil.nome}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email:</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mt-1"
            />
          ) : (
            <p className="mt-1 text-gray-900">{perfil.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Telefone:</label>
          {editMode ? (
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mt-1"
            />
          ) : (
            <p className="mt-1 text-gray-900">{perfil.telefone}</p>
          )}
        </div>
        <div className="flex justify-end">
          {editMode ? (
            <Button onClick={handleSave} className="bg-[#E85A27] hover:bg-[#D84A1F] text-white">
              Salvar
            </Button>
          ) : (
            <Button onClick={() => setEditMode(true)} className="bg-[#E85A27] hover:bg-[#D84A1F] text-white flex items-center">
              <Edit size={16} className="mr-2" /> Editar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

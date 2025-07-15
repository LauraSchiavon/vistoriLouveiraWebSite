import React, { useState } from "react";
import {
  X,
  Calendar,
  User,
  Phone,
  Car,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    tipoVistoria: "",
    tipoVeiculo: "",
    veiculo: "",
    data: "",
    horario: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // URL do webhook do Make.com (você vai configurar isso)
      const makeWebhookUrl =
        "https://hook.us2.make.com/4zu4stco0o3pxcsovloh1bvufl56ynl2";

      // Preparar dados para envio
      const agendamentoData = {
        nome: formData.nome,
        telefone: formData.telefone,
        tipoVistoria: formData.tipoVistoria,
        tipoVeiculo: formData.tipoVeiculo,
        veiculo: formData.veiculo,
        data: formData.data,
        horario: formData.horario,
        dataCompleta: `${formData.data}T${formData.horario}:00`,
        timestamp: new Date().toISOString(),
        // Dados adicionais para o Make.com
        emailCalendar: "lauraschiavon00@gmail.com",
        nomeEmpresa: "Vistori Louveira",
        localVistoria: "Vistori Louveira - Louveira, SP",
      };

      // Enviar para Make.com
      const response = await fetch(makeWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agendamentoData),
      });

      if (response.ok) {
        setSubmitStatus("success");

        // Resetar formulário após 2 segundos
        setTimeout(() => {
          setFormData({
            nome: "",
            telefone: "",
            tipoVistoria: "",
            tipoVeiculo: "",
            veiculo: "",
            data: "",
            horario: "",
          });
          setSubmitStatus("idle");
          onClose();
        }, 2000);
      } else {
        throw new Error("Erro ao enviar agendamento");
      }
    } catch (error) {
      console.error("Erro:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Agendar Vistoria</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            disabled={isSubmitting}
          >
            <X size={24} />
          </button>
        </div>

        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border-l-4 border-green-400 m-6">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <div>
                <p className="text-green-800 font-semibold">
                  Agendamento realizado com sucesso!
                </p>
                <p className="text-green-700 text-sm">
                  Você receberá uma confirmação no WhatsApp em breve.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border-l-4 border-red-400 m-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <div>
                <p className="text-red-800 font-semibold">Erro ao agendar</p>
                <p className="text-red-700 text-sm">
                  Tente novamente ou entre em contato pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-1" />
              Nome Completo
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline w-4 h-4 mr-1" />
              Telefone (com DDD)
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Vistoria
            </label>
            <select
              name="tipoVistoria"
              value={formData.tipoVistoria}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Selecione o tipo</option>
              <option value="Transferência">Transferência</option>
              <option value="Licenciamento">Licenciamento</option>
              <option value="Primeira Habilitação">Primeira Habilitação</option>
              <option value="Renovação">Renovação</option>
              <option value="Sinistro">Sinistro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Car className="inline w-4 h-4 mr-1" />
              Tipo de Veículo
            </label>
            <select
              name="tipoVeiculo"
              value={formData.tipoVeiculo}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Selecione o tipo</option>
              <option value="Carro">Carro</option>
              <option value="Moto">Moto</option>
              <option value="Caminhão">Caminhão</option>
              <option value="Van">Van</option>
              <option value="Ônibus">Ônibus</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Veículo (Marca/Modelo)
            </label>
            <input
              type="text"
              name="veiculo"
              value={formData.veiculo}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
              placeholder="Ex: Honda Civic, Yamaha YZF, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Data
            </label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline w-4 h-4 mr-1" />
              Horário
            </label>
            <select
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Selecione o horário</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Agendando...
                </>
              ) : (
                "Agendar Vistoria"
              )}
            </button>
          </div>
        </form>

        <div className="px-6 pb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Como funciona:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                • Seu agendamento será automaticamente adicionado à nossa agenda
              </li>
              <li>• Você receberá uma confirmação no WhatsApp</li>
              <li>• Entraremos em contato para confirmar os detalhes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;

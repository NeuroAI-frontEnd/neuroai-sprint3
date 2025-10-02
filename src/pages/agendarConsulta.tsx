import { useState } from "react";

export default function AgendarConsulta() {
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      nome: (form.nome as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      especialidade: (form.especialidade as HTMLSelectElement).value,
      data: (form.data as HTMLInputElement).value,
      hora: (form.hora as HTMLInputElement).value,
    };

    if (!data.nome || !data.email || !data.especialidade || !data.data || !data.hora) {
      setMensagem("⚠ Preencha todos os campos!");
      return;
    }

    const consultas = JSON.parse(localStorage.getItem("consultas") || "[]");
    consultas.push(data);
    localStorage.setItem("consultas", JSON.stringify(consultas));

    setMensagem("✅ Consulta agendada com sucesso!");
    form.reset();
  };

  return (
    <section className="container mx-auto max-w-lg">
      <h1 className="text-3xl font-bold my-6">Agendar Consulta</h1>

      {mensagem && (
        <div className="mb-4 p-3 rounded text-center bg-blue-100 text-blue-700">
          {mensagem}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nome Completo</label>
          <input
            type="text"
            name="nome"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Especialidade</label>
          <select name="especialidade" className="w-full border rounded p-2">
            <option value="">Selecione</option>
            <option value="neurologia">Neurologia</option>
            <option value="psiquiatria">Psiquiatria</option>
            <option value="psicologia">Psicologia</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Data</label>
          <input type="date" name="data" className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium">Horário</label>
          <input type="time" name="hora" className="w-full border rounded p-2" />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Agendar
        </button>
      </form>
    </section>
  );
}
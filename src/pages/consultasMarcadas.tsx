import { useEffect, useState } from "react";

type Consulta = {
  nome: string;
  email: string;
  especialidade: string;
  data: string;
  hora: string;
};

export default function ConsultasMarcadas() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("consultas") || "[]");
    setConsultas(stored);
  }, []);

  const removerConsulta = (index: number) => {
    const novas = consultas.filter((_, i) => i !== index);
    setConsultas(novas);
    localStorage.setItem("consultas", JSON.stringify(novas));
  };

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold my-6">Consultas Marcadas</h1>
      {consultas.length === 0 ? (
        <p className="text-gray-600">Nenhuma consulta marcada.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultas.map((c, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{c.nome}</h2>
                <p>Email: {c.email}</p>
                <p>Especialidade: {c.especialidade}</p>
                <p>
                  Data: {c.data} às {c.hora}
                </p>
              </div>
              <button
                onClick={() => removerConsulta(i)}
                className="mt-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function Contato() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const onSubmit = (data: FormData) => {
    console.log("Enviado:", data);
    setFeedback({ type: "success", msg: "Mensagem enviada com sucesso!" });
    reset();
  };

  return (
    <section className="container mx-auto max-w-lg">
      <h2 className="text-2xl font-bold my-4">Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Nome</label>
          <input
            {...register("nome", { required: "Nome é obrigatório" })}
            className="w-full border p-2 rounded"
          />
          {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email é obrigatório" })}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block font-medium">Mensagem</label>
          <textarea
            {...register("mensagem", { required: "Mensagem é obrigatória" })}
            className="w-full border p-2 rounded"
          />
          {errors.mensagem && <p className="text-red-500">{errors.mensagem.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>

      {feedback && (
        <p className={`mt-4 font-semibold ${feedback.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {feedback.msg}
        </p>
      )}
    </section>
  );
}
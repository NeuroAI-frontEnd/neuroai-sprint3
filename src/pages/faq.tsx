import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { q: "Como funciona o sistema?", a: "Você pode agendar consultas online e acompanhar seu histórico." },
    { q: "Preciso pagar para usar?", a: "Não, o sistema é totalmente gratuito." },
  ];

  return (
    <section className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">FAQ</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded p-3">
            <button
              className="w-full text-left font-semibold"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
            </button>
            {open === i && <p className="mt-2 text-gray-700">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
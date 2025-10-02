import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">NeuroAI</h1>
        <ul className="flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/integrantes">Integrantes</Link></li>
          <li><Link to="/consultasMarcadas">Consultas marcadas</Link></li>
          <li><Link to="/agendarConsultas">Agendar consultas</Link></li>
        </ul>
      </nav>
    </header>
  );
}
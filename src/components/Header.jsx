import Link from "next/link";

export default function Header() {
  return (
    <header>
        <h1 id="logo_txt">Eto12</h1>
        <ul>
      <Link className="links_H" href="/">Home</Link>
      <Link className="links_H" href="/sobre">Sobre</Link>
      <Link className="links_H" href="/usuarios">Usuários</Link>
      <Link className="links_H" href="/formulario">Cadastro</Link>
        </ul>
    </header>
  );
}

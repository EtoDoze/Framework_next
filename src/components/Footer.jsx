import Link from "next/link"

export default function Footer(){
    return <>
    <footer>
    <h5 id="H5_F">Os direitos desse site são de Eto12</h5>
    <ul className="F_links">
      <Link id="link_F" href="https://www.youtube.com/@eto1254">Youtube</Link>
      <Link id="link_F" href="/usuarios">Instagram</Link>
      <Link id="link_F" href="/formulario">E-mail</Link>
    </ul>
    </footer>
    </>
}
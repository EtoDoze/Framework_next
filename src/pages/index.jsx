import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home(){
  return <>
    <Header />
    <main className="main_index">
    <h1 id="h1_Index">Pagina inicial</h1>
    <p>Esse site foi criado com intuito de testes<br/>
     e aprendizagem</p>
    </main>
    <Footer />
  </>
}
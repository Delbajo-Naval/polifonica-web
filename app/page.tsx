import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Programa from "@/components/Programa";
import Instituciones from "@/components/Instituciones";
import Empresas from "@/components/Empresas";
import Galeria from "@/components/Galeria";
import EnLosMedios from "@/components/EnLosMedios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <div id="colaboraciones" />
        <Programa />
        <Instituciones />
        <Empresas />
        <div id="curaduria" />
        <Galeria />
        <EnLosMedios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

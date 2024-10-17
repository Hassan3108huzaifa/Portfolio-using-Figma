import Portfolio from "@/components/Portfolio";
import Header from "../components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <hr className="border-[#484848] border-t" />
      <Portfolio />
      <hr className="border-[#484848] border-t" />
      <About />
      <hr className="border-[#484848] border-t" />
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

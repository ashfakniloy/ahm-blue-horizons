import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Packages from "../components/Home/Packages";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Services />
      <Packages />
      <About />
      <Contact />
    </div>
  );
}

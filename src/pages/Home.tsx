import BestSeller from "@/components/BestSeller";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Product from "@/components/Product";
import Subscribe from "@/components/Subscribe";

function Home() {
  const backgroundColor = "bg-pastel-pink";
  const coral = "bg-pastel-coral";

  return (
    <>
      <NavBar backgroundColor={backgroundColor} />
      <Hero backgroundColor={backgroundColor} />
      <Product />
      <Featured />
      <Subscribe coral={coral} />
      <BestSeller />
      {/* <Footer /> */}
    </>
  );
}

export default Home;

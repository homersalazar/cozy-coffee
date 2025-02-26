import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Product from "@/components/Product";

function Home() {
  const backgroundColor = "bg-pastel-pink";
  return (
    <>
      <NavBar backgroundColor={backgroundColor} />
      <Hero backgroundColor={backgroundColor} />
      <Product />
      <Featured />
    </>
  );
}

export default Home;

import { Button } from "@/components/ui/button";
import useCafeServices, { Cafe } from "@/api/CafeServices";

const Hero = ({ backgroundColor }: { backgroundColor: string }) => {
  const { data = [], loading } = useCafeServices();

  const singleCoffee: Cafe | undefined = data.length > 0 ? data[19] : undefined;

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center gap-5 w-full h-auto md:h-[70vh] p-10 border-b-2 border-dark-blue ${backgroundColor}`}
    >
      <div className="flex flex-row justify-center w-full">
        {loading ? (
          <p className="text-dark-blue">Loading...</p>
        ) : (
          singleCoffee && (
            <img
              key={(singleCoffee as Cafe).id}
              src={(singleCoffee as Cafe).image_url}
              alt={(singleCoffee as Cafe).name}
              className="h-84 object-cover rounded-md"
            />
          )
        )}
      </div>
      <div className="flex flex-col w-full max-sm:items-center gap-5 text-center md:text-left max-w-2xl">
        <h1 className="text-3xl md:text-5xl text-dark-blue font-semibold">
          Welcome to Cozy Coffee – Where Every Sip Feels Like Home!
        </h1>
        <p className="text-light-blue text-xl font-semibold">
          At our shop, every cup is crafted with care, bringing warmth, flavor,
          and community to your day. Whether you're here for a quick pick-me-up,
          a cozy chat with friends, or a quiet moment to unwind, we have the
          perfect brew waiting for you.
        </p>
        <Button
          className="bg-dark-blue w-48 hover:bg-light-blue p-6 font-bold md:text-lg"
          size="lg"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default Hero;

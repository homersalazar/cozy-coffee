import { Button } from "@/components/ui/button";
// import { useFetch } from "@/hooks/useFetch";

const Hero = ({ backgroundColor }: { backgroundColor: string }) => {
  // const apiUrl = import.meta.env.VITE_API_URL;
  // if (!apiUrl) {
  //   console.error("API URL is not defined. Check your .env file.");
  // }

  // const { data, loading } = useFetch({ url: apiUrl });

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center gap-5 w-full h-auto md:h-[70vh] p-10 border-b border-1 border-dark-blue ${backgroundColor}`}
    >
      <div className="flex flex-row justify-center w-full">
        {/* {loading ? (
          <p className="text-dark-blue">Loading...</p>
        ) : (
          data.length > 0 && (
            <img
              key={data[19].id}
              src={data[19].image_path}
              alt={data[19].name}
              className="h-84 object-cover rounded-md"
            />
          )
        )} */}
        <img
          src="https://placehold.co/600x400/EEE/31343C?font=lora&text=Lora"
          alt="coffe image"
          className="h-84 object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col w-full max-sm:items-center gap-5 text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl text-dark-blue font-semibold">
          Welcome to Cozy Coffee – Where Every Sip Feels Like Home!
        </h1>
        <p className="text-light-blue text-xl md:font-semibold">
          At our shop, every cup is crafted with care, bringing warmth, flavor,
          and community to your day. Whether you're here for a quick pick-me-up,
          a cozy chat with friends, or a quiet moment to unwind, we have the
          perfect brew waiting for you.
        </p>
        <Button
          className="bg-dark-blue w-48 hover:bg-light-blue p-6 font-bold text-xl rounded-[1rem]"
          size="lg"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default Hero;

import { Coffee, History, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Subscribe = ({ coral }: { coral: string }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-[85vh] ${coral}`}
    >
      <h1 className="text-5xl font-semibold text-dark-blue">
        Love our coffee?
      </h1>
      <p className="text-lg max-w-5xl leading-relaxed mt-4 text-center text-dark-blue">
        Join our yearly subscription and enjoy{" "}
        <span className="font-semibold">50% off</span> on everything coffee!
        From premium beans to brewing essentials, get the best coffee experience
        at half the price. Don’t miss out—
        <span className="font-semibold">subscribe today!</span>
      </p>
      <div className="grid grid-cols-3 place-items-center w-full p-10">
        <div className="flex flex-col items-center justify-center">
          <Card className="bg-pastel-orange p-5">
            <Coffee size={72} className="text-dark-blue" />
          </Card>
          <p className="bg-pastel-orange mt-5 px-10 py-2.5 rounded-xl text-base text-light-blue font-bold">
            Pick your favorite coffee
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Card className="bg-pastel-orange p-5">
            <History size={72} className="text-dark-blue" />
          </Card>
          <p className="bg-pastel-orange mt-5 px-10 py-2.5 rounded-xl text-base text-light-blue font-bold">
            Timeless Brew
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Card className="bg-pastel-orange p-5">
            <X size={72} className="text-dark-blue" />
          </Card>
          <p className="bg-pastel-orange mt-5 px-10 py-2.5 rounded-xl text-base text-light-blue font-bold">
            Seamless Cancellation
          </p>
        </div>
      </div>
      <Button className="bg-dark-blue w-52 hover:bg-light-blue px-5 py-6 font-bold text-base rounded-[1rem]">
        Subscribe now
      </Button>
      <p className="text-dark-blue font-semibold py-5">
        Existing subscriber? <a href="#">Change your preferences here.</a>
      </p>
    </div>
  );
};

export default Subscribe;

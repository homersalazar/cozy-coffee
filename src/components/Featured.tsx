import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Featured = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-3 h-auto md:h-screen bg-pastel-blue p-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-dark-blue">
        Now available!
      </h1>
      <p className="md:text-xl text-light-blue text-center">
        Check out our newest products directly in your browser.
      </p>
      <div className="flex flex-row gap-10 px-10 py-5 w-full">
        <Card className="text-center">
          <CardHeader>
            <img
              src="https://placehold.co/600x400"
              alt="supposed to be an image"
              className="pt-2 bg-pastel-blue"
            />
          </CardHeader>
          <CardTitle className="text-2xl font-bold text-dark-blue">
            Peppermint Coffee
          </CardTitle>
          <CardDescription className="w-full px-10 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            rem architecto eaque repellat atque cum impedit quaerat temporibus?
            Vitae
          </CardDescription>
          <CardFooter className="flex justify-center mt-5">
            <Button className="bg-dark-blue w-32 hover:bg-light-blue p-4 font-bold text-base">
              Buy Now
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <img
              src="https://placehold.co/600x400"
              alt="supposed to be an image"
              className="pt-2 bg-pastel-blue"
            />
          </CardHeader>
          <CardTitle className="text-2xl font-bold text-dark-blue">
            Peppermint Coffee
          </CardTitle>
          <CardDescription className="w-full px-10 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            rem architecto eaque repellat atque cum impedit quaerat temporibus?
            Vitae
          </CardDescription>
          <CardFooter className="flex justify-center mt-5">
            <Button className="bg-dark-blue w-32 hover:bg-light-blue p-4 font-bold text-base">
              Buy Now
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <img
              src="https://placehold.co/600x400"
              alt="supposed to be an image"
              className="pt-2 bg-pastel-blue"
            />
          </CardHeader>
          <CardTitle className="text-2xl font-bold text-dark-blue">
            Peppermint Coffee
          </CardTitle>
          <CardDescription className="w-full px-10 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            rem architecto eaque repellat atque cum impedit quaerat temporibus?
            Vitae
          </CardDescription>
          <CardFooter className="flex justify-center mt-5">
            <Button className="bg-dark-blue w-32 hover:bg-light-blue p-4 font-bold text-base">
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Featured;

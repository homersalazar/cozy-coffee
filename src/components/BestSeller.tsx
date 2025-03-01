import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BestSeller = () => {
  return (
    <div className="flex flex-row gap-10 w-full h-[60vh] p-20 bg-pastel-orange">
      <div className="flex flex-col w-full justify-center gap-5">
        <h1 className="text-4xl font-bold text-dark-blue">
          Don't miss out—discover why our best seller is a customer favorite!
        </h1>
        <p className="text-lg text-dark-blue">
          Searching for something truly exceptional? Our best seller delivers
          the perfect combination of quality and flavor that keeps customers
          coming back. Whether you’re a loyal fan or trying it for the first
          time, this top-rated favorite is sure to impress. Order now and
          experience what makes it so special!
        </p>
      </div>
      <div className="flex flex-row items-center gap-5 w-full">
        <Card className="w-full h-72 flex flex-col justify-between">
          <CardHeader className="flex flex-col items-center">
            <img
              src="https://placehold.co/600x400"
              alt="supposed to be an image"
              className="w-full h-32 bg-pastel-blue"
            />
            <div className="flex justify-center w-full">
              <CardTitle className="bg-pastel-orange p-3 rounded-xl text-dark-blue text-center w-32 mt-1">
                ₱ 500.00
              </CardTitle>
            </div>
            <CardDescription className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-xl text-dark-blue font-bold">TITLE</h1>
              <p className="text-light-blue text-base font-semibold">Flavorz</p>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full h-72 flex flex-col justify-between">
          <CardHeader className="flex flex-col items-center">
            <img
              src="https://placehold.co/600x400"
              alt="supposed to be an image"
              className="w-full h-32 bg-pastel-blue"
            />
            <div className="flex justify-center w-full">
              <CardTitle className="bg-pastel-orange p-3 rounded-xl text-dark-blue text-center w-32 mt-1">
                ₱ 500.00
              </CardTitle>
            </div>
            <CardDescription className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-xl text-dark-blue font-bold">TITLE</h1>
              <p className="text-light-blue text-base font-semibold">Flavorz</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default BestSeller;

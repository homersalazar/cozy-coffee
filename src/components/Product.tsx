import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Product = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-10 p-10 w-full md:h-[60vh] h-auto">
      <Card className="w-[350px] border-none shadow-none">
        <CardContent className=" bg-pastel-orange">
          <img
            src="https://placehold.co/600x400"
            alt="supposed to be an image"
            className="pt-5"
          />
        </CardContent>
        <CardFooter className="flex justify-center mt-4 text-xl text-light-blue font-semibold">
          Coffee
        </CardFooter>
      </Card>
      <Card className="w-[350px] border-none shadow-none">
        <CardContent className=" bg-pastel-orange">
          <img
            src="https://placehold.co/600x400"
            alt="supposed to be an image"
            className="pt-5"
          />
        </CardContent>
        <CardFooter className="flex justify-center mt-4 text-xl text-light-blue font-semibold">
          Bundles
        </CardFooter>
      </Card>
      <Card className="w-[350px] border-none shadow-none">
        <CardContent className=" bg-pastel-orange">
          <img
            src="https://placehold.co/600x400"
            alt="supposed to be an image"
            className="pt-5"
          />
        </CardContent>
        <CardFooter className="flex justify-center mt-4 text-xl text-light-blue font-semibold">
          Subscription
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;

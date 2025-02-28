import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useFetch } from "@/hooks/useFetch";

const Featured = () => {
  // const { data } = useFetch({ url: `${import.meta.env.VITE_API_URL}` });
  return (
    <div className="flex flex-col w-full justify-center items-center gap-3 h-auto md:h-screen bg-pastel-blue p-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-dark-blue">
        Now available!
      </h1>
      <p className="md:text-xl text-light-blue text-center">
        Check out our newest products directly in your browser.
      </p>
      <div className="flex flex-row gap-10 px-10 py-5 w-full">
        {/* {data.map((product: any) => (
          <Card key={product.id} className="text-center">
            <CardHeader>
              <img
                src={product.image_path}
                alt={product.name}
                className="pt-2 bg-pastel-blue"
              />
            </CardHeader>
            <CardTitle className="text-2xl font-bold text-dark-blue">
              {product.name}
            </CardTitle>
            <CardDescription className="w-full px-10 mt-2">
              {product.description}
            </CardDescription>
            <CardFooter className="flex justify-center mt-5">
              <Button className="bg-dark-blue w-32 hover:bg-light-blue p-4 font-bold text-base">
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))} */}

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

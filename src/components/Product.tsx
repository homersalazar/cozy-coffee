import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useFetch } from "@/hooks/useFetch";

const Product = () => {
  const { data, loading } = useFetch({ url: `${import.meta.env.VITE_API_URL}` });
  const product_categories = [
    { index: 16, title: "Coffee" },
    { index: 17, title: "Bundles" },
    { index: 18, title: "Subscription" },
  ];

  return (
    <div className="flex flex-row justify-center items-center gap-10 p-10 w-full md:h-[60vh] h-auto">
      {product_categories.map(({ index, title }) => (
        <Card
          key={title}
          className="w-full md:w-[350px] border-none shadow-none"
        >
          <CardContent className="bg-pastel-orange">
            {loading ? (
              <p className="text-dark-blue">Loading...</p>
            ) : (
              data.length > index && (
                <img
                  key={data[index].id}
                  src={data[index].image_path}
                  alt={data[index].name}
                  className="h-64 w-full object-cover rounded-md"
                />
              )
            )}
          </CardContent>
          <CardFooter className="flex justify-center mt-4 text-xl text-light-blue font-semibold">
            {title}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Product;

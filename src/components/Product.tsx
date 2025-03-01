import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import SwiperCore, { Pagination } from "swiper";
import { useMediaQuery } from "react-responsive";

// install Swiper modules
SwiperCore.use([Pagination]);

const Product = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const product_categories = [
    {
      id: 1,
      title: "Coffee",
      image_path: "https://placehold.co/400",
    },
    {
      id: 2,
      title: "Bundles",
      image_path: "https://placehold.co/400",
    },
    {
      id: 3,
      title: "Subscription",
      image_path: "https://placehold.co/400",
    },
  ];

  return (
    <div className="p-10 w-full md:h-[60vh] h-auto">
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          pagination={{ clickable: true }}
        >
          {product_categories.map(({ id, image_path, title }) => (
            <SwiperSlide key={id}>
              <Card className="w-full border-none shadow-none">
                <CardContent className="bg-pastel-orange flex justify-center items-center">
                  <img
                    src={image_path}
                    alt={title}
                    className="h-64 w-full object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter className="flex justify-center mt-4 text-xl text-light-blue font-semibold">
                  {title}
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-row justify-center items-center gap-10">
          {product_categories.map(({ id, image_path, title }) => (
            <Card
              key={title}
              className="w-full md:w-[350px] border-none shadow-none"
            >
              <CardContent className="bg-pastel-orange flex justify-center items-center">
                <img
                  key={id}
                  src={image_path}
                  alt={title}
                  className="h-64 w-full object-cover rounded-md"
                />
              </CardContent>
              <CardFooter className="flex justify-center mt-4 text-xl text-light-blue font-semibold">
                {title}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style.css";

const Product = () => {
  const product_categories = [
    {
      id: 1,
      title: "Tea",
      image_path: "https://placehold.co/400",
      description: "A variety of teas to choose from.",
    },
    {
      id: 2,
      title: "Bundles",
      image_path: "https://placehold.co/400",
      description: "Special bundles for every occasion.",
    },
    {
      id: 3,
      title: "Subscription",
      image_path: "https://placehold.co/400",
      description: "Subscribe and save on your favorite products.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10 h-auto p-5 lg:h-screen w-full mx-auto bg-pastel-blue">
      <div className="text-center w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-dark-blue">
          Now available!
        </h1>
        <p className="md:text-xl text-lg text-light-blue">
          Check out our newest products directly in your browser.
        </p>
      </div>

      <div className="w-full">
        <Swiper
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1 }, // Small screens
            640: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Laptops
            1440: { slidesPerView: 3 }, // Large screens
          }}
          spaceBetween={20}
          modules={[Navigation]}
          // centeredSlides={true}
          className="mx-auto"
        >
          {product_categories.map(({ id, image_path, title, description }) => (
            <SwiperSlide key={id}>
              <Card className="border-none shadow-none mx-auto max-w-sm">
                <CardContent className="bg-stone-50 flex justify-center items-center p-3">
                  <img
                    src={image_path}
                    alt={title}
                    className="h-64 w-full object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter className="flex flex-col justify-center mt-4 text-xl text-teal-800 font-semibold">
                  {title}
                  <span className="text-sm text-gray-600">{description}</span>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;

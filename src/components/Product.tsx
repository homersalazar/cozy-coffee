import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style.css";

const Product = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state based on window width
    setIsMobile(window.innerWidth < 768);

    // Update state when window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const product_categories = [
    {
      id: 1,
      title: "Tea",
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

  // Desktop view - regular grid
  if (!isMobile) {
    return (
      <div className="flex flex-row justify-center items-center md:gap-10 lg:gap-20 md:p-10 w-full h-[60vh] border-2 border-dark-blue">
        {product_categories.map(({ id, image_path, title }) => (
          <Card key={id} className="w-full md:w-80 border-none shadow-none">
            <CardContent className="bg-stone-50 flex justify-center items-center p-0">
              <img
                src={image_path}
                alt={title}
                className="h-64 w-full object-cover rounded-md"
              />
            </CardContent>
            <CardFooter className="flex justify-center mt-4 text-xl text-teal-800 font-semibold">
              {title}
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  // Mobile view - swiper
  return (
    <div className="p-5 w-full h-auto border-2 border-dark-blue">
      <Swiper navigation={true} slidesPerView={2} modules={[Navigation]}>
        {product_categories.map(({ id, image_path, title }) => (
          <SwiperSlide key={id}>
            <Card className="w-full border-none shadow-none py-16">
              <CardContent className="bg-stone-50 flex justify-center items-center p-2">
                <img
                  src={image_path}
                  alt={title}
                  className="h-64 w-full object-cover rounded-md"
                />
              </CardContent>
              <CardFooter className="flex justify-center mt-4 text-xl text-teal-800 font-semibold">
                {title}
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;

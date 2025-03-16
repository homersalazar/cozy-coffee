import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style.css";

const BestSeller = () => {
  const product_details = [
    {
      id: 1,
      title: "Earl Gray",
      image_path: "https://placehold.co/400",
      flavor: "Bold and Fruity Taste",
      price: "$9",
    },
    {
      id: 2,
      title: "Jasmine Tea",
      image_path: "https://placehold.co/400",
      flavor: "Light and Refreshing Taste",
      price: "$9",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full h-auto p-10 md:p-20 bg-[#F7F2E8]">
      {/* Left Section - Text */}
      <div className="flex flex-col w-full lg:w-1/2 justify-center gap-5">
        <h1 className="text-5xl font-serif font-bold text-dark-blue">
          Don't miss out—discover why our best seller is a customer favorite!
        </h1>
        <p className="text-lg text-dark-blue leading-relaxed">
          Searching for something truly exceptional? Our best seller delivers
          the perfect combination of quality and flavor that keeps customers
          coming back. Whether you’re a loyal fan or trying it for the first
          time, this top-rated favorite is sure to impress. Order now and
          experience what makes it so special!
        </p>
      </div>

      {/* Right Section - Swiper */}
      <div className="flex flex-row items-center w-full lg:w-1/2">
        <Swiper
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          spaceBetween={20}
          modules={[Navigation]}
          className="mx-auto"
        >
          {product_details.map(({ id, image_path, title, flavor, price }) => (
            <SwiperSlide key={id}>
              <Card className="w-full h-auto p-5 bg-white shadow-lg rounded-xl flex flex-col justify-between">
                <CardHeader className="flex flex-col items-center">
                  {/* Product Image */}
                  <div className="w-40 h-40 bg-pastel-pink flex items-center justify-center rounded-lg">
                    <img
                      src={image_path}
                      alt={title}
                      className="w-28 h-28 object-cover"
                    />
                  </div>

                  {/* Price Tag */}
                  <div className="mt-3">
                    <span className="bg-[#F7D9C4] text-dark-blue py-1 px-4 rounded-full text-lg font-semibold">
                      {price}
                    </span>
                  </div>

                  {/* Title & Flavor */}
                  <CardDescription className="flex flex-col gap-2 justify-center items-center mt-2">
                    <h1 className="text-xl text-dark-blue font-bold">
                      {title}
                    </h1>
                    <p className="text-light-blue text-base font-medium">
                      {flavor}
                    </p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;

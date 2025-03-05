// import { Coffee, History, X } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const Subscribe = ({ coral }: { coral: string }) => {
//   return (
//     <div
//       className={`flex flex-col items-center justify-center p-5 w-full md:h-[85vh] h-auto ${coral}`}
//     >
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-blue">
//         Love our coffee?
//       </h1>
//       <p className="text-base md:text-lg max-w-5xl leading-relaxed mt-4 text-center text-dark-blue">
//         Join our yearly subscription and enjoy
//         <span className="font-semibold">50% off</span> on everything coffee!
//         From premium beans to brewing essentials, get the best coffee experience
//         at half the price. Don’t miss out—
//         <span className="font-semibold">subscribe today!</span>
//       </p>
//       <div className="grid grid-cols-3 place-items-center w-full max-sm:gap-5 md:p-10">
//         <div className="flex flex-col items-center justify-center">
//           <Card className="bg-pastel-orange p-5">
//             <Coffee className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-dark-blue" />
//           </Card>
//           <p className="bg-pastel-orange mt-5 md:px-10 py-2.5 rounded-xl text-sm md:text-base text-light-blue font-bold text-center px-3">
//             Pick your favorite coffee
//           </p>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <Card className="bg-pastel-orange p-5">
//             <History className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-dark-blue" />
//           </Card>
//           <p className="bg-pastel-orange mt-5 md:px-10 py-2.5 rounded-xl text-sm md:text-base text-light-blue font-bold text-center px-3">
//             Timeless Brew
//           </p>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <Card className="bg-pastel-orange p-5">
//             <X className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-dark-blue" />
//           </Card>
//           <p className="bg-pastel-orange mt-5 md:px-10 py-2.5 rounded-xl text-sm md:text-base text-light-blue font-bold text-center px-3">
//             Seamless Cancellation
//           </p>
//         </div>
//       </div>
//       <Button className="bg-dark-blue w-52 hover:bg-light-blue px-5 py-6 font-bold text-base rounded-[1rem]">
//         Subscribe now
//       </Button>
//       <p className="text-dark-blue font-semibold py-5">
//         Existing subscriber? <a href="#">Change your preferences here.</a>
//       </p>
//     </div>
//   );
// };

// export default Subscribe;
import { Card } from "@/components/ui/card";
import { CoffeeIcon, Clock, X } from "lucide-react";

const Subscribe = ({ coral }: { coral: string }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-5 w-full md:h-[85vh] h-auto ${coral}`}
    >
      <h1 className="text-3xl md:text-4xl text-center font-semibold text-teal-800">
        Love our tea?
      </h1>
      <p className="text-base md:text-lg max-w-5xl leading-relaxed mt-4 text-center text-dark-blue">
        Join our yearly subscription and enjoy
        <span className="font-semibold">50% off</span> on everything coffee!
        From premium beans to brewing essentials, get the best coffee experience
        at half the price. Don’t miss out—
        <span className="font-semibold">subscribe today!</span>
      </p>
      <div className="grid grid-cols-3 gap-4 w-full max-w-md md:max-w-4xl my-8">
        <div className="flex flex-col items-center">
          <Card className="bg-pastel-orange p-5 rounded-lg">
            <CoffeeIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-dark-blue" />
          </Card>
          <p className="bg-pastel-orange my-5 md:px-5 md:py-2.5 p-1.5 text-sm text-center rounded-xl text-light-blue font-bold">
            Choose your coffee
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Card className="bg-pastel-orange p-5 rounded-lg">
            <Clock className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-dark-blue" />
          </Card>
          <p className="bg-pastel-orange my-5 md:px-5 md:py-2.5 p-1.5 text-sm text-center rounded-xl text-light-blue font-bold">
            Timeless Brew
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Card className="bg-pastel-orange p-5 rounded-lg">
            <X className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-dark-blue" />
          </Card>
          <p className="bg-pastel-orange my-5 md:px-5 md:py-2.5 p-1.5 text-sm text-center rounded-xl text-light-blue font-bold">
            Seamless Cancellation
          </p>
        </div>
      </div>
      <button className="text-white px-6 py-3 rounded-lg bg-dark-blue w-48 md:w-52 hover:bg-light-blue">
        Subscribe now
      </button>
      <p className="text-dark-blue font-semibold py-5 text-center">
        Existing subscriber? <a href="#">Change your preferences here.</a>
      </p>
    </div>
  );
};

export default Subscribe;

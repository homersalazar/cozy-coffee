import footer_logo from "@/assets/footer.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-dark-blue text-white p-10 gap-10">
      <div className="flex flex-col gap-5 w-full md:w-2/3">
        <p className="font-semibold text-base px-2">
          Let’s get in touch to explore the best deals curated just for you.{" "}
          <br />
          Don’t miss out on exclusive offers—connect with us today!
        </p>
        <img src={footer_logo} alt="footer image" className="w-32 h-12" />
        <div className="flex flex-row gap-3">
          <Facebook className="w-6 h-6" />
          <Instagram className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-full md:w-1/3">
        <ul className="w-full md:w-1/2">
          <li className="font-bold mb-2">Help</li>
          <li className="font-semibold mb-1">FAQ</li>
          <li className="font-semibold mb-1">Customer Service</li>
          <li className="font-semibold mb-1">How to guides</li>
          <li className="font-semibold mb-1">Contact us</li>
        </ul>
        <ul className="w-full md:w-1/2">
          <li className="font-bold mb-2">Other</li>
          <li className="font-semibold mb-1">Privacy Policy</li>
          <li className="font-semibold mb-1">Sitemap</li>
          <li className="font-semibold mb-1">Subscription</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

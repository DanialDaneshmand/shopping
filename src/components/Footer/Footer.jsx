import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-200  w-full flex items-center justify-around">
      <section>
        <p className="text-violet-900">product by :danial.d.1995 </p>
      </section>
      <section className="flex justify-center gap-12 p-6">
        <p className="text-2xl text-violet-900"><FaInstagramSquare/></p>
        <p className="text-2xl text-violet-900"><FaTelegram/></p>
        <p className="text-2xl text-violet-900"><FaWhatsappSquare/></p>
        <p className="text-2xl text-violet-900"><FaYoutubeSquare/></p>
      </section>
    </footer>
  );
};

export default Footer;

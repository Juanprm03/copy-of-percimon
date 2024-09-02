import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Producto({ title, description, img }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
      once: true,
    });
  }, []);
  return (
    <>
      <section
        className="w-full flex flex-wrap bg-custom-gradient items-center lg:h-screen lg:max-h-screen"
      >
        <div className="flex p-8 lg:w-1/2 lg:justify-end">
          <div className="flex flex-col gap-7 xl:w-1/2" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-emerald-500 tracking-[0.2em] xl:text-7xl">
              {title}
            </h1>
            <p className="text-zinc-500">{description}</p>
            <button className="border-2 border-emerald-500 w-48 py-2 text-emerald-500 hover:scale-95 transition-all duration-300 ease-in">
              VER MÁS
            </button>
          </div>
        </div>
        <div className="flex lg:w-1/2 lg:justify-start">
          <img className="w-fit 2xl:w-4/5" src={img} alt="imagen" data-aos="zoom-out" />
        </div>
      </section>
    </>
  );
}

export default Producto;

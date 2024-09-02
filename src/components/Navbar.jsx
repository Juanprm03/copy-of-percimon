import { useState, useEffect } from "react";
import Burger from "./Burger";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const handleClick = () => setOpen(!open);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Si el usuario está haciendo scroll hacia abajo, oculta la navbar
        setShowNavbar(false);
      } else {
        // Si el usuario está haciendo scroll hacia arriba, muestra la navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Limpia el evento cuando el componente se desmonta
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <nav
        className={`sticky lg:hidden top-0 left-0 w-full flex justify-between p-2 items-center bg-white z-10 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-4xl text-emerald-500 flex justify-start w-1/3 cursor-pointer">
          <label
            for="nav_bar_icon"
            class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
          >
            <input id="nav_bar_icon" type="checkbox" class="hidden peer" onClick={handleClick}/>
            <div class="w-2/3 h-1.5 bg-emerald-500 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"></div>
            <div class="w-full h-1.5 bg-emerald-500 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"></div>
            <div class="w-2/3 h-1.5 bg-emerald-500 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"></div>
          </label>
        </div>
        <div className="w-1/3 flex justify-center">
          <img
            className="w-36 flex"
            src="https://www.percimon.com/wp-content/themes/percimon/images/logo-percimon.svg"
          />
        </div>
        <div className="w-1/3"></div>
      </nav>
      <header className={`w-full relative`}>
        <nav className="hidden absolute xl:flex top-0 left-0 w-full justify-between items-center px-6 py-8">
          <img
            className="w-42 flex"
            src="https://www.percimon.com/wp-content/themes/percimon/images/logo-percimon.svg"
            alt="logo"
          />
          <ul className="flex gap-8 items-center p-2 font-semibold">
            <li className="text-emerald-500 cursor-pointer">CULTURA</li>
            <li className="text-emerald-500 cursor-pointer">PRODUCTOS</li>
            <li className="text-emerald-500 cursor-pointer">HAZ TU PEDIDO</li>
            <li className="text-emerald-500 cursor-pointer">TRABAJA AQUÍ</li>
            <li className="text-emerald-500 cursor-pointer">ORIGEN</li>
            <li className="text-emerald-500 cursor-pointer">ENCUÉTRANOS</li>
            <li className="text-emerald-500 cursor-pointer">CONTACTO</li>
            <li className="text-emerald-500 cursor-pointer">CAMPUS</li>
          </ul>
          <div className="flex gap-4 text-4xl text-emerald-500">
            <a href="https://www.facebook.com/percimonhelados" target="_blank">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.instagram.com/percimon" target="_blank">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </nav>
      </header>
      {open ? <Burger /> : null}
    </>
  );
}

export default Navbar;

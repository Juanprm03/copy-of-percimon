import React from "react";

function Burger() {
  return (
    <>
      <div className="w-full bg-white absolute sticky top-0 z-10">
        <ul className="w-full flex flex-col items-center text-lg text-emerald-500 px-6">
          <li className="p-2 border-b-2 border-slate-100 w-full text-center">
            CULTURA
          </li>
          <li className="p-2 border-b-2 border-slate-100 w-full text-center">
            PRODUCTOS
          </li>
          <li className="p-2 border-b-2 border-slate-100 w-full text-center">
            HAZ TU PEDIDO
          </li>
          <li className="p-2 border-b-2 border-slate-100 w-full text-center">
            TRABAJA AQUÍ
          </li>
          <li className="p-2 border-b-2 border-slate-100 w-full text-center">
            ORIGEN
          </li>
          <li className="p-2 border-b-2 border-slate-100 w-full text-center">
            ENCUÉNTRANOS
          </li>
          <li className="p-2 border-b-2 border-slate-100 w-full text-center">
            CONTACTO
          </li>
          <li className="p-2 w-full text-center">
            CAMPUS
          </li>
        </ul>
      </div>
    </>
  );
}

export default Burger;

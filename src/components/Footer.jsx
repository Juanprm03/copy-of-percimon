function Footer() {
  return (
    <>
      <footer className="w-full bg-emerald-500 text-white flex flex-col gap-12 items-center px-8">
        <div className="flex flex-col gap-12 lg:gap-40 xl:gap-80 items-center md:flex-row md:flex-wrap p-10">
          <div className="flex flex-col items-center">
            <div className="flex items-start md:items-start justify-start">
              <img
                className="w-96"
                src="https://www.percimon.com/wp-content/uploads/2022/08/logo-5.png"
              />
            </div>
            <div>
              <ul className="flex flex-col text-wrap text-center gap-4 md:text-start">
                <li>CULTURA</li>
                <li>PRODUCTOS</li>
                <li>TRABAJA CON NOSOTROS</li>
                <li>ENCUÉNTRANOS</li>
                <li>CONTACTO</li>
                <li>PILÍTICA DE PRIVACIDAD</li>
                <li>AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES</li>
                <li>AVISO DE PRIVACIDAD</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <ul className="flex flex-col gap-2 text-center md:text-start">
                <li>Calle 11 A # 31 A 89. Edificio Bosko</li>
                <li>Horario de atención oficina central:</li>
                <li>Lunes a Viernes de 8:00 am a 4:30 pm</li>
              </ul>
            </div>
            <div className="flex gap-2 text-xl justify-end w-full">
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
          </div>
        </div>
        <p className="mb-8 font-semibold">TODOS LOS DERECHOS RESERVADOS 2024</p>
      </footer>
    </>
  );
}

export default Footer;

import React from 'react'

const Footer = () => {
  return (
    <footer>
        <section class="container-fluid container-md">
            <div class = "contacto">
                <div class="copyright">
                    Copyright © 2022 ieshlanz. Todos los derechos reservados.
                </div>
                <ul id = "footer1">
                    <li class = "footer1">
                        <a href="tel:958893230"><img id ="fonoimg" src="/img/telefono.png"/>958893230</a>
                    </li>
                    <li class="footer1">
                        <a href="mailto:18004288.edu@juntadeandalucia.es"><img src="/img/email.png"/>18004288.edu@juntadeandalucia.es</a>
                    </li>
                </ul>
            </div>
            <div class ="contacto">
                <ul id="footer2">
                    <li class="footer2">
                        <a href="https://www.google.com/maps/place/IES+Hermenegildo+Lanz/@37.1837913,-3.6174361,15z/data=!4m5!3m4!1s0x0:0xe85a4066253543bf!8m2!3d37.1838355!4d-3.6175068" target="_blank">Ubicación</a>
                    </li>
                    <li class = "footer2"> 
                        <a href="https://www.ieshlanz.es/index.php/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer
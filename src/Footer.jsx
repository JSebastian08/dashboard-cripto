import React from "react";
import './Footer.css'
import LogoAngela from './img/LogoAngela.svg'

export default function Footer(){
    return(
        <div className="Foter">
            <div className="footer-up">
                <div className="footer-p">
                    <p>
                    DESCARGO DE RESPONSABILIDAD IMPORTANTE: Todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados, y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único objetivo proporcionarle información general procedente de fuentes externas. No ofrecemos garantías de ningún tipo en lo que respecta a nuestro contenido, y esto incluye, aunque no se limita únicamente a eso, la exactitud y vigencia de la información. Ninguna parte del contenido que ofrecemos debe interpretarse como un asesoramiento financiero, jurídico o de cualquier otro tipo en el que pueda basarse de forma específica para la consecución de algún propósito. Cualquier utilización o dependencia que haga de nuestro contenido correrá exclusivamente por su cuenta y riesgo. Lo que usted debería hacer es llevar a cabo sus propias investigaciones, revisiones y análisis, y verificar nuestro contenido antes de basarse en él. El comercio es una actividad de alto riesgo que puede resultar en pérdidas importantes, por lo que debe consultar con su asesor financiero antes de tomar ninguna decisión. Ningún contenido de nuestro Sitio debe considerarse una invitación u oferta para realizar una acción.
                    </p>
                </div>
                <div className="footer-c">
                    <p>Crypto Stadistics</p>
                    <p> 2022</p>
                </div>
                <div className="footer-dow">
                    <p>Developed by</p>
                </div>

                <div>
                    <img src={LogoAngela} alt="Logo Angela" />
                </div>
            </div>
        </div>
    )
}
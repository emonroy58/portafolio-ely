import React, { Component} from 'react';
import './../styles/About.css';
import Navigation from './Navigation';


class  About extends Component{
render (){

    return(
        <Navigation >   
        <body>
            <section className="Contenedor-about">

                <div className="caja--columna-about">
                    <div className="caja-about"><img src="https://i.ibb.co/V3Fp9bH/Fotograf-a-Ely.png" alt="Logo-Ely" className="img-about"></img></div>
                    <div className="caja-about">
                        <img src="https://i.ibb.co/HNd0ttQ/LogoEly.png" alt="Logo-Ely" className="img-logo"></img>
                        <hr></hr>
                    </div>  
                    <div className="caja-about">
                     
                     
                     <p className="content-text">
                     Me apasiona analizar nuevas
                     temáticas para contribuir en el
                     desarrollo de proyectos que se
                     adhieran a nuevas tecnologías y
                     continuar creciendo tanto en lo
                     profesional como en lo personal.<br/><br/>                      

                     
                     </p></div>  
                </div>

            </section>                         

        </body>
      
     </Navigation>     
    )
 }

}

export default About;
     

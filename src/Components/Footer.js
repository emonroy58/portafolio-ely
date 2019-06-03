import React, { Component } from 'react';
import './../styles/Footer.css'


class Footer extends Component{
    render(){
        return(
               <footer className="footer text-center">
               
                    <div className="contenido">
                             
                        <div className="footer-cont-redes">
                        
                            <div className="main-cont-redes">
                                
                            
                            <div className="colum">
                                <img src="https://i.ibb.co/f2v8zcT/Logo-Ely-version-positiva.png" alt="Logo-Ely-version-positiva" className="img-logo-bn"></img>
                            </div>                        


                                <div className="footer-redes">
                                <div className="footer-descargar">
                                     <a href="https://drive.google.com/open?id=1zk0F2UY4sNK-nJ_A8hIGre2obzgHW9xy"><p className="desc-cv">Descargar CV</p></a>
                                </div>
                                <a href="https://github.com/emonroy58"><i class="devicon-github-plain"></i></a>
                                <a href="https://twitter.com/Elizabe20798212"><i class="devicon-twitter-plain"></i></a>
                                <a href="https://www.linkedin.com/in/emgmonroy/"><img src="https://i.ibb.co/TLjN4S6/icono-link-mimi.png" alt="icono-link-mimi" border="0" className="redes"></img></a>
                                </div>
                            </div>                        
                         
                        </div>                                               

                    </div>
                    
               </footer> 
        );
    }

}

export default Footer;

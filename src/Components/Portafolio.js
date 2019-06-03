import React, {Component} from 'react'
import Navigation from './Navigation'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './../styles/Portafolio.css';   



class Portafolio extends Component{

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          moda_alexa:false,
          modal_social:false,
          modal_datalov: false,
        };
    
        this.toggle = this.toggle.bind(this);
        this.toggle_alexa = this.toggle_alexa.bind(this);
        this.toggle_social = this.toggle_social.bind(this);
        this.toggle_datalov = this.toggle_datalov.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal,
         
        }));
      }

      
      toggle_alexa() {/*Alexa */
        this.setState(prevState => ({          
          modal_alexa:!prevState.modal_alexa
        }));
      }

      
      toggle_social() { /*red social */
        this.setState(prevState => ({          
          modal_social:!prevState.modal_social
        }));
      }

      toggle_datalov() { /*Data Lovers*/
        this.setState(prevState => ({          
          modal_datalov:!prevState.modal_datalov
        }));
      }

    render(){
        return(
            <Navigation>
            <section className="cajas">
                <div className="contenedor">
                    <div className="caja--columna" >
                        <div className="caja" >
                        <img onClick={this.toggle} src="https://i.ibb.co/V3d2zTH/burgerqueengray.jpg" alt="burgerqueengray" className="img-portafolio">{this.props.buttonLabel}</img>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle} className="title">Burger Queen</ModalHeader>
                                <ModalBody className= "text-app">
                                 Es una interfaz en la que se puedan tomar pedidos  y enviarlos a la cocina para que se preparen ordenada y eficientemente.
                                 La interfaz muestra los menús (desayuno y resto del día), cada uno con todos sus productos. El usuario puede elegir qué 
                                 productos agregar y la interfaz muestra el resumen del pedido con el costo total.
                                </ModalBody>
                                <div className="text-app-link"> <a href="https://proy-burguer-queen.firebaseapp.com/">Ver Demo&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="https://github.com/emonroy58/CDMX007-fe-burger-queen">Ir a Repositorio</a></div>
                                
                            </Modal>    
                        </div>
                        <div className="caja" >
                         <img  onClick={this.toggle_alexa} src="https://i.ibb.co/Nx06ncC/alexa.png" alt="alexa" className="img-portafolio-alex">{this.props.buttonLabel}</img>
                            <Modal isOpen={this.state.modal_alexa} toggle={this.toggle_alexa} className={this.props.className}>
                                <ModalHeader toggle={this.toggle_alexa} className="title">Skill Alexa</ModalHeader>
                                <ModalBody className= "text-app">
                                  Skill desarrolla en equipo, la cual permite desarrollar habilidades para la expresion y reconocimineto de las emociones en niños de 6 a 7 años.
                                </ModalBody>
                                <div className="text-app-link"> <a href="https://youtu.be/V1tGQJEJfeA">Ver Demo&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="https://gist.github.com/DianaLiz11/23d9dc7386b229780e5df0a3d8e4fea5">Ir a Repositorio</a></div>
                                
                            </Modal>  
                        </div>

                        <div className="caja" >
                            <img onClick={this.toggle_social} src="https://i.ibb.co/Z2NzXnD/red-socialgray.jpg" alt="red-socialgray" className="img-social">{this.props.buttonLabel}</img>
                            <Modal isOpen={this.state.modal_social} toggle={this.toggle_social} className={this.props.className}>
                                <ModalHeader toggle={this.toggle_social} className="title">Red Social</ModalHeader>
                                <ModalBody className= "text-app">
                                    Aplicacion desarrollada en equipo, bajo el concepto de red social como una plataforma educativa que permita una mejor comunicación entre alumnos y maestros, que a la vez promueve la difusión de conocimiento aliente a los alumnos a ser figuras activas dentro de su proceso de aprendizaje. Con esto se pretende alentar a los alumnos a gestionar su propio conocimiento.
                                </ModalBody>
                                <div className="text-app-link"> <a href="https://dianaliz11.github.io/Red-Social/src/">Ver Demo&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="https://github.com/DianaLiz11/Red-Social">Ir a Repositorio</a></div>
                            </Modal>                         
                        </div>

                        <div className="caja" ><img src="https://i.ibb.co/mzSVTYL/Simbolo-E.png" alt="Simbolo-E" className="img-simbolo"></img></div>
                        
                        <div className="caja" >
                        <article className="skills-container">
                          <figure className="list-skills">
                            <h7 className="title-skill">Herramientas de desarrollo</h7> <br/>
                              <ul>
                                <li><i className="devicon-react-original-wordmark"></i></li>
                                <li><i className="devicon-javascript-plain"></i></li>
                                <li><i className="devicon-html5-plain-wordmark" ></i></li>
                                <li><i className="devicon-css3-plain-wordmark"></i></li>
                                <li><i className="devicon-bootstrap-plain"></i></li>
                                <li><i className="devicon-github-plain"></i></li>
                                <li className="ico-firebase"><h8>Firebase</h8></li>
                            </ul>   
                          </figure>   
                         </article>                              
                        </div>
                       
                        <div className="caja" >
                             <img onClick={this.toggle_datalov} src="https://i.ibb.co/Ptg5mV8/data.png" alt="data" className="img-portafolio">{this.props.buttonLabel}</img>
                             <Modal isOpen={this.state.modal_datalov} toggle={this.toggle_datalov} className={this.props.className}>
                                <ModalHeader toggle={this.toggle_datalov} className="title">Data Lovers</ModalHeader>
                                <ModalBody className= "text-app">
                                    Aplicacion desarrollada en dupla, en la cual el propósito de este producto, es facilitar el acceso de información demográfica femenina, obteniendo data de un archivo JSON y mostrando la data mediante graficas mediante Chart.js.
                                </ModalBody>
                                <div className="text-app-link"> <a href="https://olgacontreras911.github.io/cdmx-2019-01-bc-core-data-lovers/src/">Ver Demo&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="https://github.com/OlgaContreras911/cdmx-2019-01-bc-core-data-lovers">Ir a Repositorio</a></div>
                            </Modal>  
                        </div>
                        <div className="caja" ><img src="https://i.ibb.co/YkZN315/pokemon.png" alt="pokemon"  className="img-portafolio"></img></div>
                        <div className="caja" ><img src="https://i.ibb.co/tB58QMm/cifrado-cesar.png" alt="cifrado-cesar" className="img-portafolio-cesar"></img></div>
                        <div className="caja" ><img src="https://i.ibb.co/7QzbKBH/reel-pelisgray.jpg" alt="reel-pelisgray" className="img-portafolio"></img></div>    
                    </div>
                </div>
            </section>
            
            
            </Navigation> 
        )
    }
}

export default Portafolio;

import React, {Component} from 'react'
import BackgroundImage from './../image/Pantalla_inicio.png'
import Navigation from './Navigation'
import './../styles/Navigation.css'

const coverStyle = {
    backgroundImage: `url( ${BackgroundImage} )`,
    height: '90vh',
    backgroundsize: 'contain',
}

class CoverPage extends Component{

    render(){
        return(
            <Navigation>
            <header clasName="avatar"  style={coverStyle}>
                
            </header>
            </Navigation> 
        )
    }
}

export default CoverPage;
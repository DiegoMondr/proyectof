import React from 'react';
import '../styles/Autor.css';
import Slideshow from '../../components/slideshow';


const Autor = () => {
    return (
        <div className='Autor-page'>
            <div class="gallery-street-container">
                <div class="title">
                    <title>AUTOR</title>

                </div>
                <div class="text">

                    <p style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <span class="bold" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            color:'#250940',
                            fontSize:'100px'
                        }}>AUTOR</span>
                        <img src={process.env.PUBLIC_URL + "/Assets/profileaut.jpg"}
                        alt="Autor"
                        className="perfil"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            width:'300px',
                            height:'300px',
                            borderRadius:'50%'
                        }}/>
                    </p>
                    <div>
                        <Slideshow/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Autor;
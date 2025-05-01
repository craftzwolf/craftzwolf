import React from 'react';
import { About } from './styled';
import Pics from "../../assets/ME _01NOTBACK.png";


export const PageAbout: React.FC = () => {
    return (
        <About>
            <h1 className = "greet tit">Olá craftz! Sou, programador web developer</h1>

            <div className = "about">
                <div className="grids">
                    <div className = "grid">
                        <p className='txt'><h1 className='tit'>Meireles Fernando</h1><br/> Digital craftzman (Artista - Desenvolvedor - Designer)</p>
                        
                        <p className='txt'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis at non saepe ea unde? Quia non nam, temporibus totam saepe pariatur officiis in iste repellat? Harum praesentium facere animi dolorum.
                        </p>
                        <button>baixar cv</button>
                    </div>

                    <div className = "grid">
                        <div className="me">
                            <img src = {Pics} alt="Minha Foto" />
                            <div className="circle"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </About>
    )
}

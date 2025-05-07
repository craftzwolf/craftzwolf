import React from 'react';
import { About } from './styled';
import Pics from "../../assets/ME _01NOTBACK.png";
import { BsBookshelf, BsController, BsFacebook, BsGithub, BsGlobe, BsHeartFill, BsInstagram, BsLaptop, BsModemFill, BsTree, BsTwitterX, BsXCircleFill } from 'react-icons/bs';


// IMPORTS LIKE COMPONENT IMAGE
import like_1 from '../../assets/ILIKE01.jpg'
import like_2 from '../../assets/ILIKE02.jpg'
import like_3 from '../../assets/ILIKE03.jpg'
import like_4 from '../../assets/ILIKE04.jpg'


export const PageAbout: React.FC = () => {
    return (
        <About>
            <h1 className = "greet tit">Olá craftz! Sou, programador web developer</h1>

                <div className="contain">
                    <div className = "grid">
                        <div className="me myphoto">
                            <img src = {Pics} alt="Minha Foto" />
                            <div className="circle"></div>
                        </div>
                        <div className="profile">
                            <p className='txt'>
                                <h1 className='tit'>Meireles Fernando</h1>
                                <br/> Digital craftzman (Artista - Desenvolvedor - Designer)
                            </p>
                        </div>
                    </div>

                    <div className = "grid">
                        <p className='txt'>
                           <h1> SOBRE MIM</h1>
                           Olá! Eu sou o criador e desenvolvedor por trás do CRAFTZWOLF. 
                           A página reflete minha paixão por criar e compartilhar conteúdo inovador, 
                           seja no mundo da música, imagens ou projetos profissionais. 
                           Aqui, você encontrará tudo o que compartilho com o mundo, 
                           de uma maneira moderna e fácil de acessar.
                        </p>
                        <button>baixar cv</button>
                    </div>

                    <div className="grid">
                           <h1 className='txt'> Eu <span><BsHeartFill/></span>
                            <p>Fotografia, Musica</p>
                           </h1>
                           <main className="likes-grid txt">
                                <article className="like">
                                    <div className="pinboard">
                                        <div>
                                            <span className="icon-contain"><BsController className="icon" /></span>
                                            <h2 className="tag">Esporte</h2>
                                        </div>
                                        <img src={like_1} alt="" />
                                    </div>
                                </article>
                                <article className="like">
                                    <div className="pinboard">
                                        <div>
                                            <span className="icon-contain"><BsBookshelf className="icon" /></span>
                                            <h2 className="tag">artes</h2>
                                        </div>
                                        <img src={like_2} alt="" />
                                    </div>
                                </article>
                                <article className="like">
                                    <div className="pinboard">
                                        <div>
                                            <span className="icon-contain"><BsLaptop className="icon" /></span>
                                            <h2 className="tag">tech</h2>
                                        </div>
                                        <img src={like_3} alt="" />
                                    </div>
                                </article>
                                <article className="like">
                                    <div className="pinboard">
                                        <div>
                                            <span className="icon-contain"><BsTree className="icon" /></span>
                                            <h2 className="tag">Natureza</h2>
                                        </div>
                                        <img src={like_4} alt="" />
                                    </div>
                                </article>
                           </main>
                           <div className="cotain"></div>
                    </div>

                    <div className="grid">
                        <h1 className='txt'> Na Internet <span><BsModemFill /></span></h1>
                        <li><span><BsFacebook /></span><h4><i>@</i>craftzwolf | facebook</h4></li>
                        <li><span><BsInstagram /></span><h4><i>@</i>craftzwolf | instagram</h4></li>
                        <li><span><BsGithub /></span><h4><i>@</i>craftzwolf | github</h4></li>
                        <li><span><BsTwitterX /></span><h4><i>@</i>craftzwolf | x</h4></li>
                    </div>

                    <div className="grid"></div>
                </div>
        </About>
    )
}

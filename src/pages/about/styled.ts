import styled from 'styled-components'



export const About = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    transition: all .3s ease;

    & .greet {
        position: relative;
        padding: 10px;
        font-size: 14px;
        text-align: center;
        border-radius: 12px;
        letter-spacing: 2.5px;
        font-family: 'Metrica';
        text-transform: uppercase;
        background: ${ props => props.theme.colors.back_color_alt };
    }

    & .contain {
        position: relative;
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: center;

        & .grid {font-family: 'Poppins-def';}

        & .grid:nth-child(1) {
            display: flex;
            margin-top: 5rem;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: space-around;

            & .myphoto {
                position: relative;
                width: 100px;
                height: 100px;
                overflow: hidden;
                border-radius: 50%;
                border: 2px solid ${ props => props.theme.colors.theme_back_color_def };

                & img {
                    position: absolute;
                    z-index: 2;
                    width: 100%;
                    height: 100px;
                    transform: scale(1.1);
                    background-size: 50% 50%;
                }

                & .circle {
                    position: absolute;
                    top: 10%;
                    left: 50%;
                    width: 80%;
                    height: 80%;
                    z-index: 1;
                    border-radius: 100%;
                    transform: translateX(-50%);
                    background: ${ props => props.theme.colors.theme_back_color_def };
                }
            }
            & .profile {
                & .txt { 
                    & h1 { font-size: 1.5em; }
                    font-size: 12px;
                }
            }
        }

        & .grid:nth-child(2) {
            position: relative;
            padding: 50px;
            
            & .txt {
                font-size: 14px;
                text-align: justify;

                & h1 {
                    font-size: 1.5em;
                    color: ${props => props.theme.colors.theme_back_color_def};
                }
            }
        }    

        & .grid:nth-child(3) {
            padding: 0 50px 0 50px;

            & h1 {
                font-size: 1.5em;
                text-transform: uppercase;
                color: ${props => props.theme.colors.theme_back_color_def};

                & span {font-size: 12pt;}
                & p {
                    font-size: 14px;
                    font-weight: 100;
                    text-transform: capitalize;
                    color: ${props => props.theme.colors.text_color_alt};
                }
            }

            & .likes-grid {
                position: relative;
                display: grid;
                gap: 15px;
                margin-inline: auto;
                grid-template-columns: repeat(3, 1fr);

                & .like {
                    position: relative;
                    height: 180px;
                    overflow: hidden;
                    border-radius: 12px;
                    border: 2px solid ${props => props.theme.colors.theme_back_color_def};
                    
                    & img {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    &:hover {
                    }

                    & div {
                        & div {
                            position: absolute;
                            height: 100%;
                            z-index: 1;
                            padding: 10px;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            flex-direction: column;

                            & .icon-contain {
                                width: 40px;
                                opacity: .8;
                                height: 40px;
                                background: ${ props => props.theme.colors.theme_back_color_def };

                                display: flex;
                                align-items: center;
                                justify-content: center;

                                border-radius: 10px;
                                transition: all .3s;

                                & .icon {
                                    font-size: 14px;
                                    color: ${ props => props.theme.colors.theme_icon_color_def };
                                }
                            }

                            & .tag {
                                font-size: 12px;
                                rotate: -90deg;
                                color: ${ props => props.theme.colors.theme_back_color_def };
                                box-shadow: #000000;
                            }
                        }
                    }
                }

                & .like:nth-child(1){ grid-column: span 2; }
                & .like:nth-child(4){ grid-column: span 2; }
            }
        }
        
        & .grid:nth-child(4) {
            padding: 0 50px 0 50px;

            & h1 {
                font-size: 1.5em;
                text-transform: uppercase;
                color: ${props => props.theme.colors.theme_back_color_def};

                & span {font-size: 14pt;}
            }
            & li {
                position: relative;
                display: flex;
                list-style: none;
                margin-bottom: 5px;
                align-items: center;
                font-size: 14px;
                cursor: pointer;

                & span {
                    font-size: 16px;
                    margin-right: 10px;
                    color: ${props => props.theme.colors.theme_back_color_def};
                }
                & h4 {
                    margin-top: -5px;
                    letter-spacing: 1.5px;

                    & i {font-family: none;}
                }
            }
        }
    }

    // Estilo para celulares (largura menor que 768px)
    @media screen and (max-width: 767px) {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        & .greet {
            position: relative;
            padding: 10px;
            line-height: 2;
            font-size: 10px;
            text-align: center;
            border-radius: 12px;
            letter-spacing: 2.5px;
            font-family: 'Metrica';
            text-transform: uppercase;
            background: ${ props => props.theme.colors.back_color_alt };
        }
        
        & .contain {
            width: 100%;
            margin-top: 2.5em;

            & .grid:nth-child(1) {
                display: flex;
                margin-top: .1rem;
                align-items: center;
                flex-direction: column;
                justify-content: center;

                & .myphoto {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                    border-radius: 50%;
                    border: 2px solid ${ props => props.theme.colors.theme_back_color_def };

                    & img {
                        position: absolute;
                        z-index: 2;
                        width: 100%;
                        height: 100px;
                        transform: scale(1.1);
                        background-size: 50% 50%;
                    }

                    & .circle {
                        position: absolute;
                        top: 10%;
                        left: 50%;
                        width: 80%;
                        height: 80%;
                        z-index: 1;
                        border-radius: 100%;
                        transform: translateX(-50%);
                        background: ${ props => props.theme.colors.theme_back_color_def };
                    }
                }

                & .profile {
                    text-align: center;
                    & .txt { 
                        & h1 { font-size: 1em; }
                        font-size: 10px;
                    }
                }
            }

            & .grid:nth-child(2) {
                margin-left: 10px;
                padding: 0;

                & .txt {
                    font-size: 10px;
                    text-align: justify;

                    & h1 {
                        font-size: 1.25em;
                        color: ${props => props.theme.colors.theme_back_color_def};
                        margin-bottom: 10px;
                    }
                }
            }

            & .grid:nth-child(3) {
                margin-left: 10px;
                padding: 0;

                & h1 {
                    font-size: 1em;
                    text-transform: uppercase;
                    color: ${props => props.theme.colors.theme_back_color_def};

                    & span {font-size: 13px;}
                    & p {
                        font-size: 10px;
                        font-weight: 100;
                        text-transform: capitalize;
                        color: ${props => props.theme.colors.text_color_alt};
                    }
                }
                & p {font-size: 10px;}

                & .likes-grid {
                    position: relative;
                    display: grid;
                    gap: 15px;
                    margin-inline: auto;
                    grid-template-columns: repeat(3, 1fr);

                    & .like {
                        position: relative;
                        height: 180px;
                        overflow: hidden;
                        border-radius: 12px;
                        border: 2px solid ${props => props.theme.colors.theme_back_color_def};
                        
                        & img {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        &:hover {
                        }

                        & div {
                            & div {
                                position: absolute;
                                z-index: 1;
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: space-around;
                                flex-direction: column;

                                & .icon-contain {
                                    width: 30px;
                                    opacity: .8;
                                    height: 30px;
                                    background: ${ props => props.theme.colors.theme_back_color_def };

                                    display: flex;
                                    align-items: center;
                                    justify-content: center;

                                    & .icon {
                                        color: ${ props => props.theme.colors.theme_icon_color_def };
                                    }
                                }

                                & .tag {
                                    font-size: 12px;
                                    rotate: -90deg;
                                    color: ${ props => props.theme.colors.theme_back_color_def };
                                    box-shadow: #000000;
                                }
                            }
                        }
                    }

                    & .like:nth-child(1){ grid-column: span 2; }
                    & .like:nth-child(4){ grid-column: span 2; }
                }
            }
        
            & .grid:nth-child(4) {
                padding: 0;
                margin-left: 10px;

                & h1 {
                    font-size: 1em;
                    text-transform: uppercase;
                    color: ${props => props.theme.colors.theme_back_color_def};

                    & span {font-size: 14px;}
                }
                & li {
                    position: relative;
                    display: flex;
                    list-style: none;
                    margin-bottom: 5px;
                    align-items: center;
                    font-size: 10px;
                    cursor: pointer;

                    & span {
                        font-size: 12px;
                        margin-right: 10px;
                        color: ${props => props.theme.colors.theme_back_color_def};
                    }
                    & h4 {
                        margin-top: -5px;
                        letter-spacing: 1.5px;

                        & i {font-family: none;}
                    }
                }
            }
        }
    }
`;

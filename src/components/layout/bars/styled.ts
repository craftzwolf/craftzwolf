import { styled, keyframes } from 'styled-components'

const boxThemeAnimate = keyframes`
    0% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(35px); opacity: .25; }
    100% { transform: translateY(-35px); opacity: .25; }
    150% { transform: translateY(0); opacity: 1; }
`



export const Navbar = styled.header`
    position: fixed;
    width: 100%;
    height: 60px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background: ${ props => props.theme.colors.back_color_blur };
    backdrop-filter: blur(15px);
    z-index: 999;


    // Estilo padrão para desktop (largura maior que 1024px)
    @media screen and (min-width: 760px) {

        & .lside {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 80px;

            & .logos {
                height: 100%;
                border: none;
                outline: none;
                display: flex;
                cursor: pointer;
                flex-direction: row;
                align-items: center;
                background: transparent;

                img {
                    width: 25px;
                    height: 25px;
                    transform: rotate(45deg);
                    transition: display .3s ease-in-out;
                    transition: transform 1s ease-in-out;
                }
                &.logos:hover img { transform: rotate(10deg); }


                & .dark_brand { display: ${ props => props.theme.displays.logo_dark_display}; }
                & .ligh_brand { display: ${ props => props.theme.displays.logo_light_display}; }
                & .name {
                    font-size: 14px;
                    font-weight: 700;
                    margin-left: 5px;
                    letter-spacing: 1.5px;
                    font-family: 'Metrica';
                    text-transform: uppercase;
                    color: ${ props => props.theme.colors.text_color_def };
                }
            }
        }

        // CENTER SIDE
        & .cside {
            & .links {
                margin-left: 50px;

                & .nav {
                    background: transparent;
                    margin-right: 15px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    font-family: 'Poppins-def';
                    text-transform: capitalize;
                    transition: text-decoration .3s ease-in-out;
                    color: ${ props => props.theme.colors.text_color_def };

                    & .icon { margin-right: 5px; }
                    &:hover {text-decoration: underline; }
                }
            }
        }

        & .rside {
            display: flex;
            margin-right: 80px;

            & button:nth-child(1) {
                padding: 5px;
                border-radius: 5px;
                margin-right: 10px;
            }

            & .switch {
                position: relative;
                width: 35px;
                height: 35px;
                margin-right: 10px;
                overflow: hidden;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                background: ${ props => props.theme.colors.theme_back_color_def };


                &:hover { background: ${ props => props.theme.colors.theme_back_color_alt }; }
                &.animate { animation: ${ boxThemeAnimate } .5s ease-in-out; }
                & .icon_lua {
                    position: absolute;
                    display: ${ props => props.theme.displays.lua_display };
                    top: 8px;
                    left: 10px;
                    font-size: 18px;
                    color: ${ props => props.theme.colors.theme_icon_color_def };
                }
                & .icon_sol {
                    position: absolute;
                    display: ${ props => props.theme.displays.sol_display };
                    top: 8px;
                    left: -10px;
                    font-size: 18px;
                    color: ${ props => props.theme.colors.theme_icon_color_def };
                }
            }

            & .bars {
                position: relative;
                width: 35px;
                height: 35px;
                border: none;
                border-radius: 5px;
                display: none;

                & .hamburger {
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
    }

    // Estilo para tablets (largura entre 768px e 1023px)
    //@media screen and (max-width: 1023px) and (min-width: 768px) {}

    // Estilo para celulares (largura menor que 768px)
    @media screen and (max-width: 767px) {
        & .lside {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            & .logos {
                height: 100%;
                border: none;
                outline: none;
                display: flex;
                cursor: pointer;
                flex-direction: row;
                align-items: center;
                background: transparent;

                img {
                    width: 25px;
                    height: 25px;
                    transform: rotate(45deg);
                    transition: display .3s ease-in-out;
                    transition: transform 1s ease-in-out;
                }
                &.logos:hover img { transform: rotate(10deg); }


                & .dark_brand { display: ${ props => props.theme.displays.logo_dark_display}; }
                & .ligh_brand { display: ${ props => props.theme.displays.logo_light_display}; }
                & .name {
                    font-size: 14px;
                    font-weight: 700;
                    margin-left: 5px;
                    letter-spacing: 1.5px;
                    font-family: 'Metrica';
                    text-transform: uppercase;
                    color: ${ props => props.theme.colors.text_color_def };
                }
            }

            & .links {
                position: absolute;
                top: 80px;
                right: 20px;
                display: none;
                flex-direction: column;
                background: ${ props => props.theme.colors.back_color_blur };
                backdrop-filter: blur(15px);
                border-radius: 8px;
                padding: 10px 20px;
                z-index: 999;

                & .nav {
                    background: transparent;
                    margin-right: 15px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    text-align: start;
                    font-family: 'Poppins-def';
                    text-transform: capitalize;
                    transition: text-decoration .3s ease-in-out;
                    color: ${ props => props.theme.colors.text_color_def };

                    & .icon { margin-right: 5px; display: none;}
                    &:hover {text-decoration: underline; }
                }
            }
        }

        & .rside {
            display: flex;

            & .switch {
                position: relative;
                width: 35px;
                height: 35px;
                margin-right: 10px;
                overflow: hidden;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                background: ${ props => props.theme.colors.theme_back_color_def };


                &:hover { background: ${ props => props.theme.colors.theme_back_color_alt }; }
                &.animate { animation: ${ boxThemeAnimate } .5s ease-in-out; }
                & .icon_lua {
                    position: absolute;
                    display: ${ props => props.theme.displays.lua_display };
                    top: 8px;
                    left: 10px;
                    font-size: 18px;
                    color: ${ props => props.theme.colors.theme_icon_color_def };
                }
                & .icon_sol {
                    position: absolute;
                    display: ${ props => props.theme.displays.sol_display };
                    top: 8px;
                    left: -10px;
                    font-size: 18px;
                    color: ${ props => props.theme.colors.theme_icon_color_def };
                }
            }

            & .bars {
                position: relative;
                width: 35px;
                height: 35px;
                border: none;
                border-radius: 5px;
                display: block;

                & .hamburger {
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
    }
`
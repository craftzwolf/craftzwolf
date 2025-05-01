import styled from 'styled-components'



export const Contain = styled.section`

    @keyframes animationColor {
        0% { filter: hue-rotate(0deg) }
        100% { filter: hue-rotate(360deg) }
    }
    @keyframes fall {
        0% {
            transform: translateY(0); /* Começa no topo */
            opacity: 1;
        }
        100% {
            transform: translateY(200px); /* Cai para baixo */
            opacity: 0;
        }
    }


    position: relativa;
    width: 100%;
    height: 100vh;

    & .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        & .laptop {
            width: 340px;
            height: 200px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            background: ${ props => props.theme.colors.anime_back_color };
            border: 16px solid ${ props => props.theme.colors.anime_bord_color };
            box-shadow: ${props => props.theme.colors.anime_shadow_color };
            overflow: hidden;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &::before {
                position: absolute;
                content: '';
                left: -15%;
                bottom: -10px;
                width: 130%;
                height: 10px;
                background: ${ props => props.theme.colors.anime_back_color };
                border-top: 2px solid ${ props => props.theme.colors.anime_bord_color };
                border-bottom: 4px solid ${ props => props.theme.colors.anime_bord_color };
                border-top-left-radius: 2px;
                border-top-right-radius: 2px;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                box-shadow: ${props => props.theme.colors.anime_shadow_color };
            }
            &::after {
                position: absolute;
                content: '';
                top: 6px;
                left: 50%;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: ${ props => props.theme.colors.theme_back_color_alt };
                filter: blur(.8px);
            }

            & .cloud {
                position: relative;
                width: 100px;

                & .kumo {
                    position: absolute;
                    top: 5px;
                    left: 50%;
                    font-size: 42pt;
                    transform: translateX(-50%);
                    filter: drop-shadow(0 0 35px #123455);
                    animation: animationColor;
                    opacity: .5;
                    z-index: 100;
                }

                & .ame {
                    position: absolute;
                    top: 50px;
                    left: 50%;
                    font-size: 12pt;
                    color: #3498db;
                    animation: fall linear infinite;
                    font-family: 'Nordic';
                }
            }
        }
    }
`
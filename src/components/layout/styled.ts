import styled from 'styled-components'


export const Icones  = styled.div`

    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    & .contain {
        position: relative;
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 15%;
        z-index: 1;

        /* SET NEUMORPHISM EFFECT IN CONATIN */
        background: ${ props => props.theme.colors.anime_bord_color };
        box-shadow: ${props => props.theme.colors.anime_shadow_color };

        & .dark {
            width: 100px;
            height: 100px;
            display: ${ props => props.theme.displays.logo_dark_display }
        }
        & .glow {
            width: 100px;
            height: 100px;
            display: ${ props => props.theme.displays.logo_light_display }
        }


        & .icon {
            position: absolute;
            font-size: 50px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${ props => props.theme.colors.anime_bord_color };
            filter: ${ props => props.theme.colors.anime_dropshadow_color } ;
        }

        & .bs { display: none; }
    }

`
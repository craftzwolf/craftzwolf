import styled from 'styled-components'



export const Contain = styled.section`

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
        }
    }
`
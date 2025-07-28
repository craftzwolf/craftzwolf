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
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin-top: 10px;
        border-radius: 15%;
        opacity: .5;
        z-index: 1;

        & .minpc {
            width: 100%;
            height: 100%;
            display: block;
        }


        & .icon {
            position: absolute;
            font-size: 50px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${ props => props.theme.colors.anime_bord_color };
        }

        & .bs { display: none; }
    }

    @media screen and (max-width: 767px) {
        transition: all .3s ease-in-out;
        transition-delay: 1ms;

        & .contain {
            position: relative;
            width: 50px;
            height: 50px;
            overflow: hidden;
            margin-top: 10px;
            border-radius: 15%;
            opacity: .5;
            z-index: 1;

            & .minpc {
                width: 100%;
                height: 100%;
                display: block;
            }


            & .icon {
                position: absolute;
                font-size: 50px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: ${ props => props.theme.colors.anime_bord_color };
            }

            & .bs { display: none; }
        }
    }

`
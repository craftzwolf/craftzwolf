import styled from 'styled-components'



export const About = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .greet {
        position: relative;
        text-transform: uppercase;
        font-family: 'Metrica';
        border-radius: 12px;
        text-align: center;
        background: ${ props => props.theme.colors.back_color_alt };
        letter-spacing: 2.5px;
        font-size: 14px;
        padding: 10px;
    }

    & .grids {
        display: block;
        margin-top: 2.5em;

        & .grid:nth-child(1) {
            float: left;
            display: flex;
            max-width: 400px;
            flex-direction: column;
        }
        & .grid:nth-child(2) {
            float: right; 
            margin-left: 50px;
        }

        & .grid {
            & .me {
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

            & .txt:nth-child(2) {
                position: relative;

                &::before {
                    position: absolute;
                    content: '';
                    top: -15px;
                    width: 50px;
                    height: 5px;
                    background: ${ props => props.theme.colors.theme_back_color_def };
                }
            }
        }
    }

    // about section
    & button {
        border: none;
        outline: none;
        width: 125px;
        letter-spacing: 1px;
        padding: 10px 16px;
        border-radius: 10px;
        margin: 20px 0px;
        text-transform: uppercase;
        font-family: 'Metrica';
        font-weight: 900;
        color: ${ props => props.theme.colors.theme_icon_color_def };
        background: ${ props => props.theme.colors.theme_back_color_def };
    }
`;

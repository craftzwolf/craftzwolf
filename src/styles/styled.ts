import styled from "styled-components"


export const Footer = styled.footer`
    bottom: 0;
    width: 100%;
    padding: 20px;
    overflow: hidden;
    position: absolute;

    /* variables */
    --quantity: 5;
    --width: 200px;
    --height: 200px;

    /* mobile */
    & .contain {
        position: relative;
        width: 100%;

        & .foot {
            & h2{

            }

            & .slider {
                width: 100%;
                border: 1px solid red;
                height: var(--height);

                & .list {
                    position: relative;
                    width: 100%;
                    display: flex;
                    min-width: calc( var(--width) * var(--quantity));
                    animation-delay: calc( (10s / var(--quantity)) * (var(--position) - 1) );

                    & .item {
                        position: absolute;
                        left: 100%;
                        width: var(--width);
                        height: var(--height);
                        animation: autoRun 10s linear infinite;

                        & img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    /* animation autoRun */
    @keyframes autoRun { from { left: 100%; } to { left: calc(var(--width) * -1); } }
    &:hover & .item { animation-play-state: paused!important; }
`;
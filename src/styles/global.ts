import { createGlobalStyle } from 'styled-components'
import Nordic from '../assets/fonts/Nordic.ttf'
import Metric from '../assets/fonts/Metric.otf'
import PoppinsDef from '../assets/fonts/Poppins-def.ttf'
import PoppinsAlt from '../assets/fonts/Poppins-alt.ttf'




export default createGlobalStyle`

    @font-face { font-family: 'Nordic'; src: url( '${Nordic}' ); }
    @font-face { font-family: 'Metrica'; src: url( '${Metric}' ); }
    @font-face { font-family: 'Poppins-def'; src: url( '${PoppinsDef}' ); }
    @font-face { font-family: 'Poppins-alt'; src: url( '${PoppinsAlt}' ); }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        background: ${ props => props.theme.colors.back_color_def };
        color: ${ props => props.theme.colors.text_color_alt };
        width: 100%;
        height: 100vh;

        & .tit {
            color: ${ props => props.theme.colors.text_color_def };
            font-weight: bold;
        }
        & .txt {
            position: relative;
            color: ${ props => props.theme.colors.text_color_alt };
            font-family: 'Poppins-def';
            font-size: 12px;
            margin-top: 3.5em;
            margin-bottom: 1.5em;
        }

        button { cursor: pointer; }


        // MY UTILS CLASSEs
        .grid-col-span-2 { grid-column: span 2 }
        .grid-row-span-2 { grid-column: span 2 }
        .grid-row-span-3 { grid-row: span 3; }
    }

`

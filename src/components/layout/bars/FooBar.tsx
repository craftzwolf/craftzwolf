import React from 'react';
import { Footer } from './styled';



const FooBar: React.FC = () =>  {
    const curYear = new Date().getFullYear()
    return(
        <Footer>
            <p>&copy;  {curYear} Meu Website. Todos os direitos reservados</p>
        </Footer>
    )
}

export default FooBar;
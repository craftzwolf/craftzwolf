import { Icones } from './styled';
import React, { useEffect, useRef } from 'react';
import MeLogoDark from '../../assets/dark.png'
import MeLogoGlow from '../../assets/light.png'
import { BsBriefcaseFill, BsFileImageFill, BsFilePost } from 'react-icons/bs'

const IconLayout: React.FC = () => {

    const spanRef = useRef<HTMLSpanElement>(null);
    const bsIconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentUrl = window.location.href;

        // Manipula a visibilidade do <span>
        if (spanRef.current) {
            (spanRef.current as HTMLSpanElement).style.display = currentUrl.includes('http://localhost:5173/') ? 'block' : 'none';
        }
        
    }, []);

    return (
        <Icones>
            <div className="contain">
                <span ref={spanRef}>
                    <img src = { MeLogoDark } alt="Dark Logo" className = "dark icon" />
                    <img src = { MeLogoGlow } alt="Glow Logo" className = "glow icon" />
                </span>
            </div>
        </Icones>
    );
};

export default IconLayout;

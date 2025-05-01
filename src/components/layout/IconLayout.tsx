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

        // Manipula a visibilidade dos ícones com base na URL
        if (bsIconsRef.current) {
            const bsIcons = bsIconsRef.current.querySelectorAll('.bs');
            bsIcons.forEach(icon => {
                if (icon instanceof HTMLElement) {
                    if (currentUrl.includes('projectos') && icon.classList.contains('briefcase')) {
                        icon.style.display = 'block'; // Mostrar ícone de briefcase
                    } else if (currentUrl.includes('show-image') && icon.classList.contains('image')) {
                        icon.style.display = 'block'; // Mostrar ícone de image
                    } else if (currentUrl.includes('show-post') && icon.classList.contains('post')) {
                        icon.style.display = 'block'; // Mostrar ícone de post
                    } else {
                        icon.style.display = 'none'; // Ocultar outros ícones
                    }
                }
            });
        }
    }, []);

    return (
        <Icones>
            <div className="contain">
                <span ref={spanRef}>
                    <img src = { MeLogoDark } alt="Dark Logo" className = "dark icon" />
                    <img src = { MeLogoGlow } alt="Glow Logo" className = "glow icon" />
                </span>
                <div ref={bsIconsRef}>
                    <BsBriefcaseFill className = "icon bs briefcase" />
                    <BsFileImageFill className = "icon bs image" />
                    <BsFilePost className = "icon bs post" />
                </div>
            </div>
        </Icones>
    );
};

export default IconLayout;

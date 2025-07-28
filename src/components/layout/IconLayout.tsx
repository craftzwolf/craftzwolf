import { Icones } from './styled';
import { useTheme } from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { BsBriefcaseFill, BsFileImageFill, BsFilePost } from 'react-icons/bs'

const IconLayout: React.FC = () => {

    const theme = useTheme();
    const spanRef = useRef<HTMLSpanElement>(null);
    const bsIconsRef = useRef<HTMLDivElement>(null);

    const logo = theme?.images?.logo_minpc;

    useEffect(() => {
        const currentUrl = window.location.href;

        // Manipula a visibilidade do <span>
        /*
        if (spanRef.current) {
            spanRef.current.style.display = isLocalhost ? 'block' : 'none';
        }
        */


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
                    {logo && (
                        <img src = { logo } alt="Dark | Glow Logo" className = "minpc" />
                    )}
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

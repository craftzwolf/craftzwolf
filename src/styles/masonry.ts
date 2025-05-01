import styled from 'styled-components'



export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 10px;
    gap: 10px;
`;




export const GridItem = styled.div`
    break-inside: avoid;
    position: relative;
    overflow: hidden;
`;




export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform .3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;




export const Video = styled.video`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform .3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

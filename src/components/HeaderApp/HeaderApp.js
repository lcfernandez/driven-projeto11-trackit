import avatar from "../../assets/img/avatar.png";

import { DARK_BLUE, WHITE } from "../../constants/colors";

import styled from "styled-components";

export default function HeaderApp() {
    return (
        <HeaderAppContainer>
            <span>
                TrackIt
            </span>

            <img alt="Foto de perfil" src={avatar} />
        </HeaderAppContainer>
    );
}

const HeaderAppContainer = styled.div`
    background-color: ${DARK_BLUE};    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: ${WHITE};
    display: flex;
    font-family: "Playball", cursive;
    font-size: 40px;
    height: 70px;
    justify-content: space-between;
    left: 0px;
    line-height: 49px;
    padding: 10px 18px;
    position: fixed;
    top: 0px;
    width: 100%;

    img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
    }
`;

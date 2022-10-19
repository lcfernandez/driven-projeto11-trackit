import { LIGHT_BLUE, WHITE } from "../../constants/colors";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <span>
                Hábitos
            </span>

            <span>
                Histórico
            </span>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    align-items: center;
    background-color: ${WHITE};
    bottom: 0;
    color: ${LIGHT_BLUE};
    display: flex;
    font-size: 18px;
    height: 70px;
    justify-content: space-between;
    left: 0;
    padding: 0 36px;
    position: fixed;
    width: 100%;
`;

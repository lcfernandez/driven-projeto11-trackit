import { BACKGROUND, DARK_BLUE, GRAY } from "../../constants/colors";

import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import styled from "styled-components";

export default function HistoryPage() {
    return (
        <HistoryPageContainer>
            <HeaderApp />

            <div>
                Histórico
            </div>

            <p>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </p>

            <Footer />
        </HistoryPageContainer>
    );
}

const HistoryPageContainer = styled.div`
    background-color: ${BACKGROUND};
    color: ${DARK_BLUE};
    font-size: 22px;
    min-height: calc(100vh - 140px);
    line-height: 29px;
    margin: 70px 0;
    padding: 22px 17px;

    p {
        color: ${GRAY};
        font-size: 18px;
        line-height: 22px;
        margin-top: 17px;
    }
`;

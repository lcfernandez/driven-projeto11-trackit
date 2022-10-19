import { APP_BACKGROUND, DARK_BLUE, GRAY, LIGHT_BLUE, WHITE } from "../../constants/colors";

import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import styled from "styled-components";

export default function HabitsPage() {
    return (
        <>
            <HeaderApp />

            <HabitsPageContainer>
                <div>
                    <span>
                        Meus hábitos
                    </span>

                    <button data-identifier="create-habit-btn">
                        +
                    </button>
                </div>

                <p data-identifier="no-habit-message">
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </HabitsPageContainer>

            <Footer />
        </>
    );
}

const HabitsPageContainer = styled.div`
    background-color: ${APP_BACKGROUND};
    color: ${DARK_BLUE};
    font-size: 22px;
    height: calc(100vh - 140px);
    line-height: 29px;
    margin: 70px 0;
    padding: 22px 17px;

    button {
        background-color: ${LIGHT_BLUE};
        border: none;
        border-radius: 5px;
        color: ${WHITE};
        display: inherit;
        font-size: 26px;
        height: 35px;
        justify-content: center;
        width: 40px;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
    }

    p {
        color: ${GRAY};
        font-size: 17.976px;
        line-height: 22px;
    }
`;

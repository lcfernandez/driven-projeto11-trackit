import { BACKGROUND, DARK_BLUE, GRAY } from "../../constants/colors";

import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import styled from "styled-components";

export default function HistoryDetailsPage({ historyDetails }) {


    function handleHistoryDetails() {
        if (!historyDetails) {
            return <p>Nenhum dia com histórico foi selecionado.</p>;
        } else {
            return (
                <>
                    <ul>
                        {historyDetails.habits.map(
                            habit => 
                                <HabitHistoryDetails done={habit.done} key={habit.id}>
                                    {habit.name}
                                </HabitHistoryDetails>
                        )}
                    </ul>
                </>
            );
        }
    }

    return (
        <HistoryDetailsPageContainer>
            <HeaderApp />

            <div>
                Detalhes do Histórico {historyDetails && ` - ${historyDetails.day}`}
            </div>

            {handleHistoryDetails()}

            <Footer />
        </HistoryDetailsPageContainer>
    );
}

const HabitHistoryDetails = styled.li`
    color: ${({done}) => done ? "#8cc654" : "#ea5766"}
`;

const HistoryDetailsPageContainer = styled.div`
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

    ul {
        font-size: 18px;
        margin-top: 17px;
    }
`;

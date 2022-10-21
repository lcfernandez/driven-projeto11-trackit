import check from "../../assets/img/check.svg";
import { GRAY, WHITE } from "../../constants/colors";

import styled from "styled-components";

export default function HabitToDo({ currentSequence, highestSequence, id, name }) {
    return (
        <HabitToDoContainer data-identifier="today-infos">
            <span>
                {name}

                <p>
                    Sequência atual: {currentSequence} dias
                    <br />
                    Seu recorde: {highestSequence} dias
                </p>
            </span>

            <button data-identifier="done-habit-btn">
                <img alt="Símbolo de check" src={check} />
            </button>
        </HabitToDoContainer>
    );
}

const HabitToDoContainer = styled.li`
    background-color: ${WHITE};
    color: ${GRAY};
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 15px;
    word-wrap: break-word;

    button {
        align-items: center;
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        cursor: pointer;
        display: inherit;
        height: 69px;
        justify-content: center;
        width: 69px;
    }

    p {
        font-size: 13px;
        line-height: 16px;
        margin-top: 7px;
    }
`;

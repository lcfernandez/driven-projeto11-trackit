import DayButton from "../DayButton/DayButton";

import { ELEMENT_GRAY, GRAY, LIGHT_BLUE, PLACEHOLDER, WHITE } from "../../constants/colors";

import { useState } from "react";
import styled from "styled-components";

export default function HabitForm() {
    const [selectedDays, setSelectedDays] = useState([]);

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <HabitFormContainer>
            <input placeholder="nome do hábito" />

            {days.map(
                (day, index) =>
                    <DayButton
                        day={day}
                        id={index + 1}
                        key={index}
                        selectedDays={selectedDays}
                        setSelectedDays={setSelectedDays}
                    />
            )}

            <div>
                <button disabled>
                    Cancelar
                </button>

                <button disabled>
                    Salvar
                </button>
            </div>
        </HabitFormContainer>
    );
}

const HabitFormContainer = styled.form`
    background-color: ${WHITE};
    border-radius: 5px;
    height: 180px;
    margin-bottom: 30px;
    padding: 18px;
    width: 100%;

    div {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;

        button {
            align-items: center;
            border: none;
            border-radius: 5px;
            font-family: inherit;
            font-size: 16px;
            height: 35px;
            line-height: 20px;
            width: 84px;
        }
    
        button:nth-child(1) {
            background-color: inherit;
            color: ${LIGHT_BLUE};
        }

        button:nth-child(2) {
            background-color: ${LIGHT_BLUE};
            color: ${WHITE};
        }
    }

    input {
        border: 1px solid ${ELEMENT_GRAY};
        border-radius: 5px;
        color: ${GRAY};
        font-family: inherit;
        font-size: inherit;
        height: 45px;
        line-height: 25px;
        padding: 10px;
        width: 100%;

        ::placeholder {
            color: ${PLACEHOLDER};
        }
    }
`;

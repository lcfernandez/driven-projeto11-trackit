import { ELEMENT_GRAY, GRAY, LIGHT_BLUE, PLACEHOLDER, WHITE } from "../../constants/colors";

import styled from "styled-components";

export default function HabitForm() {
    return (
        <HabitFormContainer>
            <input placeholder="nome do hábito" />

            <span>
                <button disabled>D</button>
                <button disabled>S</button>
                <button disabled>T</button>
                <button disabled>Q</button>
                <button disabled>Q</button>
                <button disabled>S</button>
                <button disabled>S</button>
            </span>

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
    padding: 18px;
    width: 100%;

    div {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;

        button {
            align-items: center;
            font-size: 16px;
            line-height: 20px;
            width: 84px;
        }

        button:first-child {
            background-color: inherit;
            color: ${LIGHT_BLUE};
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

    span {
        button {
            background-color: inherit;
            border: 1px solid ${ELEMENT_GRAY};
            color: ${ELEMENT_GRAY};
            font-size: 20px;
            height: 30px;
            margin: 8px 4px 0 0;
            width: 30px;
        }
    }
`;

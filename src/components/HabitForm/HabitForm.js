import DayButton from "../DayButton/DayButton";

import { BACKGROUND, DISABLED_GRAY, ELEMENT_GRAY, GRAY, LIGHT_BLUE, PLACEHOLDER, WHITE } from "../../constants/colors";
import { BASE_URL } from "../../constants/url";

import TokenContext from "../../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function HabitForm({ setHabitForm }) {
    const [token] = useContext(TokenContext);

    const [days, setDays] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState([]);

    const dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];

    function createHabit(e) {
        e.preventDefault(); // prevent form redirect

        if (days.length === 0) {
            alert("Selecione pelo menos um dia da semana.");
        } else {
            setDisabled(true);

            const body = {
                name,
                days
            };

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            axios
                .post(`${BASE_URL}/habits`, body, config)
                .then(
                    () => {
                        setDisabled(false)
                        setHabitForm(false)
                    }
                )
                .catch(
                    (err) => {
                        alert(err.response.data.message || err.response.data);
                        setDisabled(false);
                    }
                )
        }
    }

    return (
        <HabitFormContainer onSubmit={createHabit}>
            <input
                data-identifier="input-habit-name"
                disabled={disabled && true}
                onChange={e => setName(e.target.value)}
                placeholder="nome do hábito"
                required
                type="text"
                value={name}
            />

            {dayNames.map(
                (day, index) =>
                    <DayButton
                        day={day}
                        days={days}
                        disabled={disabled}
                        id={index}
                        key={index}
                        setDays={setDays}
                    />
            )}

            <div>
                <button
                    data-identifier="cancel-habit-create-btn"
                    disabled={disabled && true}
                    onClick={() => setHabitForm(false)}
                    type="button"
                >
                    Cancelar
                </button>

                <button data-identifier="save-habit-create-btn" disabled={disabled && true}>
                    {disabled ?
                        <ThreeDots
                            ariaLabel="three-dots-loading"
                            color={WHITE}
                            height="15"
                        />
                    : "Salvar"}
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

    > div {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;

        button {
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-family: inherit;
            font-size: 16px;
            height: 35px;
            line-height: 20px;
            width: 84px;

            :disabled {
                cursor: default;
                opacity: 0.7;
            }
        }
    
        button:nth-child(1) {
            background-color: inherit;
            color: ${LIGHT_BLUE};
        }

        button:nth-child(2) {
            background-color: ${LIGHT_BLUE};
            color: ${WHITE};
            margin-left: 15px;
            
            div {
                margin: auto;
            }
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

        :disabled {
            background-color: ${BACKGROUND};
            color: ${DISABLED_GRAY};
        }

        ::placeholder {
            color: ${PLACEHOLDER};
        }
    }
`;

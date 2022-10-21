import check from "../../assets/img/check.svg";

import { GRAY, GREEN, WHITE } from "../../constants/colors";
import { BASE_URL } from "../../constants/url";

import TokenContext from "../../contexts/TokenContext";

import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";

export default function HabitToDo({ currentSequence, done, highestSequence, id, name }) {
    const [token] = useContext(TokenContext);

    function handleCheck() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        let url = `${BASE_URL}/habits/${id}`;

        if (done) {
            url += "/uncheck"
        } else {
            url += "/check"
        }
        
        axios
            .post(url, {}, config)
            .then(
                (res) => {
                    console.log(res);
                }
            )
            .catch(
                (err) => {
                    alert(err.response.data.message || err.response.data);
                }
            )
    }

    return (
        <HabitToDoContainer data-identifier="today-infos" done={done}>
            <span>
                {name}

                <p>
                    Sequência atual: {
                        <HighlightSequence done={done}>
                            {currentSequence} {currentSequence === 1 ? "dia" : "dias"}
                        </HighlightSequence>
                    }

                    <br />

                    Seu recorde: {
                        currentSequence === highestSequence ?
                            <HighlightSequence done={done}>
                                {highestSequence} {highestSequence === 1 ? "dia" : "dias"}
                            </HighlightSequence>
                            : `${highestSequence} ${highestSequence === 1 ? "dia" : "dias"}`
                    }
                </p>
            </span>

            <button data-identifier="done-habit-btn" onClick={handleCheck}>
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
        background-color: ${({done}) => done ? GREEN : "#EBEBEB"};
        border: 1px solid ${({done}) => done ? GREEN : "#E7E7E7"};
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

const HighlightSequence = styled.span`
    color: ${({done}) => done ? `${GREEN}` : "inherit"};
`;

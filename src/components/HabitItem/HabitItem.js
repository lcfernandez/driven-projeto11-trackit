import trashBin from "../../assets/img/trash-bin.svg";

import { BASE_URL } from "../../constants/url";
import { GRAY, WHITE } from "../../constants/colors";

import TokenContext from "../../contexts/TokenContext";

import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import DayButton from "../DayButton/DayButton";

export default function HabitItem({ days, id, name }) {
    const [token] = useContext(TokenContext);

    const daysButtons = [
        {
            label: "D",
            number: 0
        },
        {
            label: "S",
            number: 1
        },
        {
            label: "T",
            number: 2
        },
        {
            label: "Q",
            number: 3
        },
        {
            label: "Q",
            number: 4
        },
        {
            label: "S",
            number: 5
        },
        {
            label: "S",
            number: 6
        }
    ];

    function handleRemoveHabit() {
        if (window.confirm("Gostaria realmente de apagar o hábito?")) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            axios
                .delete(`${BASE_URL}/habits/${id}`, config)
                /* .then(
                ) */
                .catch(err => alert(err.response.data.message || err.response.data))
        }
    }

    return (
        <HabitItemContainer>
            <span data-identifier="habit-name">
                {name}
            </span>
            
            <div>
                {daysButtons.map(
                    day =>
                        <DayButton
                            createdSelected={days.includes(day.number) ? true : false}
                            day={day.label}
                            disabled={true}
                            key={day.number}
                        />
                )}
            </div>

            <RemoveButton
                alt="Botão de exclusão"
                data-identifier="delete-habit-btn"
                onClick={handleRemoveHabit}
                src={trashBin}
            />
        </HabitItemContainer>
    );
}

const HabitItemContainer = styled.div`
    background-color: ${WHITE};
    color: ${GRAY};
    flex-direction: column;
    font-size: 20px;
    padding: 15px;
    position: relative;
    word-wrap: break-word;
`;

const RemoveButton = styled.img`
    cursor: pointer;
    height: 15px;
    position: absolute;
    right: 10px;
    top: 10px;
`;

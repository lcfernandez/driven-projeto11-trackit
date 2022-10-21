import { GRAY, WHITE } from "../../constants/colors";

import styled from "styled-components";
import DayButton from "../DayButton/DayButton";

export default function HabitItem({ days, name }) {
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
        </HabitItemContainer>
    );
}

const HabitItemContainer = styled.div`
    background-color: ${WHITE};
    color: ${GRAY};
    flex-direction: column;
    font-size: 20px;
    padding: 18px;
`;

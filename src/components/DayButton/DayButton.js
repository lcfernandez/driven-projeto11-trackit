import { ELEMENT_GRAY, SELECTION, WHITE } from "../../constants/colors";

import { useState } from "react";
import styled from "styled-components";

export default function DayButton({ createdSelected, day, days, disabled, id, setDays }) {
    const [selected, setSelected] = useState(false);

    function handleClick(e) {
        e.preventDefault(); // prevent form redirect

        if (selected) {
            setDays(days.filter(selectedDay => selectedDay !== e.target.id));
        } else {
            setDays([...days, e.target.id]);
        }

        setSelected(!selected);
    }

    return (
        <DayButtonContainer
            data-identifier="week-day-btn"
            disabled={disabled && true}
            id={id}
            onClick={handleClick}
            selected={selected || createdSelected}
        >
            {day}
        </DayButtonContainer>
    );
}

const DayButtonContainer = styled.button`
    background-color: ${({ selected }) => selected ? SELECTION : "inherit"};
    border: 1px solid ${({ selected }) => selected ? SELECTION : ELEMENT_GRAY};
    border-radius: 5px;
    color: ${({ selected }) => selected ? WHITE : ELEMENT_GRAY};
    cursor: pointer;
    font-family: inherit;
    font-size: 20px;
    height: 30px;
    margin: 8px 4px 0 0;
    width: 30px;

    :disabled {
        cursor: default;
    }
`;

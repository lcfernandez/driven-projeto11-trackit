import { ELEMENT_GRAY, WHITE } from "../../constants/colors";

import { useState } from "react";
import styled from "styled-components";

export default function DayButton({ day, id, selectedDays, setSelectedDays }) {
    const [selected, setSelected] = useState(false);

    function handleClick(e) {
        e.preventDefault(); // prevent form redirect

        if (selected) {
            setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== e.target.id));
        } else {
            setSelectedDays([...selectedDays, e.target.id]);
        }

        setSelected(!selected);
    }

    return (
        <DayButtonContainer id={id} onClick={handleClick} selected={selected}>
            {day}
        </DayButtonContainer>
    );
}

const DayButtonContainer = styled.button`
    background-color: ${({ selected }) => selected ? ELEMENT_GRAY : "inherit"};
    border: 1px solid ${ELEMENT_GRAY};
    border-radius: 5px;
    color: ${({ selected }) => selected ? WHITE: ELEMENT_GRAY};
    cursor: pointer;
    font-family: inherit;
    font-size: 20px;
    height: 30px;
    margin: 8px 4px 0 0;
    width: 30px;
`;

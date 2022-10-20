import { ELEMENT_GRAY } from "../../constants/colors";

import styled from "styled-components";

export default function DayButton({ day }) {
    return (
        <DayButtonContainer disabled>
            {day}
        </DayButtonContainer>
    );
}

const DayButtonContainer = styled.button`
    background-color: inherit;
    border: 1px solid ${ELEMENT_GRAY};
    border-radius: 5px;
    color: ${ELEMENT_GRAY};
    cursor: pointer;
    font-family: inherit;
    font-size: 20px;
    height: 30px;
    margin: 8px 4px 0 0;
    width: 30px;
`;

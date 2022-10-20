import { LIGHT_BLUE, WHITE } from "../../constants/colors";

import styled from "styled-components";

const AddHabitButtonStyle = styled.button`
    background-color: ${LIGHT_BLUE};
    border: none;
    border-radius: 5px;
    color: ${WHITE};
    cursor: pointer;
    display: inherit;
    font-size: 26px;
    height: 35px;
    justify-content: center;
    width: 40px;
`;

export default AddHabitButtonStyle;

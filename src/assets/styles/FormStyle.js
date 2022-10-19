import { INPUT_BORDER, LIGHT_BLUE, PLACEHOLDER, WHITE } from "../../constants/colors";

import styled from "styled-components";

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    margin: 20px 0;

    * {
        margin: 5px 0;
    }

    button, input {
        border-radius: 5px;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        height: 45px;
        line-height: inherit;
    }

    button {
        background-color: ${LIGHT_BLUE};
        border: none;
        color: ${WHITE};
    }

    input {
        border: 1px solid ${INPUT_BORDER};
        padding: 10px;

        ::placeholder {
            color: ${PLACEHOLDER};
        }
    }
`;

export default FormStyle;

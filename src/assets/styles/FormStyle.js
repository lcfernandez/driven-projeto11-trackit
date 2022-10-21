import { BACKGROUND, DISABLED_GRAY, ELEMENT_GRAY, GRAY, LIGHT_BLUE, PLACEHOLDER, WHITE } from "../../constants/colors";

import styled from "styled-components";

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    line-height: 25px;
    margin: 20px 0;

    * {
        margin: 5px 0;
    }

    button, input {
        border-radius: 5px;
        font-family: inherit;
        font-size: inherit;
        height: 45px;
        line-height: inherit;
    }

    button {
        align-items: center;
        background-color: ${LIGHT_BLUE};
        border: none;
        color: ${WHITE};
        cursor: pointer;
        display: inherit;
        justify-content: center;

        :disabled {
            cursor: default;
            opacity: 0.7;
        }
    }

    input {
        border: 1px solid ${ELEMENT_GRAY};
        color: ${GRAY};
        padding: 10px;

        :disabled {
            background-color: ${BACKGROUND};
            color: ${DISABLED_GRAY};
        }

        ::placeholder {
            color: ${PLACEHOLDER};
        }
    }
`;

export default FormStyle;

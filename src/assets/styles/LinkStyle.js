import { LIGHT_BLUE } from "../../constants/colors";

import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
    color: ${LIGHT_BLUE};
    font-size: 14px;
    line-height: 17px;

    :visited {
        color: ${LIGHT_BLUE};
    }
`;

export default LinkStyle;

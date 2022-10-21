import { LIGHT_BLUE, WHITE } from "../../constants/colors";

import ProgressContext from "../../contexts/ProgressContext";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';


export default function Footer() {
    const [progress] = useContext(ProgressContext);

    return (
        <FooterContainer>
            <Link to={"/habitos"}>
                <span data-identifier="habit-page-action">
                    Hábitos
                </span>
            </Link>

            <Link to={"/hoje"}>
                <CircularProgressbarStyled
                    background
                    backgroundPadding={6}
                    styles={
                        buildStyles({
                            backgroundColor: LIGHT_BLUE,
                            textColor: WHITE,
                            pathColor: WHITE,
                            trailColor: "transparent"
                        })
                    }
                    text={"Hoje"}
                    value={progress}
                />
            </Link>

            <Link to={"/historico"}>
                <span data-identifier="historic-page-action">
                    Histórico
                </span>
            </Link>
        </FooterContainer>
    );
}

const CircularProgressbarStyled = styled(CircularProgressbar)`
    height: 91px;
    margin-bottom: 40px;
`;

const FooterContainer = styled.div`
    align-items: center;
    background-color: ${WHITE};
    bottom: 0;
    color: ${LIGHT_BLUE};
    display: flex;
    font-size: 18px;
    height: 70px;
    justify-content: space-between;
    left: 0;
    padding: 0 36px;
    position: fixed;
    width: 100%;
    z-index: 1;

    a {
        color: inherit;
        text-decoration: none;

        :visited {
            color: inherit;
        }
    }
`;

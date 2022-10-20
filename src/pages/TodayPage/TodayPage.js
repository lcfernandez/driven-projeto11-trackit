import { APP_BACKGROUND, DARK_BLUE, LIGHT_GRAY } from "../../constants/colors";
import { BASE_URL } from "../../constants/url";

import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import TokenContext from "../../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function TodayPage() {
    const [token] = useContext(TokenContext);

    const [habitsToday, setHabitsToday] = useState(undefined);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

		axios
            .get(`${BASE_URL}/habits/today`, config)
            .then(res => setHabitsToday(res.data))
            .catch(err => alert(err.response.data.message || err.response.data));
    }, [token]);

    function handleHabitsToday() {
        if (!habitsToday) {
            return <ThreeDots ariaLabel="three-dots-loading" color={DARK_BLUE} />;
        } else if (habitsToday.length === 0) {
            return "Nenhum hábito concluído ainda";
        } else {
            return habitsToday.map(e => e);
        }
    }

    return (
        <>
            <HeaderApp />

            <TodayPageContainer>
                <div>
                    Segunda, 17/05
                </div>
                
                {handleHabitsToday()}
            </TodayPageContainer>

            <Footer />
        </>
    );
}

const TodayPageContainer = styled.div`
    background-color: ${APP_BACKGROUND};
    color: ${LIGHT_GRAY};
    font-size: 18px;
    height: calc(100vh - 140px);
    line-height: 22px;
    margin: 70px 0;
    padding: 22px 17px;

    div {
        color: ${DARK_BLUE};
        font-size: 22px;
        line-height: 29px;
    }
`;

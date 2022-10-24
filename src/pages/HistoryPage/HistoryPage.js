import { BACKGROUND, DARK_BLUE, GRAY, WHITE } from "../../constants/colors";

import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import { BASE_URL } from "../../constants/url";

import TokenContext from "../../contexts/TokenContext";

import Calendar from "react-calendar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import "react-calendar/dist/Calendar.css";

export default function HistoryPage() {
    const [token] = useContext(TokenContext);

    const [completedDays, setCompletedDays] = useState([]);
    const [incompletedDays, setIncompletedDays] = useState([]);
    const [value, onChange] = useState(new Date());

    const dayjs = require("dayjs");
    const isToday = require("dayjs/plugin/isToday");
    dayjs.extend(isToday);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

		axios
            .get(`${BASE_URL}/habits/history/daily`, config)
            .then(
                (res) => {
                    const completedArray = [];
                    const incompletedArray = [];
                    
                    res.data.forEach(
                        (day) => {
                            day.habits.some(habit => !habit.done)
                                ? incompletedArray.push(day.day)
                                : completedArray.push(day.day)
                        }
                    );

                    setCompletedDays(completedArray);
                    setIncompletedDays(incompletedArray);
                }
            )
            .catch(
                (err) => {
                    alert(
                        err.response.data.message || err.response.data
                    )
                }
            );
    }, [token]);

    return (
        <HistoryPageContainer>
            <HeaderApp />

            <div>
                Histórico
            </div>

            <CalendarStyled
                calendarType="US"
                onChange={onChange}
                value={value}
                tileClassName={

                    ({ date }) => {
                        if (!dayjs(date).isToday()) {
                            if (completedDays.includes(dayjs(date).format("DD/MM/YYYY"))) {
                                return "react-calendar__tile--completed";
                            }

                            if (incompletedDays.includes(dayjs(date).format("DD/MM/YYYY"))) {
                                return "react-calendar__tile--incompleted";
                            }
                        }
                    }
                }
            />

            <Footer />
        </HistoryPageContainer>
    );
}

const CalendarStyled = styled(Calendar)`
    border-radius: 10px;
    color: #000000;
    font-size: 14px;
    margin: 11px auto;

    .react-calendar__tile {
        height: 50px;
    }

    .react-calendar__tile--completed {
        background-color: #8cc654;
        border-radius: 50%;
    }

    .react-calendar__tile--incompleted {
        background-color: #ea5766;
        border-radius: 50%;
    }
`;

const HistoryPageContainer = styled.div`
    background-color: ${BACKGROUND};
    color: ${DARK_BLUE};
    font-size: 22px;
    min-height: calc(100vh - 140px);
    line-height: 29px;
    margin: 70px 0;
    padding: 22px 17px;

    p {
        color: ${GRAY};
        font-size: 18px;
        line-height: 22px;
        margin-top: 17px;
    }

    div {
        border: none;
    }
`;

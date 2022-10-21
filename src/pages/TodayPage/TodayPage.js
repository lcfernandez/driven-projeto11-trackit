import { BACKGROUND, DARK_BLUE, GREEN, LIGHT_GRAY } from "../../constants/colors";
import { BASE_URL } from "../../constants/url";

import Footer from "../../components/Footer/Footer";
import HabitToDo from "../../components/HabitToDo/HabitsToDo";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import ProgressContext from "../../contexts/ProgressContext";
import TokenContext from "../../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function TodayPage() {
    const [progress, setProgress] = useContext(ProgressContext);
    const [token] = useContext(TokenContext);

    const [habitsToday, setHabitsToday] = useState(undefined);

    const dayjs = require('dayjs');
    
    const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const weekDay = weekDays[dayjs().day()];
    const date = dayjs().format('DD/MM');

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

		axios
            .get(`${BASE_URL}/habits/today`, config)
            .then(
                (res) => {
                    setHabitsToday(res.data);

                    if (habitsToday && habitsToday.length > 0) {
                        const habitsTodayDone = habitsToday.filter(habit => habit.done).length;
                        setProgress(((habitsTodayDone/habitsToday.length) * 100).toFixed());
                    }
                }
            )
            .catch(
                (err) => {
                    alert(
                        err.response.data.message || err.response.data
                    );
                }
            );
    }, [habitsToday, setProgress, token]);

    function handleHabitsToday() {
        if (!habitsToday) {
            return <ThreeDots ariaLabel="three-dots-loading" color={DARK_BLUE} />;
        } else if (habitsToday.length === 0) {
            return "Você não tem nenhum hábito para hoje.";
        } else {
            return (
                habitsToday.map(
                    habit =>
                        <HabitToDo
                            currentSequence={habit.currentSequence}
                            done={habit.done}
                            highestSequence={habit.highestSequence}
                            id={habit.id}
                            key={habit.id}
                            name={habit.name}
                        />
                )
            );
        }
    }

    return (
        <>
            <HeaderApp />

            <TodayPageContainer progress={progress}>
                <span data-identifier="today-infos">
                    <div>
                        {weekDay}, {date}
                    </div>
                    
                    {progress > 0 ? `${progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                </span>
                
                <HabitsTodoList>
                    {handleHabitsToday()}
                </HabitsTodoList>
            </TodayPageContainer>

            <Footer />
        </>
    );
}

const HabitsTodoList = styled.ul`
    margin: 28px 0;
`;

const TodayPageContainer = styled.div`
    background-color: ${BACKGROUND};
    color: ${({progress}) => progress > 0 ? GREEN : LIGHT_GRAY};
    font-size: 18px;
    height: calc(100vh - 140px);
    line-height: 22px;
    margin: 70px 0;
    padding: 22px 17px;

    div:nth-child(1) {
        color: ${DARK_BLUE};
        font-size: 22px;
        line-height: 29px;
    }
`;

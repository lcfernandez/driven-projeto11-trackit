import AddHabitButtonStyle from "../../assets/styles/AddHabbitStyle";

import { BACKGROUND, DARK_BLUE, GRAY } from "../../constants/colors";
import { BASE_URL } from "../../constants/url";

import Footer from "../../components/Footer/Footer";
import HabitForm from "../../components/HabitForm/HabitForm";
import HabitItem from "../../components/HabitItem/HabitItem";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import TokenContext from "../../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function HabitsPage({ days, name, setDays, setName }) {
    const [token] = useContext(TokenContext);

    const [habitForm, setHabitForm] = useState(false);
    const [habits, setHabits] = useState(undefined);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

		axios
            .get(`${BASE_URL}/habits`, config)
            .then(res => setHabits(res.data))
            .catch(err => alert(err.response.data.message || err.response.data));
    }, [habitForm, habits, token]);

    function handleHabits() {
        if (!habits) {
            return <ThreeDots ariaLabel="three-dots-loading" color={DARK_BLUE} />;
        } else if (habits.length === 0) {
            return (
                <p data-identifier="no-habit-message">
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            );
        } else {
            return (
                habits.map(
                    habit =>
                        <HabitItem
                            days={habit.days}
                            habits={habits}
                            id={habit.id}
                            key={habit.id}
                            name={habit.name}
                            setHabits={setHabits}
                        />
                )
            );
        }
    }

    return (
        <HabitsPageContainer>
            <HeaderApp />

            <div>
                <span>
                    Meus hábitos
                </span>

                <AddHabitButtonStyle data-identifier="create-habit-btn" onClick={() => setHabitForm(true)}>
                    +
                </AddHabitButtonStyle>
            </div>

            {habitForm &&
                <HabitForm
                    days={days}
                    name={name}
                    setDays={setDays}
                    setHabitForm={setHabitForm}
                    setName={setName}
                />
            }

            {handleHabits()}

            <Footer />
        </HabitsPageContainer>
    );
}

const HabitsPageContainer = styled.div`
    background-color: ${BACKGROUND};
    color: ${DARK_BLUE};
    font-size: 22px;
    min-height: calc(100vh - 140px);
    line-height: 29px;
    margin: 70px 0;
    padding: 22px 17px;

    > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
    }

    p {
        color: ${GRAY};
        font-size: 18px;
        line-height: 22px;
    }
`;

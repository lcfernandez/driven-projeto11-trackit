import GlobalStyle from "./assets/styles/GlobalStyle";

import AvatarContext from "./contexts/AvatarContext";
import ProgressContext from "./contexts/ProgressContext";
import TokenContext from "./contexts/TokenContext";

import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import HistoryDetailsPage from "./pages/HistoryDetailsPage/HistoryDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [avatar, setAvatar] = useState(
        localStorage.getItem("avatar") || ""
    );
    const [days, setDays] = useState([]);
    const [historyDetails, setHistoryDetails] = useState(
        localStorage.getItem("historyDetails")
        ? JSON.parse(localStorage.getItem("historyDetails"))
        : undefined
    );
    const [name, setName] = useState("");
    const [progress, setProgress] = useState(
        localStorage.getItem("progress") || 0
    );
    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            
            <AvatarContext.Provider value={[avatar, setAvatar]}>
            <ProgressContext.Provider value={[progress, setProgress]}>
            <TokenContext.Provider value={[token, setToken]}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                setHistoryDetails={setHistoryDetails}
                                setProgress={setProgress}
                            />
                        }
                    />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route
                        path="/habitos"
                        element={
                            <HabitsPage
                                days={days}
                                name={name}
                                setDays={setDays}
                                setName={setName}
                            />
                        }
                    />
                    <Route
                        path="/historico"
                        element={
                            <HistoryPage
                                setHistoryDetails={setHistoryDetails}
                            />
                        }
                    />
                    <Route
                        path="/historico/detalhes"
                        element={
                            <HistoryDetailsPage
                            historyDetails={historyDetails}
                            />
                        }
                    />
                    <Route path="/hoje" element={<TodayPage />} />
                </Routes>
            </TokenContext.Provider>
            </ProgressContext.Provider>
            </AvatarContext.Provider>
        </BrowserRouter>
    );
}

export default App;

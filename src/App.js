import GlobalStyle from "./assets/styles/GlobalStyle";

import AvatarContext from "./contexts/AvatarContext";

import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [avatar, setAvatar] = useState("");
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            
            <AvatarContext.Provider value={[avatar, setAvatar]}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                </Routes>
            </AvatarContext.Provider>
        </BrowserRouter>
    );
}

export default App;

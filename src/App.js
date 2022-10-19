import GlobalStyle from "./assets/styles/GlobalStyle";

import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import GlobalStyle from "./assets/styles/GlobalStyle";

import HomePage from "./pages/HomePage/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

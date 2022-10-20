import FormStyle from "../../assets/styles/FormStyle";
import LinkStyle from "../../assets/styles/LinkStyle";

import HeaderHome from "../../components/HeaderHome/HeaderHome";

import { BASE_URL } from "../../constants/url";
import { WHITE } from "../../constants/colors";

import AvatarContext from "../../contexts/AvatarContext";
import TokenContext from "../../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

export default function HomePage() {
    const [, setAvatar] = useContext(AvatarContext);
    const [, setToken] = useContext(TokenContext);

    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function logIn(e) {
        e.preventDefault(); // prevent form redirect

        setDisabled(true);

        const body = {
            email,
            password
        };

        axios
            .post(`${BASE_URL}/auth/login`, body)
            .then(
                (res) => {
                    setAvatar(res.data.image)
                    setToken(res.data.token)
                    navigate("/hoje");
                }
            )
            .catch(
                (err) => {
                    alert(err.response.data.message || err.response.data);
                    setDisabled(false);
                }
            )
    }

    return (
        <HomePageContainer>
            <HeaderHome />

            <FormStyle onSubmit={logIn}>
                <input
                    data-identifier="input-email"
                    disabled={disabled && true}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email"
                    required
                    type="email"
                    value={email}
                />
                <input
                    data-identifier="input-password"
                    disabled={disabled && true}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="senha"
                    required
                    type="password"
                    value={password}
                />

                <button
                    data-identifier="login-btn"
                    disabled={disabled && true}
                >
                    {disabled ?
                        <ThreeDots ariaLabel="three-dots-loading" color={WHITE} />
                    : "Entrar"}
                </button>
            </FormStyle>

            <LinkStyle data-identifier="sign-up-action" to={"/cadastro"}>
                Não tem uma conta? Cadastre-se!
            </LinkStyle>
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
    margin: 60px 36px;
    text-align: center;
`;

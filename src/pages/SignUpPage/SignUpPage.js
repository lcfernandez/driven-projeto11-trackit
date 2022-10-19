import FormStyle from "../../assets/styles/FormStyle";
import LinkStyle from "../../assets/styles/LinkStyle";

import HeaderHome from "../../components/HeaderHome/HeaderHome";

import { BASE_URL } from "../../constants/url";
import { WHITE } from "../../constants/colors";

import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SignUpPage() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
	const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault(); // prevent form redirect

        setDisabled(true);

        const body = {
            email,
            name,
            image,
            password
        };

        axios
            .post(`${BASE_URL}/auth/sign-up`, body)
            .then(() => navigate("/"))
            .catch(
                (err) => {
                    alert(err.response.data.message || err.response.data);
                    setDisabled(false);
                }
            )
    }

    return (
        <SignUpPageContainer>
            <HeaderHome />

            <FormStyle onSubmit={signUp}>
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
                <input
                    data-identifier="input-name"
                    disabled={disabled && true}
                    onChange={e => setName(e.target.value)}
                    placeholder="nome"
                    required
                    type="text"
                    value={name}
                />
                <input
                    data-identifier="input-photo"
                    disabled={disabled && true}
                    onChange={e => setImage(e.target.value)}
                    placeholder="foto"
                    required
                    type="url"
                    value={image}
                />

                <button
                    data-identifier="back-to-login-action"
                    disabled={disabled && true}
                >
                    {disabled ?
                        <ThreeDots
                            ariaLabel="three-dots-loading"
                            color={WHITE}
                        />
                    : "Cadastrar"}
                </button>
            </FormStyle>

            <LinkStyle to={"/"}>
                Já tem uma conta? Faça login!"
            </LinkStyle>
        </SignUpPageContainer>
    );
}

const SignUpPageContainer = styled.div`
    margin: 60px 36px;
    text-align: center;
`;

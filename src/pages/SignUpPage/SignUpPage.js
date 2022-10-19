import FormStyle from "../../assets/styles/FormStyle";
import LinkStyle from "../../assets/styles/LinkStyle";

import HeaderHome from "../../components/HeaderHome/HeaderHome";

import styled from "styled-components";

export default function SignUpPage() {
    return (
        <SignUpPageContainer>
            <HeaderHome />

            <FormStyle>
                <input placeholder="email" required type="email" />
                <input placeholder="senha" required type="password" />
                <input placeholder="nome" type="text" />
                <input placeholder="foto" type="url" />

                <button>
                    Cadastrar
                </button>
            </FormStyle>

            <LinkStyle to={"/"}>
                Já tem uma conta? Faça login!
            </LinkStyle>
        </SignUpPageContainer>
    );
}

const SignUpPageContainer = styled.div`
    margin: 60px 36px;
    text-align: center;
`;

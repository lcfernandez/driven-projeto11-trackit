import FormStyle from "../../assets/styles/FormStyle";
import LinkStyle from "../../assets/styles/LinkStyle";

import HeaderHome from "../../components/HeaderHome/HeaderHome";

import styled from "styled-components";

export default function HomePage() {
    return (
        <HomePageContainer>
            <HeaderHome />

            <FormStyle>
                <input data-identifier="input-email" placeholder="email" required type="email"/>
                <input data-identifier="input-password" placeholder="senha" required type="password" />

                <button data-identifier="login-btn">
                    Entrar
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

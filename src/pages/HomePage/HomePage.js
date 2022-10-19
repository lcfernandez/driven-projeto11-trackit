import FormStyle from "../../assets/styles/FormStyle";
import LinkStyle from "../../assets/styles/LinkStyle";

import HeaderHome from "../../components/HeaderHome/HeaderHome";

import styled from "styled-components";

export default function HomePage() {
    return (
        <HomePageContainer>
            <HeaderHome />

            <FormStyle>
                <input placeholder="email" type="email" />
                <input placeholder="senha" type="password" />

                <button>
                    Entrar
                </button>
            </FormStyle>

            <LinkStyle>
                Não tem uma conta? Cadastre-se!
            </LinkStyle>
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
    margin: 60px 36px;
    text-align: center;
`;

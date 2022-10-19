import styled from "styled-components";

import logo from "../../assets/img/logo.png";

export default function HeaderHome() {
    return (
        <HeaderHomeContainer>
            <div>
            <img alt="TrackIt logo" src={logo}/>
            </div>
        </HeaderHomeContainer>
    );
}

const HeaderHomeContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 8px 0;
`;

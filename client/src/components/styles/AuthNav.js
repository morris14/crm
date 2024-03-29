import styled from "styled-components";

export default styled.nav`
    position: fixed;
    padding: 0 40px;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colorGreyLight};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.copyColor};
    z-index: 10;

    @media only screen and (min-width: 740px) {
        height: 65px;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
            display: inline-block;
            margin-left: 12px;
        }
    }
`;

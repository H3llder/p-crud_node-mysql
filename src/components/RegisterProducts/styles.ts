import styled from 'styled-components';

export const FormRegister = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #fff;
    }

    input {
        width: 80%;
        border: none;
        padding: 20px;
        border-radius: 5px;
        font-size: 18px;
        outline: none;
        background-color: #414141;
        color: #fff;
    } input:not(:first-child) {
        margin-top: 20px;
    }

    button {
        width: 90%;
        padding: 20px;
        background: linear-gradient(45deg, #8668FF, #A70FD8);
        cursor: pointer;
        color: #fff;
        letter-spacing: 1.5px;

        margin-top: 20px;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        outline: none;
        transition: all ease 0.4s;
    } button:hover {
        background: linear-gradient(150deg, #8668FF, #A70FD8);
    }
`;

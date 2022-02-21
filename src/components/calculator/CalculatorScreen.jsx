import styled from "styled-components";

const Screen = styled.div`
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.calculatorScreenBG};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({ theme }) => theme.calculatorScreenText};
    font-weight: bold;
    box-sizing: border-box;
    font-size: 2rem;
`;

const CalculatorScreen = (props) => {
    return (
        <Screen>{props.screenValue}</Screen>
    )
}

export default CalculatorScreen;
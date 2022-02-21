import styled from 'styled-components';
import CalculatorButtons from './CalculatorButtons';
import CalculatorScreen from './CalculatorScreen';

const CalculatorWrapper = styled.div`
    width: 350px;
    height: 550px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.calcuatorBG};
    margin: 0 auto;
`;

const Calculator = (props) => {
    return (
        <CalculatorWrapper>
            <CalculatorScreen
                screenValue={props.numbers ? props.numbers : props.result}
            />
            <CalculatorButtons
                numbers={props.numbers}
                result={props.result}
                resetHandler = {props.resetHandler}
                invertHandler={props.invertHandler}
                percentHandler={props.percentHandler}
                equalsHandler={props.equalsHandler}
                signHandler={props.signHandler}
                commaHandler={props.commaHandler}
                numberClick={props.numberClick}
            />
        </CalculatorWrapper>
    )
}

export default Calculator;
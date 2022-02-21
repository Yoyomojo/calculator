import styled from 'styled-components';

const Buttons = styled.div`
    width: 100%;
    height: calc(100% - 110px);
    display: grid;
    grid-gap: 10px;
    padding: 6px;
`;

const CalculatorButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.calculatorButtonBG};
    font-size: 2rem;
    color: ${({ theme }) => theme.calculatorButtonText};
    font-weight: bold;
    cursor: pointer;
    border-radius: 6px;
    outline: solid 2px #FFF;
    text-align: center;

    &:hover {
        background-color: #289DC8;
    }

    &.equals {
        grid-column: 3 / 5;
        background-color: #DFB918;
        &:hover {
            background-color: #289DC8;
        }
    }
`;

const calcButtonsArr = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
];

const Button = ({ className, value, onClick }) => {
    return (
        <CalculatorButton className={className} onClick={onClick} aria-label={value}>
            {value}
        </CalculatorButton>
    );
};

const CalculatorButtons = (props) => {
    return (
        <Buttons>
            {
                calcButtonsArr.flat().map((cBtn, bIndex) => {
                    return (
                        <Button
                            key={bIndex}
                            className={cBtn === '=' ? 'equals' : ''}
                            value={cBtn}
                            onClick={
                                cBtn === 'C'
                                ? props.resetHandler
                                : cBtn === '+-'
                                ? props.invertHandler
                                : cBtn === '%'
                                ? props.percentHandler
                                : cBtn === '='
                                ? props.equalsHandler
                                : cBtn === '/' || cBtn === 'X' || cBtn === '-' || cBtn === '+'
                                ? props.signHandler
                                : cBtn === '.'
                                ? props.commaHandler
                                : props.numberClick
                            }
                        />
                    );
                })
            }
        </Buttons>
    )
}

export default CalculatorButtons;
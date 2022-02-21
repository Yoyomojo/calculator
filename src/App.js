import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Calculator from './components/calculator/Calculator';
import ToggleCalculatorTheme from './components/ToggleCalcuatorTheme';
import GlobalStyle from './theme/globalStyles';
import { calculatorDark, calculatorLight } from './theme/theme.js';
import { removeWhiteSpace } from './util/removeWhiteSpace';
import { toLocaleString } from './util/toLocaleString';

const App = () => {
  const [CalcuatorTheme, setCalculatorTheme] = useState('calculatorDark');

  const changeCalculatorTheme = () => {
    if (CalcuatorTheme === 'calculatorLight') {
      setCalculatorTheme('calculatorDark');
    } else {
      setCalculatorTheme('calculatorLight');
    }
  }

  let [calc, setCalc] = useState({
    sign: '',
    numbers: 0,
    result: 0,
  });

  const numberClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeWhiteSpace(calc.numbers).length < 16) {
      setCalc({
        ...calc,
        numbers:
          calc.numbers === 0 && value === '0'
            ? '0'
            : removeWhiteSpace(calc.numbers) % 1 === 0
              ? toLocaleString(Number(removeWhiteSpace(calc.numbers + value)))
              : toLocaleString(calc.numbers + value),
        result: !calc.sign ? 0 : calc.result,
      });
    }
  };

  const commaClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      numbers: !calc.numbers.toString().includes('.') ? calc.numbers + value : calc.numbers,
    });
  };

  const signClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      result: !calc.result && calc.numbers ? calc.numbers : calc.result,
      numbers: 0,
    });
  };

  const equalsClick = () => {
    if (calc.sign && calc.numbers) {
      const math = (a, b, sign) =>
        sign === '+'
          ? a + b
          : sign === '-'
            ? a - b
            : sign === 'X'
              ? a * b
              : a / b;

      setCalc({
        ...calc,
        result:
          calc.numbers === '0' && calc.sign === '/'
            ? 'Can#39;t divide with 0'
            : toLocaleString(
              math(
                Number(removeWhiteSpace(calc.result)),
                Number(removeWhiteSpace(calc.numbers)),
                calc.sign
              )
            ),
        sign: '',
        numbers: 0,
      });
    }
  };

  const invertClick = () => {
    setCalc({
      ...calc,
      numbers: calc.numbers ? toLocaleString(removeWhiteSpace(calc.numbers) * -1) : 0,
      result: calc.result ? toLocaleString(removeWhiteSpace(calc.result) * -1) : 0,
      sign: '',
    });
  };

  const percentClick = () => {
    let num = calc.numbers ? parseFloat(removeWhiteSpace(calc.numbers)) : 0;
    let res = calc.result ? parseFloat(removeWhiteSpace(calc.result)) : 0;

    setCalc({
      ...calc,
      numbers: (num /= Math.pow(100, 1)),
      result: (res /= Math.pow(100, 1)),
      sign: '',
    });
  };

  const resetClick = () => {
    setCalc({
      ...calc,
      sign: '',
      numbers: 0,
      result: 0,
    });
  };

  return (
    <ThemeProvider theme={CalcuatorTheme === 'calculatorDark' ? calculatorDark : calculatorLight}>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col'>
            <h1><FontAwesomeIcon icon={['fa', 'calculator']} className='me-1' /> {process.env.REACT_APP_SITE_NAME}</h1>
          </div>
          <div className='col'>
            <ToggleCalculatorTheme changeEvent={changeCalculatorTheme} />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <hr />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <Calculator
              numbers={calc.numbers}
              result={calc.result}
              resetHandler={resetClick}
              invertHandler={invertClick}
              percentHandler={percentClick}
              equalsHandler={equalsClick}
              signHandler={signClick}
              commaHandler={commaClick}
              numberClick={numberClick}
            />
          </div>
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;

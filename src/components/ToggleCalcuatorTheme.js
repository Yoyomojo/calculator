import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleCalculatorTheme = (props) => {
    return (
        <>
            <ul className='list-inline text-end'>
                <li className='list-inline-item'>
                    <label htmlFor='changeThemeToggle'>
                        <FontAwesomeIcon icon={['fa', 'moon']} size='2x' className='me-1' />
                    </label>
                </li>
                <li className='list-inline-item'>
                    <div className='form-check form-switch text-start'>
                        <input className='form-check-input' type='checkbox' role='switch' name='changeThemeToggle' id='changeThemeToggle' onChange={props.changeEvent} />
                    </div>
                </li>
                <li className='list-inline-item'>
                    <label htmlFor='changeThemeToggle'>
                        <FontAwesomeIcon icon={['fa', 'lightbulb']} size='2x' className='me-1' />
                    </label>
                </li>
            </ul>
        </>
    )
}

export default ToggleCalculatorTheme;
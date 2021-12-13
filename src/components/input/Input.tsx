import {FC} from 'react';
import logo from '../../assets/Search.svg'

export const Input: FC = () => {
    return (
        <div className="input__container">
            <img src={logo} alt="logo" className="input__logo"/>
            <input className="input__field" type="text"/>
        </div>
    )
}
import {FC} from 'react';
import logo from '../../assets/Vector.svg';
import {Input} from '../input/Input';

export const Header: FC = () => {
    return (
        <header className="header__container">
            <div className="header__logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header__input">
                <Input/>
            </div>
        </header>
    )
}
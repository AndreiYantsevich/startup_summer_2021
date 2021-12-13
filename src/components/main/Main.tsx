import {FC} from 'react';
import followers from '../../assets/Followers.svg';
import following from '../../assets/Following.svg';

export const Main: FC = () => {
    return (
        <div className="main__container">
            <div className="main__profile">
                <img src="" alt="avatar"/>
                <h2>
                    Dan Abramov
                </h2>
                <a href="">link</a>
                <div className="main__followers">
                    <img src={followers} alt="logo"/>
                    <span>65.8 followers</span>
                </div>
                <div className="main__following">
                    <img src={following} alt="logo"/>
                    <span>171 following</span>
                </div>
            </div>
        </div>
    )
}
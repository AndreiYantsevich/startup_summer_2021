import {FC} from 'react';
import followers from '../../assets/Followers.svg';
import following from '../../assets/Following.svg';

export const Profile: FC = () => {
    return (
        <div className="profile__container">
            <div className="profile__profile">
                <img src="" alt="avatar"/>
                <h2>
                    Dan Abramov
                </h2>
                <a href="">link</a>
                <div className="profile__followers">
                    <img src={followers} alt="logo"/>
                    <span>65.8 followers</span>
                </div>
                <div className="profile__following">
                    <img src={following} alt="logo"/>
                    <span>171 following</span>
                </div>
            </div>
        </div>
    )
}
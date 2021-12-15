import {FC} from 'react';
import {FollowersIcon} from '../../assets/followers';
import {FollowingIcon} from '../../assets/following';


export const UserData: FC = () => {
    return (
        <div className="user-info-container">
            <div className="user-info">
                <div className="user-info_photo">
                    <img src="" alt="" className="user_photo"/>
                </div>
                <div className="user-info_name">Andrei</div>
                <div className="user-info_login">
                    <a href="" target="_blank" rel="noreferrer">/</a>
                </div>
                <span className="user-info_followers">
          <FollowersIcon/>
                    1666
        </span>
                <span className="user-info_following">
          <FollowingIcon/>
                   12345
        </span>
            </div>
        </div>
    )
}
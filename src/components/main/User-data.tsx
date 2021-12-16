import {FC, memo} from 'react';
import {FollowersIcon} from '../../assets/followers';
import {FollowingIcon} from '../../assets/following';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {UsersType} from '../../api';


export const UserData: FC = memo(() => {
    const userProfile: UsersType | null = useSelector<AppStateType, UsersType | null>(state => state.user.userProfile)

    return (
        <div className="user-info-container">
            {userProfile &&
                <div className="user-info">
                    <div className="user-info_photo">
                        <img src={userProfile.avatar_url} alt="avatar"
                             className="user_photo"/>
                    </div>
                    <div className="user-info_name">{userProfile.name}</div>
                    <div className="user-info_login">
                        <a href={userProfile.html_url} target="_blank"
                           rel="noreferrer">{userProfile.login}</a>
                    </div>
                    <span className="user-info_followers">
          <FollowersIcon/>
                        {userProfile.followers}
        </span>
                    <span className="user-info_following">
          <FollowingIcon/>
                        {userProfile.following}
        </span>
                </div>
            }
        </div>
    )
})
import {FC} from 'react';
import {UserData} from './User-data';
import {RepositoriesData} from './Repositories-data';

export const Main: FC = () => {
    return (
        <div className="user-table">
            <UserData/>
            <RepositoriesData/>
        </div>
    )
}
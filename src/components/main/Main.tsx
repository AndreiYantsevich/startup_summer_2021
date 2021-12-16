import {FC, memo} from 'react';
import {UserData} from './User-data';
import {RepositoriesData} from './Repositories-data';

export const Main: FC = memo(() => {
    return (
        <div className="user-table">
            <UserData/>
            <RepositoriesData/>
        </div>
    )
})
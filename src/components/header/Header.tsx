import {FC} from 'react';
import {GitHubIcon} from '../../assets/github_logo';
import {SearchIcon} from '../../assets/search';

export const Header: FC = () => {
    return (
        <nav className="nav">
            <GitHubIcon/>
            <form className="nav_search">
                <div className="nav_search__img">
                    <SearchIcon/>
                </div>
                <input
                    type="text"
                    className="nav_search__input"
                    placeholder="Enter GitHub username"
                />
            </form>
        </nav>
    )
}
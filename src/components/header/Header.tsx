import {ChangeEvent, KeyboardEvent, FC, useState, memo, useCallback} from 'react';
import {GitHubIcon} from '../../assets/github_logo';
import {SearchIcon} from '../../assets/search';
import {useDispatch} from 'react-redux';
import {fetchUser, searchUserAC} from '../../store/reducers/user-reducer';

export const Header: FC = memo(() => {
    const dispatch = useDispatch()
    const [searchedUserText, setSearchedUserText] = useState('')

    const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchedUserText(e.currentTarget.value)
        dispatch(searchUserAC(searchedUserText))
    },[searchedUserText])

    const handleSearchUser = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(fetchUser(searchedUserText))
        }
    }, [searchedUserText])

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
                    value={searchedUserText}
                    onChange={handleOnChange}
                    onKeyPress={handleSearchUser}
                />
            </form>
        </nav>
    )
})
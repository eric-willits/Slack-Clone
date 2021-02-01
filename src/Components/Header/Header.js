import React from 'react'
import { ArrowBack, ArrowForward, Schedule, Search, HelpOutline} from '@material-ui/icons';
import './Header.css';
import { useStateValue } from '../../StateProvider';
import { useHistory } from 'react-router-dom';


export default function Header() {
    const [{user}] = useStateValue();
    const history = useHistory();

    return (
        <div className="header">
            <div className="header__left">
                <Schedule className="header__icon"/>
                <ArrowForward className="header__icon" onClick={() => history.goForward()}/>
                <ArrowBack className="header__icon" onClick={() => history.goBack()}/>
            </div>
            <div className="header__center">
                <Search />
                <input type="text" placeholder="search your slack" />
            </div>
            <div className="header__right">
                <HelpOutline className="header__icon"/>
                <img src={user?.photoURL} alt="profile" className="header__image"/>
            </div>
        </div>
    )
}

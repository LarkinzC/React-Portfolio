import './index.scss'
import {Link, NavLink } from 'react-router-dom'
import LetterL from '../../assets/images/LetterL.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faCodeFork  } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LetterL} alt='Logo' />
        </Link>
        <nav>
            <NavLink exact="true" className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" className={({ isActive }) => (isActive ? 'active' : 'inactive')} id='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" className={({ isActive }) => (isActive ? 'active' : 'inactive')} id='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank'
                rel='noreferrer'
                id='linkedin-link'
                href='https://www.linkedin.com/in/larkin-campbell/' >
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank'
                rel='noreferrer'
                id='github-link'
                href='https://github.com/LarkinzC/' >
                    <FontAwesomeIcon icon={faCodeFork} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
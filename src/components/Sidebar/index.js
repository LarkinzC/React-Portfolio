import './index.scss'
import {Link} from 'react-router-dom'
import LetterL from '../../assets/images/LetterL.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LetterL} alt='Logo' />
        </Link>
    </div>
)

export default Sidebar
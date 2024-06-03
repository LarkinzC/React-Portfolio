import LetterL from '../../assets/images/LetterL.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, <br /> I'm
                    <span className="name">
                        <img src={LetterL} alt='developer' />
                        arkin Campbell
                    </span>
                    <br />
                    Web Developer
                </h1>
                <h2>Frontend Developer / Javascript Expert / Pro DiscGolfer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home
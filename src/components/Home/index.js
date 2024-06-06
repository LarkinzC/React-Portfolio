
import { Link } from 'react-router-dom'
import './index.scss'
import {useState, useEffect, useRef} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['L', 'a', 'r', 'k', 'i', 'n', ' ', 'C', 'a', 'm', 'p', 'b', 'e', 'l', 'l']
    const jobArray = ['W', 'e','b',' ', 'D','e','v','e','l','o','p','e','r','.']

    

    useEffect(() => {
            const timer = setTimeout(() =>{
                setLetterClass('text-animate-hover')
            }, 4000)
            return () => clearTimeout(timer)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span id='m' className={`${letterClass} _14`}>'m</span> 
                        <AnimatedLetters letterClass={letterClass} 
                        strArray={nameArray} 
                        idx={15} />
                         <br />
                         <AnimatedLetters letterClass={letterClass} 
                        strArray={jobArray} 
                        idx={30} />
                </h1>
                <h2>Frontend Developer / Javascript Expert / Pro DiscGolfer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
}, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                    <p> I am an ambitious developer that's always eager to learn new libraries and flex my skills.
                        My greatest stregths include data structures and algorithims, React.js, and Tailwind! My 
                        favorite sources for software related inquiry are ThePrimeTime, JS Mastery, and Conner Ardman.
                    </p>
                    <p>I'm confident in my abilities to execute projects, display my ever evolving library expertise,
                        and have fun while making friends with anyone I cross paths with.
                    </p>
                    <p>
                        My time away from my computer include being a competitive disc golfer, quality time with my beautiful wife who practices 
                        clinical psychology, and gaming! Pretty busy hobbies considering I never leave my desk!
                    </p>
                
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faGitAlt} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faReact} color='#EC4D28' />
                </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}


export default About
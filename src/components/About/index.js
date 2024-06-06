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
                    <p>I'm a young, ambitious, and skilled developer looking for a role at an established
                        IT company with oppourtunity to work with the latest technologies along talented 
                        developers on diverse projects.
                    </p>
                    <p>I'm confident in my abilities to execute projects, display my complex data structure skills,
                        and have fun and make friends with anyone I cross paths with.
                    </p>
                    <p>
                       {` My time away from my computer include being a competitive disc golfer, time with my wife 
                        (insert 'mai waif' borat reference), and gaming! Pretty busy hobbies considering I never 
                        leave my computer!`}
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
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
}, [])

    return (
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
                <div className='face'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                </div>
                <div className='face'>
                    <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                </div>
                <div className='face'>
                    <FontAwesomeIcon icon={faCss3} color='#DD0031' />
                </div>
                <div className='face'>
                    <FontAwesomeIcon icon={faGitAlt} color='#DD0031' />
                </div>
                <div className='face'>
                    <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
                </div>
                <div className='face'>
                    <FontAwesomeIcon icon={faReact} color='#DD0031' />
                </div>
                </div>
            </div>
        </div>
    )
}


export default About
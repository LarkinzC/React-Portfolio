import './index.scss'
import PortfolioPic from '../../assets/images/PortfolioPic.jpg'
import { useRef} from 'react'

const Logo = () => {
    const bgRef = useRef()
    const solidRef = useRef()

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)

    //     gsap.timeline()
    //         .to(bgRef.current, {
    //             duration: 1,
    //             opacity: 1
    //         })
    // }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidRef}className='solid-logo' src={PortfolioPic} alt='Main-logo' />
            <svg
            width='559pt'
            height='897pt'
            version='1.0'
            viewBox='0 0 559 897'
            xmlns='http://www.w3.org/2000/svg'
            >
                <g
                className='svg-container'
                transform='translate(0 457) scale(.1 -.1)'
                fill='none'
                >
                </g>
            </svg>
        </div>
    )
}


export default Logo
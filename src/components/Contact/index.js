import './index.scss'
import {Loader} from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState, useRef  } from 'react'
import emailjs from '@emailjs/browser'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

emailjs.init('8cfxPdT4ZeOUBx2wR')

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
}, [])

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'service_175p18p',
            'template_5msfauj',
            refForm.current,
            '8cfxPdT4ZeOUBx2wR'
        )
        .then (() => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
    () => {
        alert('Failed to send the message, please try again!')
    })
}


    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                </h1>
                <p>
                    I am interested in any oppourtunities to aid fellow developers as 
                    well as myself - especially ambitious or large projects. However, if you have other 
                    requests or questions, don't hesitate to contact me using the form below.
                </p>
            <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input
                                placeholder='Subject' 
                                type='text' 
                                name='subject' 
                                required 
                                />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>
                                    
                                </textarea>
                            </li>
                            <li>
                                <button className='flat-button' type='submit'>Send</button>
                            </li>
                        </ul>
                    </form>
                </div>
             </div>
             <div className='info-map'>
                Larkin Campbell 
                <br />
                United States
                <br />
                Redding, California
                <br />
                <span>Larkincampbell24@gmail.com</span>
             </div>
             <div className='map-wrap'>
                <MapContainer center={[40.584890, -122.407700]} zoom={10}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                    <Marker position={[40.584890, -122.407700]}>
                        <Popup>This is where I live!</Popup>
                    </Marker>
                </MapContainer>
             </div>
        </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact
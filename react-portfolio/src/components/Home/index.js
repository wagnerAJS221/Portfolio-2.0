/* eslint-disable no-unused-vars */
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
import Logo from '../Home/Logo'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'l', 'e', 'x,', ' ', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}_12`}>i </span>
            <br />
            <span className={`${letterClass}_13`}>I</span>
            <span className={`${letterClass}_14`}>'m</span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              StrArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              StrArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            I am a Fullstack developer who focus mainly on the Frontend and
            React.js is the name of my game
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home

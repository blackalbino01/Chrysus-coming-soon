import React, { useState, useEffect } from 'react';
import logo from './assets/chrysus.svg';
import roadmap from './assets/Roadmap.png';
import crossBtn from './assets/CrossButton.png';
import twitter from './assets/Twitter.png';
import telegram from './assets/Telegram.png';
import discord from './assets/Discord.png';
import facebook from './assets/Facebook.png';
import gitlab from './assets/Gitlab.png';
import './App.css';
import CountdownTimer from "./helpers/countdownTimer";

function App() {
  const [timeLeft, setTimeLeft] = useState(CountdownTimer());

  useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(CountdownTimer());
		}, 1000);
		return () => clearTimeout(timer);
	}, [timeLeft]);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
            <span>Chrysus</span>
          </div>
          <div className='timer'>
            <div className='box'>
              <p>{timeLeft.days}</p>
              <span>Days</span>
            </div>
            <span className='column'>:</span>
            <div className='box'>
              <p>{timeLeft.hours}</p>
              <span>Hours</span>
            </div>
            <span>:</span>
            <div className='box'>
              <p>{timeLeft.minutes}</p>
              <span>Minutes</span>
            </div>
            <span>:</span>
            <div className='box'>
              <p>{timeLeft.seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
        </nav>
        <p className='header-title'>
          COMING SOON
        </p>
        <div className='header-text'>
          Chrysus – God of Gold as money, 100% trustless, decentralized, open source, 
          fungible, divisible, transactable in exchange, commerce and banking.
        </div>
        <div className='roadmap'>
          <p>Our Roadmap</p>
          <img src={roadmap} alt="roadmap" />
        </div>
        <ul className='socials'>
          <li>
            <a href="#">
              <img src={telegram} alt="roadmap" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={discord} alt="roadmap" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="roadmap" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="roadmap" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={telegram} alt="roadmap" />
            </a>
          </li>
        </ul>
      </header>
      <div className='footer'>
        <a href="#">Learn More</a>
        <img src={crossBtn} alt="roadmap" />
        </div>
    </div>
  );
}

export default App;

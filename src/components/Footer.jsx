import React from 'react';
import '../styles/Footer.css';
import telegramIcon from '../assets/telegram.svg';
import rutubeIcon from '../assets/rutube.svg';
import youtubeIcon from '../assets/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <strong>coolinaire</strong>
      <div className="social-icons">
        <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram Icon" />
        </a>
        <a href="https://https://rutube.ru/" target="_blank" rel="noopener noreferrer">
          <img src={rutubeIcon} alt="RuTube Icon" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube Icon" />
        </a>
      </div>
      <p>© 2025 coolinaire. Все права защищены.</p>
    </footer>
  );
};

export default Footer;

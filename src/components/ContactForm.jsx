import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <div className="contact-form-content">
          <h1 className="contact-form-title">Свяжитесь с нами!</h1>
        </div>
        <div className="contact-form-wrapper-right">
          <form className="contact-form rounded-form">
            <div className="form-row">
              <input type="text" placeholder="Имя" required className="rounded-input" />
              <input type="text" placeholder="Фамилия" required className="rounded-input" />
            </div>
            <input type="email" placeholder="E-mail" required className="rounded-input" />
            <textarea placeholder="Нашли ошибку или хотите добавить свой рецепт?" required className="rounded-textarea"></textarea>
            <button type="submit" className="submit-button">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

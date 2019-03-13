import * as React from "react";

export function EmailForm() {
  return (
    <form
      id="gform"
      method="POST"
      className="email-form"
      action="https://script.google.com/macros/s/AKfycbxQfhpomqQVoUY2PyWtRf4RraVC3ondqV6dwakqm5UAGFZ4BQU/exec"
    >
      <fieldset className="email-form__fieldset">
        <label htmlFor="name">Имя: </label>
        <input id="name" className="email-form__input" name="name" placeholder="" />
      </fieldset>

      <fieldset className="email-form__fieldset">
        <label htmlFor="message">Сообщение: </label>
        <textarea
          id="message"
          className="email-form__input
                                email-form__input--textarea"
          name="message"
          rows={10}
          placeholder=""
        />
      </fieldset>

      <fieldset className="email-form__fieldset">
        <label htmlFor="email"> Ваш email:</label>
        <input
          id="email"
          className="email-form__input"
          name="email"
          type="email"
          defaultValue=""
          required={true}
          placeholder=""
        />
        <span id="email-invalid" className="email-form__input--invalid">
          Некорректный email адрес!
        </span>
      </fieldset>

      <fieldset className="email-form__fieldset">
        <button className="email-form__submit">
          <i className="fa fa-paper-plane" />
          &nbsp;Отправить сообщение
        </button>
      </fieldset>

      <div className="email-form__thankyou-message">
        <p>Спасибо! Ваше сообщение отправлено. Мы ответим Вам в ближайшее время!</p>
      </div>
    </form>
  );
}

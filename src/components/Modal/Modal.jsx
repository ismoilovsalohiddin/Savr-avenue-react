import cls from './styles.module.scss';
const Modal = () => {
  return (
    <div className={cls.modal}>
      <div className={cls.modal__content}>
        <form action="#" className={cls.modal__form}>
          <p className={cls.modal__form_title}>Получите бесплатную консультацию</p>
          <p className={cls.modal__form_text}>
            Заполните форму и получите консультацию
          </p>
          <input
            required
            type="text"
            name="modal-user_name"
            id="modal-user_name"
            className={cls.modal__form_input}
            placeholder="Ваше имя"
          />
          <input
            required
            type="text"
            name="modal-user_phone"
            id="modal-user_phone"
            className={cls.modal__form_input}
            placeholder="Номер телефона"
          />
          <button type="submit" className={cls.modal__form_btn}>
            Получить консультацию
          </button>
        </form>
        <div className={cls.modal__confirm}>
          <p className={cls.modal__confirm_title}>Заявка отправлена</p>
          <img className={cls.modal__confirm_img} src="img/Confirm_img.svg" alt="img" />
          <p className={cls.modal__confirm_text}>В ближайщее время наши операторы свяжутся с вами</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

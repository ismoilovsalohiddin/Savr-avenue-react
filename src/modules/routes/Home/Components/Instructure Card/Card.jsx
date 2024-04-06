import cls from './styles.module.scss';
const Card = ({ card_img, card_title, card_text }) => {
  return (
    <>
      <div className={cls.instructure__card}>
        <img src={card_img} alt="img" className={cls.instructure__img} />
        <div className={cls.instructure__content}>
          <p className={cls.instructure__title}>{card_title}</p>
          <p className={cls.instructure__text}>{card_text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

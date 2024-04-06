import cls from './styles.module.scss';
const AdvantagesCard = ({ img, text }) => {
  return (
    <div className={cls.advantages__card}>
      <div className={cls.advantages__item_content}>
        <img className={cls.advantages__item_img} src={img} alt="icon" width="100" height="100" />
        <p className={cls.advantages__item_text}>{text}</p>
      </div>
    </div>
  );
};

export default AdvantagesCard;

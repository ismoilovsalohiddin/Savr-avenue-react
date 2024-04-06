import cls from './styles.module.scss';
const PlaningCard = ({ img, cabinet, store, square }) => {
  return (
    <div className={cls.planing__card}>
      <img className={cls.planing__img} src={img} alt="img" width="180" height="210" />
      <ul className={cls.planing__info}>
        <li className={cls.planing__info_item}>
          <p className={cls.planing__info_text}>{cabinet}</p>
          <p className={cls.planing__info_parag}>Комнат</p>
        </li>
        <li className={cls.planing__info_item}>
          <p className={cls.planing__info_text}>{store}</p>
          <p className={cls.planing__info_parag}>Этаж</p>
        </li>
        <li className={cls.planing__info_item}>
          <p className={cls.planing__info_text}>{square}</p>
          <p className={cls.planing__info_parag}>Площадь м²</p>
        </li>
      </ul>
    </div>
  );
};

export default PlaningCard;

import cls from './styles.module.scss';
import HeaderLogo from 'assets/img/Logo.svg';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <header className={cls.header}>
      <Container>
        <div className={cls.header__content}>
          <Link to="/" className={cls.header__logo}>
            <img src={HeaderLogo} alt="Logo" />
          </Link>
          <nav className={cls.header__nav}>
            <ul className={cls.header__list}>
              <li className={cls.header__item}>
                <Link to="/main" className={cls.header__link}>
                  Главная
                </Link>
              </li>
              <li className={cls.header__item}>
                <Link to="/about" className={cls.header__link}>
                  О нас
                </Link>
              </li>
              <li className={cls.header__item}>
                <Link to="/document" className={cls.header__link}>
                  Документы
                </Link>
              </li>
              <li className={cls.header__item}>
                <Link to="/presentation" className={cls.header__link}>
                  Презентация
                </Link>
              </li>
              <li className={cls.header__item}>
                <Link to="/contact" className={cls.header__link}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <button type="button" className={cls.header__btn}>
            Связаться с нами <PhoneIcon width={'20px'} height={'20px'} color="#09301d" className={cls.header__phone} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;

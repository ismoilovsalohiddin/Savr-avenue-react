import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Container from 'components/Container/Container';
import cls from './styles.module.scss';
import Header from 'components/Header/Header';
import S from 'assets/img/S.svg';
import A from 'assets/img/A.svg';
import V from 'assets/img/V.svg';
import R from 'assets/img/R.svg';
import U from 'assets/img/U.svg';
import E from 'assets/img/E.svg';
import N from 'assets/img/N.svg';
import Business from 'assets/img/instructure_img.png';
import GymImg from 'assets/img/traning.png';
import Parking from 'assets/img/parking-img.png';
import Children from 'assets/img/kinder-garden.png';
import SavrAvenueMobile from 'assets/img/savr_mini.png';
import ArrowRight from 'assets/img/arrow-narrow-right.svg';
import Card from './Components/Instructure Card/Card';
import AdvantagesCard from './Components/AdvantagesCard/AdvantagesCard';
import Branch from 'assets/img/branch.svg';
import Pet from 'assets/img/pets.svg';
import Fountain from 'assets/img/fountain.svg';
import Garden from 'assets/img/garden.svg';
import Playground from 'assets/img/playground.svg';
import parkingIcon from 'assets/img/parking.svg';
import Skate from 'assets/img/skate.svg';
import Ball from 'assets/img/ball.svg';
import Training from 'assets/img/train_station.svg';
import Catalog01 from 'assets/img/hero_back.png';
import Catalog02 from 'assets/img/CatalogSavr-02.png';
import Catalog03 from 'assets/img/CatalogSavr-03.png';
import Catalog04 from 'assets/img/CatalogSavr-04.png';
import Catalog05 from 'assets/img/CatalogSavr-05.png';
import PlaningCard from './Components/PlaningCard/PlaningCard';
import PlaningImg from 'assets/img/planing_img.png';
import ArrowLeft from 'assets/img/arrow-narrow-left.svg';
import ArrowUp from 'assets/img/arrow-narrow-up.svg';
import Walking from 'assets/img/walking.svg';
import Car from 'assets/img/car.svg';
import Map from 'assets/img/map.png';
import Facebook from 'assets/img/facebook_icon.svg';
import Instagram from 'assets/img/insta_icon.svg';
import Telegram from 'assets/img/telegram_icon.svg';
import FooterLogoWep from 'assets/img/footer_logo.png';
import FooterLogoMobile from 'assets/img/savr-logo-black.png';
import useHomeProps from './useHomeProps';
const Home = () => {
  const { handleFooterArrowClick } = useHomeProps();
  return (
    <>
      <Header />
      <article className={cls.hero}>
        <Container>
          <div className={cls.hero__content}>
            <h1 className={cls.hero__title}>
              <img src={SavrAvenueMobile} alt="img" className={cls.hero__mini_img} />
              <div className={cls.hero__img_savr_avenue}>
                <div className={cls.hero__img_savr}>
                  <img className={cls.hero_img} src={S} alt="s" width="125" height="181" />
                  <img className={clsx(cls.hero_img, cls.hero__img_a)} src={A} alt="a" width="160" height="175" />
                  <img className={cls.hero_img} src={V} alt="v" width="153" height="170" />
                  <img className={cls.hero_img} src={R} alt="r" width="137" height="173" />
                </div>
                <div className={cls.hero__img_avenue}>
                  <img className={clsx(cls.hero_img, cls.hero__img_a)} src={A} alt="a" width="155" height="175" />
                  <img className={cls.hero_img} src={V} alt="v" width="153" height="175" />
                  <img className={cls.hero_img} src={E} alt="e" width="108" height="175" />
                  <img className={cls.hero_img} src={N} alt="n" width="147" height="181" />
                  <img className={cls.hero_img} src={U} alt="u" width="132" height="178" />
                  <img className={cls.hero_img} src={E} alt="e" width="108" height="175" />
                </div>
              </div>
            </h1>
            <div className={cls.hero__link_wrap}>
              <Link to="/details" className={cls.hero__link}>
                Выбрать квартиру
              </Link>
              <div className={cls.hero__arrow}>
                <img className={cls.hero__arrow_white} src={ArrowRight} alt="icon" />
                <img className={cls.hero__arrow_black} src={ArrowRight} alt="icon" />
              </div>
            </div>
          </div>
        </Container>
      </article>
      <article className={cls.instructure}>
        <Container>
          <div className={cls.instructure__content}>
            <h2 className={cls.instructure__title}>Инфраструктура</h2>
            <ul className={cls.instructure__list}>
              <li className={cls.instructure__item}>
                <Card
                  card_title={'Бизнес центр'}
                  card_img={Business}
                  card_text={
                    'Отличное местоположение, впечатляющий вид и развитая инфраструктура - это лишь малая часть достоинствкомплекса. Одним из самых важных преимуществ является то, что прямо в комплексе Savr Avenue расположенсовременный спортивный клуб.'
                  }
                />
              </li>
              <li className={cls.instructure__item}>
                <Card
                  card_title={'Спортивный клуб'}
                  card_img={GymImg}
                  card_text={
                    'Отличное местоположение, впечатляющий вид и развитая инфраструктура - это лишь малая часть достоинствкомплекса. Одним из самых важных преимуществ является то, что прямо в комплексе Savr Avenue расположенсовременный спортивный клуб.'
                  }
                />
              </li>
              <li className={cls.instructure__item}>
                <Card
                  card_title={'Детские сады'}
                  card_img={Children}
                  card_text={
                    'Отличное местоположение, впечатляющий вид и развитая инфраструктура - это лишь малая часть достоинствкомплекса. Одним из самых важных преимуществ является то, что прямо в комплексе Savr Avenue расположенсовременный спортивный клуб.'
                  }
                />
              </li>
              <li className={cls.instructure__item}>
                <Card
                  card_title={'Подземный паркинг'}
                  card_img={Parking}
                  card_text={
                    'Отличное местоположение, впечатляющий вид и развитая инфраструктура - это лишь малая часть достоинствкомплекса. Одним из самых важных преимуществ является то, что прямо в комплексе Savr Avenue расположенсовременный спортивный клуб.'
                  }
                />
              </li>
            </ul>
          </div>
        </Container>
      </article>
      <article className={cls.advantages}>
        <Container>
          <div className={cls.advantages__content}>
            <h2 className={cls.advantages__title}>Преимущества</h2>
            <ul className={cls.advantages__list}>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Playground} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Fountain} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Garden} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Branch} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Pet} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={parkingIcon} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Skate} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Training} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
              <li className={cls.advantages__item}>
                <AdvantagesCard img={Ball} text={'4 вида детских площадок для детей разного возраста'} />
              </li>
            </ul>
          </div>
        </Container>
      </article>
      <article className={cls.about__project}>
        <Container>
          <div className={cls.about__content}>
            <h2 className={cls.about__title}>О проекте</h2>
            <div className={cls.about__text}>
              <p className={cls.about__parag}>
                Savr Avenue- это многофункциональный комплекс, сочетающийв себе жилую недвижимость, бизнес-центр, отель,
                коммерческиеплощади и всё, что нужно для комфортной жизни его резидентов.Комплекс расположен на одной из
                самых оживлённых улиц столицы. Savr Avenue - это решение для тех, кто бережно относится к своемувремени,
                ведь, приобретая апартаменты, можно также купить илиарендовать офисное пространство удобного для вас
                размера. Темсамым сэкономив время, проводимое в дорогах и пробках, исохраняя всё самое важное у вас «под
                рукой»
              </p>
              <p className={cls.about__parag}>
                Здесь продуманы не только аспекты комфортаи безопасности жильцов, но и то, насколькорезиденты смогут
                найти всё, что им нужно дляполноценной жизни на территории квартала.Словно город внутри города, в Savr
                Avenue будутсвои площадки для активного отдыха, целаяроссыпь коммерческих объектов - супермаркеты,салоны
                красоты, бутики, хозяйственныемагазины, аптеки, кафе и многие другое.Давайте я расскажу вам обо всём
                поподробнее.
              </p>
            </div>
          </div>
        </Container>
        <div className={cls.about__project__img}>
          <span className={cls.about__project__ellipse_top}></span>
          <ul className={cls.about__project__img_list}>
            <li className={cls.about__project_item}>
              <img className={cls.about__project__img_catalog} src={Catalog01} alt="img" width="850" height="600" />
            </li>
            <li className={cls.about__project_item}>
              <img className={cls.about__project__img_catalog} src={Catalog02} alt="img" width="850" height="600" />
            </li>
            <li className={cls.about__project_item}>
              <img className={cls.about__project__img_catalog} src={Catalog03} alt="img" width="850" height="600" />
            </li>
            <li className={cls.about__project_item}>
              <img className={cls.about__project__img_catalog} src={Catalog04} alt="img" width="850" height="600" />
            </li>
            <li className={cls.about__project_item}>
              <img className={cls.about__project__img_catalog} src={Catalog05} alt="img" width="850" height="600" />
            </li>
          </ul>
          <span className={cls.about__project__ellipse_bottom}></span>
        </div>
      </article>
      <article className={cls.planing}>
        <Container>
          <div className={cls.planing__content}>
            <h2 className={cls.planing__title}>Планировка</h2>
            <ul className={cls.planing__types__list}>
              <li className={clsx(cls.planing__types__item, cls.planing__types__item_1)}>
                <p className={cls.planing__types__text}>Однокомнатные</p>
              </li>
              <li className={clsx(cls.planing__types__item, cls.planing__types__item_2)}>
                <p className={cls.planing__types__text}>Двухкомнатные</p>
                <span className={cls.two_room}></span>
              </li>
              <li className={clsx(cls.planing__types__item, cls.planing__types__item_3)}>
                <p className={cls.planing__types__text}>Трехкомнатные</p>
                <span className={cls.two_room}></span>
                <span className={cls.three_room}></span>
              </li>
            </ul>
            <div className={cls.planing__cards}>
              <ul className={cls.planing__cards__list} id="cards__list">
                <li className={cls.planing__cards__item}>
                  <PlaningCard img={PlaningImg} cabinet="1" store="3" square="40 м²" />
                </li>
                <li className={cls.planing__cards__item}>
                  <PlaningCard img={PlaningImg} cabinet="2" store="1" square="40 м²" />
                </li>
                <li className={cls.planing__cards__item}>
                  <PlaningCard img={PlaningImg} cabinet="3" store="3" square="45 м²" />
                </li>
                <li className={cls.planing__cards__item}>
                  <PlaningCard img={PlaningImg} cabinet="3" store="3" square="40 м²" />
                </li>
                <li className={cls.planing__cards__item}>
                  <PlaningCard img={PlaningImg} cabinet="2" store="3" square="10 м²" />
                </li>
                <li className={cls.planing__cards__item}>
                  <PlaningCard img={PlaningImg} cabinet="1" store="3" square="40 м²" />
                </li>
              </ul>
              <div className={cls.planing__btns}>
                <button className={clsx(cls.planing__btn, cls.planing__btn_prev)} id="slide-arrow-prev">
                  <img src={ArrowLeft} alt="icon" width="32" height="32" />
                </button>
                <button className={clsx(cls.planing__btn, cls.planing__btn_next)} id="slide-arrow-next">
                  <img src={ArrowRight} alt="icon" width="32" height="32" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <article className={cls.location}>
        <Container>
          <div className={cls.location__content}>
            <h2 className={cls.location__title}>Локация</h2>
            <p className={cls.location__text}>
              Здесь продуманы не только аспекты комфортаи безопасности жильцов, но и то, насколькорезиденты смогут найти
              всё, что им нужно дляполноценной жизни на территории квартала.Словно город внутри города, в Savr Avenue
              будутсвои площадки для активного отдыха, целаяроссыпь коммерческих объектов - супермаркеты,салоны красоты,
              бутики, хозяйственныемагазины, аптеки, кафе и многие другое.Давайте я расскажу вам обо всём поподробнее.
            </p>
            <div className={cls.location__map_wrap}>
              <div className={cls.location__about}>
                <div className={cls.location__onfoot}>
                  <h3 className={cls.location__onfoot_title}>
                    <img src={Walking} alt="icon" />
                    Заведения в пешей доступности
                  </h3>
                  <dl className={cls.location__onfoot_info}>
                    <dt className={cls.location__onfoot_dt}>Школа</dt>
                    <dd className={cls.location__onfoot_dd}>. - 5 минут ходьбы</dd>
                    <dt className={cls.location__onfoot_dt}>Поликлиника</dt>
                    <dd className={cls.location__onfoot_dd}>. - 5 минут ходьбы</dd>
                    <dt className={cls.location__onfoot_dt}>Супермаркет</dt>
                    <dd className={cls.location__onfoot_dd}>. - 5 минут ходьбы</dd>
                    <dt className={cls.location__onfoot_dt}>Метро</dt>
                    <dd className={cls.location__onfoot_dd}>. - 5 минут ходьбы</dd>
                    <dt className={cls.location__onfoot_dt}>Парк</dt>
                    <dd className={cls.location__onfoot_dd}>. - 5 минут ходьбы</dd>
                  </dl>
                </div>
                <div className={cls.location__oncar}>
                  <h3 className={cls.location__oncar_title}>
                    <img src={Car} alt="icon" />
                    На Машине
                  </h3>
                  <dl className={cls.location__oncar_info}>
                    <dt className={cls.location__oncar_dt}>Школа</dt>
                    <dd className={cls.location__oncar_dd}>. - 5 минут езды</dd>
                    <dt className={cls.location__oncar_dt}>Поликлиника</dt>
                    <dd className={cls.location__oncar_dd}>. - 5 минут езды</dd>
                    <dt className={cls.location__oncar_dt}>Супермаркет</dt>
                    <dd className={cls.location__oncar_dd}>. - 5 минут езды</dd>
                    <dt className={cls.location__oncar_dt}>Метро</dt>
                    <dd className={cls.location__oncar_dd}>. - 5 минут езды</dd>
                    <dt className={cls.location__oncar_dt}>Парк</dt>
                    <dd className={cls.location__oncar_dd}>. - 5 минут езды</dd>
                  </dl>
                </div>
              </div>
              <div className={cls.location__map}>
                <a href="https://www.google.com/maps/place/Beruniy/@41.3446945,69.1649759,13z/data=!4m6!3m5!1s0x38ae8c10cd58b901:0x42835c8e24a158e5!8m2!3d41.344694!4d69.206178!16s%2Fm%2F0jwz14p?hl=es&entry=ttu">
                  <img src={Map} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <footer className={cls.footer}>
        <div className={cls.footer__content}>
          <Container>
            <div className={cls.footer__get_consulting}>
              <img className={cls.footer__logo_mobile} src={FooterLogoMobile} alt="" />
              <img className={cls.footer__logo_web} src={FooterLogoWep} alt="logo" width="500" height="342" />
              <form action="#" className={cls.footer__form}>
                <p className={cls.footer__form_title}>Получите бесплатную консультацию</p>
                <p className={cls.footer__form_text}>Заполните форму и получите консультацию</p>
                <input
                  required
                  type="text"
                  name="user_name"
                  id="user_name"
                  className={cls.footer__form_input}
                  placeholder="Ваше имя"
                />
                <input
                  required
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  className={cls.footer__form_input}
                  placeholder="Номер телефона"
                />
                <button type="submit" className={cls.footer__form_btn}>
                  Получить консультацию
                </button>
              </form>
            </div>
            <div className={cls.footer__link_wrap}>
              <nav className={cls.footer__nav}>
                <ul className={cls.footer__nav_list}>
                  <li className={cls.footer__nav_item}>
                    <Link to={'/info'} className={cls.footer__nav_link}>
                      Информация
                    </Link>
                  </li>
                  <li className={cls.footer__nav_item}>
                    <Link to={'/about'} className={cls.footer__nav_link}>
                      О нас
                    </Link>
                  </li>
                  <li className={cls.footer__nav_item}>
                    <Link to={'/docs'} className={cls.footer__nav_link}>
                      Документы
                    </Link>
                  </li>
                  <li className={cls.footer__nav_item}>
                    <Link to={'/presentation'} className={cls.footer__nav_link}>
                      Презентация
                    </Link>
                  </li>
                  <li className={cls.footer__nav_item}>
                    <Link to={'/plans'} className={cls.footer__nav_link}>
                      Планировки
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className={cls.footer__contacts_wrap}>
                <div className={cls.footer__contacts}>
                  <p className={cls.footer__contacts_title}>Контакты</p>
                  <div className={cls.footer__contacts_numbers}>
                    <p className={cls.footer__contacts_number}>+998 99 089 00 00</p>
                    <p className={cls.footer__contacts_number}>+998 90 316 33 30</p>
                  </div>
                  <div className={cls.footer__contacts_social}>
                    <Link to={''}>
                      <img src={Facebook} alt="icon" />
                    </Link>
                    <Link to={''}>
                      <img src={Instagram} alt="icon" />
                    </Link>
                    <Link to={''}>
                      <img src={Telegram} alt="icon" />
                    </Link>
                  </div>
                </div>
                <div className={cls.footer__address}>
                  <p className={cls.footer__address_title}>Наш Адрес</p>
                  <a
                    className={cls.footer__address_link}
                    href="https://www.google.com/maps/place/Rovd+Mirabadskogo+R-Na,+Abdurauf+Fitrat+Street+180,+Tashkent,+Toshkent+Shahri,+Uzbekist%C3%A1n/@41.273006,69.2830949,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8aab12513897:0x3b19f1dde7c8f9f0!8m2!3d41.273002!4d69.2856698!16s%2Fg%2F11vjlsbjpw?hl=es&entry=ttu"
                  >
                    Мирабадский район, улица Абдурауфа Фитрата, 180Б
                  </a>
                </div>
              </div>
              <div onClick={handleFooterArrowClick} className={cls.footer__arrow}>
                <div className={cls.footer__arrow_wrap}>
                  <img src={ArrowUp} alt="icon" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Home;

import BannerIlustration from "../../assets/BannerFood.png";
import styles from './style.module.css';


export const BannerSection = () => {
  return (
    <section className={`${styles.bannerSection} section-padding `}>
      <div className="container">
        <div className={styles.flexBox}>
          <div>
          <h1 className="title black lg">
            Descubra o melhor <span className="red">aplicativo de comida</span>
          </h1>
          <p className="paragraph black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies,
            non imperdiet erat elementum.
          </p>
          <a href="#" className="btn red">
            Saiba Mais
          </a>
        </div>

        <img src={BannerIlustration} alt="Comidas Gostosas" />
        </div>
      </div>
    </section>
  );
};

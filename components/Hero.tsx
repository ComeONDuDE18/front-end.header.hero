import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.hero}>
        <div className={css.content}>
            <h1 className={css.title}>Відкрийте світ подорожей з нами!</h1>
            <p className={css.subtittle}>
                Приєднуйтесь до нашої спільноти мандрівників, де ви зможете ділитися своїми історіями та отримувати натхнення для нових пригод. Відкрийте для себе нові місця та знайдіть однодумців!</p>
            </div>
            <a href="#aboutus" className={css.moreButton}>Докладніше</a>
    </section>
  );
};

export default Hero;
import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/Profile.jpeg"
          alt="An image showing Lawrence"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I'm Lawrence</h1>
      <p>
        I blog about web development - especially frontend frameworks like Next
        or React.
      </p>
    </section>
  );
}

export default Hero;

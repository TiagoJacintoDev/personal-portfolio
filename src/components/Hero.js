import HeroImage from '../images/hero-image.svg';

export default function Hero() {
  return (
    <section className='hero'>
      <div>
        <h1 className='hero-title'>
          Hi I'm Tiago | Frontend <span>Developer</span>
        </h1>
        <p className='paragraph'>
          I love creating and exploring 🚀 I'm a life long learner 🎓 and I love
          running 🏃‍♂️
        </p>
      </div>
      <img src={HeroImage}></img>
    </section>
  );
}

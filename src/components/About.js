export default function About() {
  return (
    <section className='about | container'>
      <h1 className='section-title'>
        About <span>Me</span>
      </h1>
      <img src='https://dummyimage.com/300x400.gif' alt='' />

      <div className='paragraph'>
        <h2 className='sub-title'>I love building stuff 📱</h2>
        <br />
        <p>
          I'm a self-taught front-end developer from Portugal. I enjoy turning
          complex problems into simple and intuitive solutions. Most of my
          projects are done with React.js. A framework that I love because it
          plays to my strengths: Planning and organizing
        </p>
        <br />
        <p>
          Aside from that, I'm also an avid reader. When I'm not coding, you'll
          probably find me reading something on my Kindle or tinkering with my
          computer.
        </p>
      </div>
    </section>
  );
}

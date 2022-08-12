export default function About() {
  return (
    <section className='about | container' id='about'>
      <h1 className='section-title'>About Me</h1>
      <div className='about-grid'>
        <img src='https://dummyimage.com/300x400.gif' alt='' />

        <div className='paragraph'>
          <h2 className='sub-title'>I love building stuff 📱</h2>
          <br />
          <p>
            I'm a self-taught front-end developer from Portugal. I enjoy turning
            complex problems into simple and intuitive solutions. Most of my
            projects are done with React.js. A framework that I love because it
            plays to my strengths: Planning and Organizing
          </p>
          <br />
          <p>
            Aside from that, I love to do sports. I was a triathlon athlete for
            6 years and currently what I do most is running.
          </p>
        </div>
      </div>
    </section>
  );
}

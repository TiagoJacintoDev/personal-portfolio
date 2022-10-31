import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <div className="contact | container" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-flex">
        <div>
          <h1 className="sub-title">Get In Touch</h1>

          <form
            className="paragraph"
            action="https://formspree.io/f/meqdqagd"
            method="POST"
          >
            <input required type="text" name="name" placeholder="Name:" />
            <input required type="email" name="email" placeholder="Email:" />
            <textarea required name="message" placeholder="Message:" />
            <button className="button">Send Email</button>
          </form>
        </div>
        <div className="contact-socials">
          <h2 className="paragraph">Write me an e-mail at:</h2>
          <a className="sub-title" href="mailto:tiagojacintodev@gmail.com">
            tiagojacintodev@gmail.com
          </a>
          <br />
          <h2 className="paragraph">OR</h2>
          <br />
          <h2 className="paragraph">Reach me through social media:</h2>
          <div className="center">
            <a
              href="https://www.linkedin.com/in/tiagojacintodev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiLinkedin size={50} />
            </a>
            <a
              href="https://github.com/TiagoJacintoDev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiGithub size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-scroll';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav() {
  const [navListHidden, setListHidden] = useState('hidden');

  function updateList() {
    navListHidden === 'hidden' && setListHidden('visible');
    navListHidden === 'visible' && setListHidden('hidden');
  }
  return (
    <nav>
      <Link href='/' className='fs-paragraph nav-logo ff-paragraph fw-bold'>
        Tiago Jacinto
      </Link>
      <ul className='nav-list' data-hidden={navListHidden}>
        <li>
          <Link to='about' spy={true} smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li>
          <Link to='skills' spy={true} smooth={true} duration={500}>
            skills
          </Link>
        </li>
        <li>
          <Link to='projects' spy={true} smooth={true} duration={500}>
            projects
          </Link>
        </li>
        <li>
          <Link to='contact' spy={true} smooth={true} duration={500}>
            contact
          </Link>
        </li>
      </ul>
      <div className='hamburger-menu' onClick={updateList}>
        <GiHamburgerMenu size={32} />
      </div>
    </nav>
  );
}

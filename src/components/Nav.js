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
      <a href='/' className='fs-paragraph nav-logo ff-paragraph fw-bold'>
        Tiago Jacinto
      </a>
      <ul className='nav-list' data-hidden={navListHidden}>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>skills</a>
        </li>
        <li>
          <a href='#'>projects</a>
        </li>
        <li>
          <a href='#'>contact</a>
        </li>
      </ul>
      <div className='hamburger-menu' onClick={updateList}>
        <GiHamburgerMenu size={32} />
      </div>
    </nav>
  );
}

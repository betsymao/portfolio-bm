// libraries
import { Link } from 'react-router-dom';

// assets
import Logo from '../../assets/img/logo.svg';

function Header() {
  return (
    <>
      <header>

        <div>
          <Link to="/">
            <img src={Logo} alt="Logo icon" />
          </Link>
        </div>

        <nav>
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
            
          </ul>
        </nav>

      </header>
    </>
  );
}

export default Header;
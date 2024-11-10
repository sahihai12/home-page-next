import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
const Header = () => (
  <header>
    <div class="nav-wrapper">
      <div class="logo-container">
        <Image src={'/images/logo.png'} width={26} height={26}/>
        <h2 className='logo'>My Logo</h2>
      </div>
      <div className='desk-hide'><SearchBar /></div>
      <nav>
        <input class="hidden" type="checkbox" id="menuToggle" />
        <label class="menu-btn" for="menuToggle">
          <div class="menu"></div>
          <div class="menu"></div>
          <div class="menu"></div>
        </label>
        <div class="nav-container">
          <ul class="nav-tabs">
            <li class="nav-tab"><Link href='/'>Home</Link></li>
            <li class="nav-tab"><Link href='https://sahihai12.github.io/portfolio/'>Portfolio</Link></li>
            <li class="nav-tab"><Link href='https://github.com/sahihai12'>Github</Link></li>
            <li class="nav-tab"><Link href='https://tech-stack-sahihai12.netlify.app/'>My Website</Link></li>
            <li class="nav-tab search-icon"><SearchBar /></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

);

export default Header;

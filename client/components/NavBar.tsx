import blogLog from '../images/blog-log.png'

const NavBar = () => {
  return (
    <nav>
      <div className="line"></div>
      <a href="/">
        <img id="home" src={blogLog} alt="number1" />
      </a>
      <ul>
        <li>
          <a href="/#about">About</a>
        </li>
        <li className="show">
          <a href="/#skills">Skill</a>
        </li>
        <li className="show">
          <a href="/#projects">Project</a>
        </li>
        <li className="show">
          <a href="/#references">Reference</a>
        </li>
        <li className="show">
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

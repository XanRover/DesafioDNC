import styles from './Linksnav.module.css'

function Linksnav() {
  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`${styles.links} navbar-nav`}>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#presentation">
                Tecnologias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                Sobre mim
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </div>
    </nav>
  );
}

export default Linksnav;

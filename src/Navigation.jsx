import './style.css'
// import '../node_modules/bootstrap-icons/icons/list'
export default function Navigation(props){
    const items = props.navi;

    return (
        <div className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" style={{ color: "white" }} href="#">Esigned</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span>
                {/* <i class="bi bi-list" ></i> */}
                <i class="bi bi-list-check" style={{color:"white"}}></i>
                </span>
              </button>
              <div className="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
              <ul className="navbar-nav mx-auto ps-5" style={{ listStyle: "disc" }}>
                    <li className="nav-item ms-5">
                    <a href="#" className="nav-link">{items[0]}</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a href="#" className="nav-link">{items[1]}</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a href="#" className="nav-link">{items[2]}</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a href="#" className="nav-link">{items[3]}</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a href="#" className="nav-link">{items[4]}</a>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}
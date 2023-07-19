import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">

        <div className="container-fluid">
            <Link className="navbar-brand" href="#">
                <img src="../MUCS.png" alt="MUCS logo" width="35" height="35" className="image-fluid" />
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href="/Terms">Terms of Use</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Privacy">Privacy and Cookie Policy</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact Us</Link>
                </li>
            </ul>
        </div>
        </nav>
    </>
  )
};

export default Footer;
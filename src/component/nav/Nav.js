import './Nav.css'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="menu">
            <div className="img">
                <img width="100%" src="./img/logo.png"></img>
            </div>
            <ul className="nav">
                <li><a href="#">chương trình đào tạo</a>
                    <i className="fas fa-angle-down"></i>
                </li>
                <li><a href="#">về chúng tôi</a>
                    <i className="fas fa-angle-down"></i>
                </li>
                <li><a href="#">liên thông</a></li>
                <li><a href="#">blog</a></li>
                <li><Link to={'/contact'}>liên hệ</Link></li>
                
            </ul>
            <div className="tuvanngay">
                <i className="fas fa-envelope"></i>
                <p>tư vấn ngay</p>
            </div>
        </div>
    )
}
export default Nav;
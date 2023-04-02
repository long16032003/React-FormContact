import "./TopMenu.css"

function TopMenu() {
    return (
        <div className="top-menu">
            <div className="title hotline">
                <i className="fas fa-phone"></i>
                <p>Hotline: 0961636085</p>
            </div>
            <div className="title address">
                <i className="fas fa-location-dot"></i>
                <p>Đ/c: Tầng 1, Tòa nhà C5, Đại học Thủy Lợi, 175 Tây Sơn, Đống Đa, Hà Nội</p>
            </div>
            <div className="title icon">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-messenger"></i>

            </div>
        </div>
    )
}
export default TopMenu;

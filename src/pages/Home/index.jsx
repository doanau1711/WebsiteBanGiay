import './Home.css'; // Import file CSS để thiết lập kiểu cho component Home
const Home = () => {
  return (
    <div className="main-container">
      <div className="title-container">
        <img
          src="https://drake.vn/image/catalog/H%C3%ACnh%20content/Giay-Vans-chinh-hang-TPHCM/giay-vans-chinh-hang-tphcm-10.jpg"
          alt="Cửa hàng mũ nón Sơn"
          className="full-screen-image"
        />
      </div>
      <footer className="footer">
        <div className="footer-content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8789/8789822.png"
            alt="avatar mũ nón Sơn"
          />
          <h1>App bán giày</h1>
          <div className="about-us">
            <h1>About Us</h1>
            <p>
              Một trang web bán giày là nền tảng trực tuyến để mua các loại giày <br /> khác nhau, từ giày thể thao đến giày
              đi chơi và phụ kiện liên quan.
            </p>
          </div>
          <div className="follow-us">
            <h1>Follow Us</h1>
            <img
              src="https://cdn.pixabay.com/photo/2020/06/30/14/37/facebook-5356593_1280.png"
              alt="Social Media Icon"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

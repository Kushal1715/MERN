import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="list">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

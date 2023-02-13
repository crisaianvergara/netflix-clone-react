import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <input type="checkbox" id="check"></input>
        <label for="check" class="check-btn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div class="nav-brand">
          <img src={"./netflix-logo.png"} alt="Netflix Logo" />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tv-shows">TV Shows</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/new-popular">New & Popular</a>
          </li>
          <li>
            <a href="/my-list">My List</a>
          </li>
          <li>
            <a href="/languages">Browse by Languages</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import { SearchInput } from "../Inputs";
import { DefaultDropdown } from "../Dropdowns";
import { DefaultLink } from "../Links";

export default function Navbar(params) {
  // const MobileMenu = () => (

  // )
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <DefaultLink href="/" className="navbar-brand">
          Navbar
        </DefaultLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <DefaultLink href="/settings" className="nav-link">
                Settings
              </DefaultLink>
            </li>
            <li className="nav-item">
              <DefaultLink href="/profile" className="nav-link">
                Profile
              </DefaultLink>
            </li>
            <li className="nav-item dropdown">
              <DefaultDropdown />
            </li>
          </ul>
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}

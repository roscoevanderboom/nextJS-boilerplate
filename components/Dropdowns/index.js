import { DefaultLink } from "../Links";
export function DefaultDropdown(params) {
  return (
    <>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <DefaultLink href="/profile" className="dropdown-item">
            Profile
          </DefaultLink>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <DefaultLink href="/settings" className="dropdown-item">
            Settings
          </DefaultLink>
        </li>
      </ul>
    </>
  );
}

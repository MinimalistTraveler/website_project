import Link from "next/link";
import Media from "react-media";
import styles from "../../CSS/navbar.styl";
import classNames from "classnames";
import { useState } from "react";

function Navbar() {
  const [state, setState] = useState({
    active: false
  });
  const toggleNav = () => setState({ active: !state.active });
  return (
    <Media query="(min-width: 968px)">
      {matches =>
        matches ? (
          <nav className={styles["navbar"]}>
            <div className={styles["logo"]}>
              <span>E</span>
              <span>B</span>
            </div>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        ) : (
          <nav className={styles["navbar__mobile"]}>
            <div
              className={styles["navbar__collapse"]}
              onClick={() => toggleNav()}
            >
              <span />
              <span />
              <span />
            </div>
            <div className={styles["logo"]}>
              <span>E</span>
              <span>B</span>
            </div>
            <div id={classNames({ [styles["overlay"]]: state.active })} />
            <div
              className={classNames({
                [styles["navbar__wrapper"]]: true,
                [styles["active"]]: state.active
              })}
            >
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
          </nav>
        )
      }
    </Media>
  );
}

export default Navbar;

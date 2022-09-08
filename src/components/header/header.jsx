import styles from "./header.module.scss";
import {BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount} from "@mui/icons-material";
import HeaderOption from "../header-option/header-option";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__left"]}>
        <img src="/images/linkedin.png" alt=""/>

        <div className={styles["header__search"]}>
          <Search />
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className={styles["header__right"]}>
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="/images/me.jpg" title="Me" />
      </div>
    </header>
  );
};

export default Header;
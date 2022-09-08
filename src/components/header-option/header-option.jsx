import style from "./header-option.module.scss";
import {Avatar, Icon} from "@mui/material";

const HeaderOption = ({Icon, avatar, title}) => {
  return (
    <div className={style.headerOption}>
      {Icon && <Icon className={style['headerOption__icon']}/>}
      {avatar && <Avatar className={style['headerOption__icon']} src={avatar}/>}
      <h3 className={style['headerOption__title']}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
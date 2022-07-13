import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Logo from "../../assets/png/musiclogopng.png";
import Search from "../../assets/png/searchItem.png";
import Menu from "../../assets/png/menuItem.png";
import { connect } from "react-redux";
import { setModalSearch } from "../../redux";
function Header(props) {
  const { setModalSearch } = props;

  return (
    <div className="header-container">
      <img src={Menu} width={25} alt="menu" />
      <img src={Logo} width={100} alt="logo" />
      <img
        onClick={() => setModalSearch({ visible: true })}
        src={Search}
        width={25}
        alt="search"
      />
    </div>
  );
}
Header.propTypes = {
  handleClick: PropTypes.func,
};
Header.defaultProps = {
  handleClick: () => null,
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { setModalSearch })(Header);

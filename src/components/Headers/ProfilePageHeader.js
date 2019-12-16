import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

function ProfilePageHeader({ user }) {
  const pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          `translate3d(0,${windowScrollTop}px,0)`;
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${require("assets/img/header-min.jpg")})`
          }}
          ref={pageHeader}
        />
        <Container>
          <div className="photo-container">
            <img alt="Profile" src={user.picture} />
          </div>
          <h3 className="title">{user.name}</h3>
          <p className="category">{user.mail}</p>
        </Container>
      </div>
    </>
  );
}

ProfilePageHeader.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    mail: PropTypes.string,
    picture: PropTypes.string,
  }),
};

ProfilePageHeader.defaultProps = {
  user: {
    name: '',
    mail: '',
    picture: '',
  },
};

export default ProfilePageHeader;

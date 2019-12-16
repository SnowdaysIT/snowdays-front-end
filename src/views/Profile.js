import React from "react";
import {
  Button,
  Container,
} from "reactstrap";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader.js";

import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  React.useEffect(() => {
    // TODO refactor and use generic utils
    // to manage page transitions effects
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  if (loading || !user) {
    return <div>Loading (have you logged in?)...</div>;
  }

  return (
    <>
      <div className="wrapper">
        <ProfilePageHeader user={user} />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Edit data
              </Button>
            </div>
            {/* <h3 className="title"></h3>
            <h5 className="description"></h5> */}
          </Container>
          <Container>
            <code>{JSON.stringify(user, null, 2)}</code>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default Profile;

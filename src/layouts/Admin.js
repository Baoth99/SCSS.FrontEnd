import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Profile from '../views/examples/Profile';
//import routes from "routes.js";
import AdminRoutes from '../routes/AdminRoutes';
import ConfirmDialog from '../components/Commons/ConfirmDialog';

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < AdminRoutes.length; i++) {
      if (
        props.location.pathname.indexOf(AdminRoutes[i].layout + AdminRoutes[i].path) !==
        -1
      ) {
        return AdminRoutes[i].name;
      }
    }
    return "Brand";
  };


  return (
    <>
      <Sidebar
        {...props}
        routes={AdminRoutes}
        logo={{
          innerLink: "/admin/dashboard",
          imgSrc: require("../assets/img/brand/argon-react.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(AdminRoutes)}
          <Route path="/admin/user-profile" component={Profile}/>
          <Redirect from="*" to="/admin/dashboard" />       
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
      <ConfirmDialog/>
    </>
  );
};

export default Admin;

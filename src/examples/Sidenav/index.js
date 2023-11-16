/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useEffect, useRef, useState } from "react";
// react-router-dom components
import { useLocation, NavLink, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import clsx from "clsx";
// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";
import { getLocalToken, getLocalUserInfo } from "utils/storage";
// Soft UI Dashboard React examples
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import { v4 as uuidv4 } from "uuid";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";
import { setMiniSidenav } from "context/theme/action";
// import { setLoading } from "context/common/action";
import ssoLogo from "assets/images/logo_SSO.png";
import { roles as rolesConstant } from "constants/config";
import { Typography } from "@mui/material";
import { setLoading } from "context/common/action";
import { checkPermissionEmployee } from "utils/utils";
import style from "./style.module.css";
import "./style.css";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const navigate = useNavigate();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller.theme;

  const location = useLocation();
  const { pathname } = location;
  const pathNameArr = pathname.split("/");
  const collapseName = pathNameArr[pathNameArr.length - 1];
  const listCol = routes.filter((data) => data.type === "title");
  const [close, setClose] = useState(false);
  const [smallScreen, setSmallScreen] = useState(true);
  const [hideState, setHideState] = useState(
    Object.fromEntries(listCol.map((data) => [data.key, false]))
  );
  // const closeSidenav = () => setMiniSidenav(dispatch, true);
  const navRef = useRef();
  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      if (window.innerWidth < 1200) {
        setSmallScreen(true);
        setClose(false);
      } else setSmallScreen(false);
    }

    function handleBrowserBack() {
      const localToken = getLocalToken();
      if (!localToken) navigate("/authentication/sign-in");
    }
    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    window.addEventListener("popstate", handleBrowserBack);
    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    function handleStorage() {
      // setLoading(dispatch, false);
      const localToken = getLocalToken();
      if (!localToken) {
        navigate("/authentication/sign-in");
        setLoading(dispatch, false);
      }
    }

    window.addEventListener("storage", handleStorage);
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleMiniSidenav);
      window.removeEventListener("popstate", handleBrowserBack);
      window.removeEventListener("storage", handleStorage);
    };
  }, [dispatch, location, smallScreen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target) && close) {
        setHideState(Object.fromEntries(listCol.map((data) => [data.key, false])));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, close]);
  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(
    ({ type, name, icon, data, title, noCollapse, key, route, href, box, roles, collapse }) => {
      let returnValue;
      const userInfo = getLocalUserInfo();
      if (roles && userInfo && !roles.includes(userInfo.role)) {
        return false;
      }
      if (type === "single") {
        returnValue = href ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={uuidv4()}
            className={clsx(style.sideBarElement)}
            style={{
              overflow: "hidden",
              height: hideState[box] || box === "none" ? "100px" : "0px",
              transition: "max-height 0.2s ease-out",
              margin: "0px",
              padding: "0px",
              display: checkPermissionEmployee(title, "XEM") ? "block" : "none",
            }}
            onClick={() => {
              setHideState({
                [key]: !hideState[key],
              });
            }}
          >
            <Link href={href} target="_blank" rel="noreferrer" sx={{ textDecoration: "none" }}>
              <SidenavCollapse
                color={color}
                name={name}
                icon={icon}
                data={data}
                active={key === collapseName}
                noCollapse={noCollapse}
                close={close}
              />
            </Link>
          </div>
        ) : (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={name}
            className={clsx(style.sideBarElement)}
            style={{
              overflow: "hidden",
              maxHeight: hideState[box] || box === "none" ? "100px" : "0px",
              transition: "max-height 0.2s ease-out",
              margin: "0px",
              display:
                checkPermissionEmployee(title, "XEM") || title === "Tài Khoản" ? "block" : "none",
            }}
            onClick={() => {
              setHideState({
                [key]: !hideState[key],
              });
            }}
          >
            <NavLink to={route}>
              <SidenavCollapse
                color={color}
                name={name}
                icon={icon}
                data={data}
                active={key === collapseName}
                noCollapse={noCollapse}
                close={close}
              />
            </NavLink>
          </div>
        );
      } else if (type === "title") {
        returnValue = (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={uuidv4()}
            className={"nav-item"
              .concat(close ? " close" : "")
              // eslint-disable-next-line no-nested-ternary
              .concat(key === pathNameArr[1] ? " active" : key === pathNameArr[2] ? " active" : "")}
            onClick={() => {
              if (close) {
                setHideState({
                  [key]: !hideState[key],
                });
              }
            }}
            style={checkPermissionEmployee(title, "XEM") ? {} : { display: "none" }}
          >
            <SuiBox
              onClick={() => {
                setHideState({
                  [key]: !hideState[key],
                });
              }}
              className={clsx(style.sidenavCollapse)}
              key={uuidv4()}
              display="flex"
              justifyContent="space-between"
              fontWeight="bold"
            >
              <SidenavCollapse
                name={title}
                icon={icon}
                active={key === collapseName}
                close={close}
              />
            </SuiBox>
            <div className="nav-collapse">
              {close && (
                <Typography
                  sx={{
                    display: hideState[key] ? "block" : "none",
                    fontFamily: "Nunito Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "19px",
                    color: "var(--gray-100)",
                    borderBottom: "1px solid var(--green-30)",
                    paddingBlock: "12px",
                    marginInline: "12px",
                  }}
                >
                  {title}
                </Typography>
              )}
              {collapse?.map((item) => (
                <div key={uuidv4()} className={"sideBarElement".concat(item.close ? " close" : "")}>
                  <div
                    key={item.key}
                    className={clsx(style.sideBarElement)}
                    style={{
                      overflow: "hidden",
                      display:
                        !checkPermissionEmployee(item.name, "XEM") && item.name !== "Chung"
                          ? "none"
                          : hideState[item.box] || item.box === "none"
                          ? "block"
                          : "none",
                      transition: "display 0.2s linear",
                      margin: "0px",
                    }}
                  >
                    <NavLink to={item.route}>
                      <SidenavCollapse
                        color={item.color}
                        name={item.name}
                        icon={item.icon}
                        data={item.data}
                        active={item.key === collapseName}
                        noCollapse={item.noCollapse}
                      />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      } else if (type === "divider") {
        returnValue = <Divider sx={{ background: "#555" }} key={uuidv4()} />;
      }
      return returnValue;
    }
  );

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, miniSidenav }}
      className={`${close ? "close" : ""} ${miniSidenav ? "navContainerClose" : ""}`}
      ref={navRef}
    >
      <Icon
        onClick={() => {
          if (smallScreen) {
            setMiniSidenav(dispatch, true);
            setClose(false);
          } else {
            setClose(!close);
            setHideState(!hideState);
          }
        }}
        className="icon-open"
      >
        keyboard_arrow_left
      </Icon>
      <SuiBox pt={1} pb={1} pl={2} pr={8} textAlign="center" className={close ? "logo-close" : ""}>
        {/* <SuiBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SuiTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SuiTypography>
        </SuiBox> */}
        <SuiBox
          component={NavLink}
          to={
            getLocalUserInfo() &&
            (getLocalUserInfo().role === rolesConstant.admin ||
              getLocalUserInfo().role === rolesConstant.employee)
              ? "/operator/report/dashboard"
              : "/client/client-dashboard"
          }
          display="flex"
          alignItems="center"
        >
          {brand && (
            <SuiBox
              component="img"
              src={close ? ssoLogo : ssoLogo}
              alt="Daikin Logo"
              width="100%"
            />
          )}
        </SuiBox>
      </SuiBox>
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Sidenav;

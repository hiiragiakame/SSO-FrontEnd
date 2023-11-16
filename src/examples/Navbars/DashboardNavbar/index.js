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
/* eslint-disable */
import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
// Soft UI Dashboard React examples
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

import boxShadows from "assets/theme/base/boxShadows";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
  greetings,
} from "examples/Navbars/DashboardNavbar/styles";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";
import { setTransparentNavbar, setMiniSidenav } from "context/theme/action";

// Images
import team2 from "assets/images/team-2.jpg";
import defaultUser from "assets/images/circle-user-solid.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import { Box, Typography } from "@mui/material";
import routes from "routes";
import { clearLocalStorage, getLocalUserInfo } from "utils/storage";
import { clearAccount } from "context/account/action";
import SupportIcon from "assets/images/support-icon.svg";
import { getAccountInfo } from "api/common";
import { checkUrlImage, isBase64 } from "utils/utils";
import { setAlertMessage, setIsStickyBtn } from "context/common/action";

const { xxl } = boxShadows;

function utf8Decode(utftext) {
  let string = "";
  let i = 0;
  let c = 0;
  let c2 = 0;
  let c3 = 0;

  while (i < utftext.length) {
    c = utftext.charCodeAt(i);
    if (c < 128) {
      string += String.fromCharCode(c);
      i += 1;
    } else if (c > 191 && c < 224) {
      c2 = utftext.charCodeAt(i + 1);
      // eslint-disable-next-line no-bitwise
      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      // eslint-disable-next-line no-bitwise
      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    }
  }
  return string;
}

function DashboardNavbar({ absolute, light, isMini }) {
  const navigate = useNavigate();
  const isSignIn = true;
  const [navbarType, setNavbarType] = useState();
  const [avatar, setAvatar] = useState(null);
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar } = controller.theme;
  const { isStickyBtn } = controller.common;
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserOptions, setOpenUserOptions] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const title = [];
  const path = [];

  const currentRouteMode = route[0];
  if (route[0] === "operator" || route[0] === "client") route.shift();
  for (let i = 0; i < route.length; i++) {
    let hasKey = false;
    let isCollapse = false;
    routes.forEach((item) => {
      if (route[i] === item.key) {
        if (item.type === "single" && currentRouteMode === item.route.split("/").slice(1)[0]) {
          title.push(item.title);
          path.push(item.route);
          hasKey = true;
          isCollapse = true;
        } else if (item.type === "title") {
          item?.collapse.map((miniItem) => {
            if (
              miniItem.key === route[i + 1] &&
              currentRouteMode === miniItem.route.split("/").slice(1)[0]
            ) {
              title.push(miniItem.name);
              path.push(miniItem.route);
              hasKey = true;
              isCollapse = true;
              i++;
            }
            return title;
          });
        } else if (currentRouteMode === item.route.split("/").slice(1)[0]) {
          if (item.name) {
            title.push(item.name);
            path.push(item.route);
            hasKey = true;
            isCollapse = true;
          }
        }
      }
    });

    if ((!hasKey || !isCollapse) && path.length > 0) {
      title.push(utf8Decode(unescape(route[i])));
      path.push(path[path.length - 1]?.concat(`/${route[i]}`));
    }
  }

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setIsStickyBtn(dispatch, window.scrollY > 64);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleOpenUserOptions = (event) => setOpenUserOptions(event.currentTarget);
  const handleCloseUserOptions = () => setOpenUserOptions(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  const renderUserOptions = () => (
    <Menu
      anchorEl={openUserOptions}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openUserOptions)}
      onClose={handleCloseUserOptions}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            personal_outline
          </Icon>
        }
        title={["", "Xem thông tin tài khoản"]}
        onClick={() => {
          navigate("/");
        }}
        color="info"
      />
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            logout
          </Icon>
        }
        title={["", "Đăng xuất"]}
        onClick={() => {
          clearLocalStorage();
          clearAccount(dispatch);
          navigate("/authentication/sign-in", { replace: true });
        }}
        color="error"
      />
    </Menu>
  );

  // const { userId } = getLocalUserInfo();
  const [nameAccount, setNameAccount] = useState("");
  // useEffect(() => {
  //   if (userId) {
  //     getAccountInfo(userId).then((res) => {
  //       if (res.message.status === 200) {
  //         const { data } = res.message.data.data;
  //         if (data) {
  //           setNameAccount(data.name || data.fullNameRepresent || data.nameStaff);
  //           setAvatar(data.image || data.imageBusiness || data.url || data.imageRepresent);
  //         }
  //         if (data?.clientType === "ENTERPRISE") {
  //           setNameAccount(data.fullNameBusiness);
  //         }
  //         if (data?.clientType === "INDIVIDUAL") {
  //           setNameAccount(data.contactName);
  //         }
  //       } else {
  //         setAlertMessage(dispatch, {
  //           message: res.message.data.message,
  //           type: "error",
  //           openAlert: true,
  //         });
  //       }
  //     });
  //   }
  // }, [userId]);

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={{
        // background: "transparent",
        background: "white",
        position: "relative",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <Toolbar
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 500px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <SuiBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => {
            return {
              ...navbarRow(theme, { isMini }),
              "@media (max-width: 500px)": {
                justifyContent: "center",
                marginTop: "10px",
              },
            };
          }}
        >
          <Breadcrumbs icon="home" title={title} route={path} light={light} />
        </SuiBox>
        {isMini ? null : (
          <SuiBox
            sx={(theme) => {
              return {
                ...navbarRow(theme, { isMini }),
                justifyContent: "flex-end",
                "@media (max-width: 500px)": {
                  justifyContent: "center",
                },
              };
            }}
          >
            <SuiBox color={light ? "white" : "inherit"} display="flex" alignItems="center">
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
                mr={{ xs: 1, sm: 1, md: 2, lg: 6, xl: 10 }}
              >
                <img
                  src={SupportIcon}
                  alt="Hỗ trợ 0289765432"
                  style={{ marginRight: "16px", paddingBottom: "3px" }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontStyle: "italic",
                    color: "var(--black)",
                  }}
                  display={{ xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }}
                >
                  Hỗ trợ 0289765432
                </Typography>
              </Box>
              {isSignIn && (
                <>
                  <IconButton
                    size="medium"
                    color="inherit"
                    sx={navbarIconButton}
                    aria-controls="notification-menu"
                    aria-haspopup="true"
                    variant="contained"
                    onClick={handleOpenMenu}
                  >
                    <Icon className={light ? "text-white" : "text-dark"}>notifications_none</Icon>
                  </IconButton>
                  {renderMenu()}
                </>
              )}
              {isSignIn ? (
                <SuiBox>
                  <SuiBox
                    ml={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={handleOpenUserOptions}
                    sx={{
                      cursor: "pointer",
                      borderRadius: "10%",
                      padding: "0.5rem",
                    }}
                  >
                    <SuiBox display="flex" alignItems="center" mr={2}>
                      <SuiBox
                        mr={1}
                        sx={{
                          greetings,
                          maxWidth: "210px",
                          overflowWrap: "breakWord",
                        }}
                      >
                        <SuiTypography variant="h6" color="black">
                          {nameAccount}
                        </SuiTypography>
                      </SuiBox>
                      <SuiAvatar
                        variant="circular"
                        src={checkUrlImage(avatar)}
                        alt="avatar"
                        shadow="md"
                        size="lg"
                        sx={{
                          marginRight: "10px",
                          borderRadius: "20px",
                          width: "2rem",
                          height: "2rem",
                        }}
                      />
                    </SuiBox>
                    <Icon>keyboard_arrow_down</Icon>
                  </SuiBox>
                  {renderUserOptions()}
                </SuiBox>
              ) : (
                <Link to="/authentication/sign-in">
                  <IconButton sx={navbarIconButton} size="small">
                    <Icon
                      sx={({ palette: { dark, white } }) => ({
                        color: light ? white.main : dark.main,
                      })}
                    >
                      account_circle
                    </Icon>
                    <SuiTypography
                      variant="button"
                      fontWeight="medium"
                      color={light ? "white" : "dark"}
                    >
                      Sign in
                    </SuiTypography>
                  </IconButton>
                </Link>
              )}

              <IconButton
                size="small"
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon className={light ? "text-white" : "text-dark"}>
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
            </SuiBox>
          </SuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;

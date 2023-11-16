/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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

import { useState, useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { Routes, Route, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard React themes
import theme from "assets/theme";
// import themeRTL from "assets/theme/theme-rtl";

// // RTL plugins
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

// Soft UI Dashboard React routes
import routes from "routes";
import { Alert, Snackbar } from "@mui/material";
import { setAlertMessage, setUnreadCount } from "context/common/action";
// Soft UI Dashboard React contexts
import { useSoftUIController } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import "./App.css";
import "./styles/app.scss";
import { setMiniSidenav } from "context/theme/action";
import Loading from "components/Loading";
import { getUnreadCount } from "api/common";
import { getLocalToken, getLocalUserInfo } from "utils/storage";
import { roles } from "constants/config";

// import { getUrlImage } from "api/common";
// import io from "socket.io-client";

// const socket = io(`${process.env.REACT_APP_API_URL}/websocket/unreadCount`, {
//   debug: true,
// });

theme.components.MuiCard.styleOverrides.root.overflow = "unset";

export default function App() {
  console.log("v14.9.23 17:30 dev");
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller.theme;
  const { alertMessage, loading, unReadCount } = controller.common;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  // const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const [filterRoutes] = useState(routes);

  function mappingUnread(list, tabName, formName) {
    let result;
    list.map((item) => {
      if (item.formName === formName && item.tabName === tabName) {
        result = item.unreadCount;
      }
    });
    return result;
  }

  function countUnread() {
    getUnreadCount().then((res) => {
      if (res.success && res.message.status === 200) {
        const result = {
          YEU_CAU_THUE_MAY: {
            YEU_CAU_MOI: mappingUnread(res.message.data, "THUE_MOI", "YEU_CAU_MOI"),
            HOP_DONG_TAM_UNG: mappingUnread(res.message.data, "THUE_MOI", "HOP_DONG_VA_TAM_UNG"),
            KIEM_KHO: mappingUnread(res.message.data, "THUE_MOI", "KIEM_KHO"),
            VAN_CHUYEN: mappingUnread(res.message.data, "THUE_MOI", "VAN_CHUYEN"),
            LAP_DAT_THANH_TOAN: mappingUnread(
              res.message.data,
              "THUE_MOI",
              "LAP_DAT_VA_THANH_TOAN"
            ),
            // HOAN_TAT: mappingUnread(res.message.data, "THUE_MOI", "HOAN_TAT"),
            // DA_HUY: mappingUnread(res.message.data, "THUE_MOI", "DA_HUY"),
            TOTAL:
              mappingUnread(res.message.data, "THUE_MOI", "THUE_MOI") -
              mappingUnread(res.message.data, "THUE_MOI", "HOAN_TAT") -
              mappingUnread(res.message.data, "THUE_MOI", "DA_HUY"),
          },
          YEU_CAU_TRA_MAY: {
            YEU_CAU_MOI: mappingUnread(res.message.data, "TRA_MAY", "YEU_CAU_MOI"),
            DANG_XU_LY: mappingUnread(res.message.data, "TRA_MAY", "DANG_XU_LY"),
            DANH_GIA_THIET_BI: mappingUnread(res.message.data, "TRA_MAY", "DANH_GIA_THIET_BI"),
            // HOAN_TAT: mappingUnread(res.message.data, "TRA_MAY", "HOAN_TAT"),
            // DA_HUY: mappingUnread(res.message.data, "TRA_MAY", "DA_HUY"),
            TOTAL:
              mappingUnread(res.message.data, "TRA_MAY", "TRA_MAY") -
              mappingUnread(res.message.data, "TRA_MAY", "HOAN_TAT") -
              mappingUnread(res.message.data, "TRA_MAY", "DA_HUY"),
          },
          YEU_CAU_BOI_THUONG: mappingUnread(
            res.message.data,
            "YEU_CAU_BOI_THUONG",
            "YEU_CAU_BOI_THUONG"
          ),
        };
        setUnreadCount(dispatch, result);
      }
    });
  }

  const token = getLocalToken();
  const role = getLocalUserInfo()?.role;
  useEffect(() => {
    if (token && (role === roles.admin || role === roles.employee)) {
      countUnread();
      const interval = setInterval(() => {
        countUnread();
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [token]);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  //   useEffect(() => {
  //     getUrlImage().then((res) => {
  //       setUrlImage(dispatch, res.message.data);
  //     });
  //   }, []);
  // useEffect(() => {
  //   if (token) {
  //     //after login
  //     //call api get role
  //     const adjustRoutes = routes.filter(route => {
  //       return route.roles.includes(role)
  //     })

  //     setfilterRoutes([...adjustRoutes])
  //   }

  // },[token])

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <Loading loading={loading} />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={5000}
          open={alertMessage.openAlert}
          onClose={(e, reason) => {
            if (reason === "clickaway") return;
            setAlertMessage(dispatch, { ...alertMessage, openAlert: false });
          }}
        >
          <Alert severity={alertMessage.type} sx={{ width: "100%" }}>
            {alertMessage.message}
          </Alert>
        </Snackbar>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Daikin Dashboard"
              routes={filterRoutes.filter((item) => {
                if (item.title === "YÊU CẦU" && item.collapse) {
                  item.collapse[0].data = unReadCount?.YEU_CAU_THUE_MAY.TOTAL;
                  item.collapse[1].data = unReadCount?.YEU_CAU_TRA_MAY.TOTAL;
                  item.collapse[2].data = unReadCount?.YEU_CAU_BOI_THUONG;
                }
                return item.noneSidebar !== true;
              })}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            {/* <Configurator /> */}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(filterRoutes)}
          <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

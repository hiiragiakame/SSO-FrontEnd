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

// react-router-dom components
import { Link, useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
// import Icon from "@mui/material/Icon";
import SortRoundedIcon from "@mui/icons-material/SortRounded";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { useEffect, useState } from "react";

function Breadcrumbs({ icon, title, route, light }) {
  const location = useLocation();

  const [arrParam, setArrParam] = useState([]);

  /**
   * @input ?a_1=123&b_2=456
   * @return [{label: a, value: 123, subIdx: 1},{label: b, value: 456, subIdx: 2}]
   */
  function handleParams(paramStr) {
    const paramArr = paramStr.slice(1).split("&");
    const result = [];
    paramArr.forEach((element) => {
      const arr = element.split("=");
      const arrLabel = arr[0].split("_");
      const obj = {
        value: arr[1],
        label: arrLabel[0],
        subIdx: arrLabel[1] ? parseInt(arrLabel[1], 10) : 0,
      };
      result.push(obj);
    });
    return result;
  }

  useEffect(() => {
    if (route) {
      const paramStr = location.search;
      const arr = handleParams(paramStr);
      setArrParam([...arr]);
    }
  }, [route]);

  /**
   * @input {element,idx}
   * @return /element?result_1=abc&result_2=a1123
   */
  function calExpandUrl(element, idx) {
    let result = "";
    arrParam.forEach((item) => {
      if (route.length - 1 - item.subIdx <= idx && item.subIdx > 1)
        result += `${item.label}_${item.subIdx - 1}=${item.value}&`;
      else if (item.subIdx && item.subIdx === 1) result += `${item.label}=${item.value}&`;
    });
    result = result.slice(0, result.length - 1);
    return element + (result === "" ? "" : `?${result}`);
  }

  return (
    <SuiBox mr={{ xs: 0, xl: 8, display: "flex", alignItems: "center" }}>
      <SuiTypography
        component="span"
        variant="body2"
        color={light ? "white" : "black"}
        opacity={light ? 0.8 : 0.5}
        sx={{
          fontSize: "23px",
          mr: "14px",
          lineHeight: 0,
          "@media (max-width: 500px)": {
            fontSize: "12px",
            mr: "5px",
          },
        }}
      >
        <SortRoundedIcon>{icon}</SortRoundedIcon>
      </SuiTypography>
      <MuiBreadcrumbs
        // separator="›"
        separator=">"
        aria-label="breadcrumb"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
          },
        }}
      >
        {route.map((el, idx) =>
          idx !== route.length - 1 ? (
            <Link to={`${calExpandUrl(el, idx)}`} key={el}>
              <SuiTypography
                fontWeight="regular"
                textTransform="capitalize"
                variant="h5"
                color={light ? "white" : "black"}
                noWrap
                sx={{
                  "@media (max-width: 500px)": {
                    fontSize: "14px",
                  },
                }}
              >
                {title[idx]}
              </SuiTypography>
            </Link>
          ) : (
            <SuiTypography
              key={el}
              fontWeight="regular"
              textTransform="capitalize"
              variant="h5"
              color={light ? "white" : "black"}
              noWrap
              sx={{
                "@media (max-width: 500px)": {
                  fontSize: "14px",
                },
              }}
            >
              {title[idx]}
            </SuiTypography>
          )
        )}
      </MuiBreadcrumbs>
    </SuiBox>
  );
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
  light: false,
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
};

export default Breadcrumbs;

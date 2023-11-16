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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";
import ssoLogo from "assets/images/logo_SSO.png";

function BasicLayout({ children }) {
  return (
    <PageLayout>
      <SuiBox
        width="100%"
        minHeight="50vh"
        // borderRadius="lg"
        pb={28}
        pt="5%"
        sx={{
          backgroundColor: "#b8eafb",
        }}
      />
      <SuiBox
        mx="auto"
        sx={{
          position: "absolute",
          top: "0",
          width: "100%",
        }}
      >
        <Grid container justifyContent="center" height="100vh">
          <Grid
            item
            xs={11}
            sm={9}
            md={7}
            lg={6}
            xl={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderRadius: "0",
                height: "100%",
                maxWidth: "649px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid container justifyContent="center" sx={{ height: "inherit" }}>
                <Grid item xs={10} sm={10} md={10} lg={8} xl={8}>
                  <SuiBox
                    sx={{
                      position: "relative",
                      height: "100%",
                    }}
                    pt={10}
                    pb={10}
                  >
                    <SuiBox mb="80px" justifyContent="center" sx={{ textAlign: "center" }}>
                      <SuiBox component="img" src={ssoLogo} alt="sso Logo" width="100%" />
                    </SuiBox>
                    {children}
                    <Footer />
                  </SuiBox>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>
      {/* <Footer /> */}
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;

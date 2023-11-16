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

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Footer() {
  return (
    <SuiBox
      component="footer"
      sx={{
        width: "100%",
        position: "absolute",
        bottom: "50px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={12} sx={{ textAlign: "center" }}>
          <SuiTypography
            variant="body2"
            // color="secondary"
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "var(--gray-100)",
            }}
          >
            Copyright &copy; 2023 Viettel. All rights reserved
          </SuiTypography>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

export default Footer;

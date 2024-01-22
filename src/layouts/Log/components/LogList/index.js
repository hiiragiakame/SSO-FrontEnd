/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import ListData from "layouts/Log/data/ListData";

function Projects() {
  const { columns, rows } = ListData();
  //   const [menu, setMenu] = useState(null);

  //   const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  //   const closeMenu = () => setMenu(null);

  const handleDownload = () => {};

  //   const renderMenu = (
  //     <Menu
  //       id="simple-menu"
  //       anchorEl={menu}
  //       anchorOrigin={{
  //         vertical: "top",
  //         horizontal: "left",
  //       }}
  //       transformOrigin={{
  //         vertical: "top",
  //         horizontal: "right",
  //       }}
  //       open={Boolean(menu)}
  //       onClose={closeMenu}
  //     >
  //       <MenuItem onClick={closeMenu}>Action</MenuItem>
  //       <MenuItem onClick={closeMenu}>Another action</MenuItem>
  //       <MenuItem onClick={closeMenu}>Something else</MenuItem>
  //     </Menu>
  //   );

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>
          <SoftTypography variant="h6" gutterBottom>
            Danh sách log
          </SoftTypography>
          {/* <SoftBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>30 done</strong> this month
            </SoftTypography>
          </SoftBox> */}
        </SoftBox>
        {/* <SoftBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SoftBox>
        {renderMenu} */}
        <SoftBox color="text" px={2}>
          <SuiButton
            color="var(--blue-blue-100)"
            onClick={handleDownload}
            sx={{
              flex: 1,
              height: "100%",
              marginTop: 0,
              marginBottom: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <CloudDownloadIcon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" />
            <SuiTypography
              whiteSpace="nowrap"
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "none",
                marginLeft: "8px",
              }}
            >
              Tải về
            </SuiTypography>
          </SuiButton>
        </SoftBox>
      </SoftBox>
      <SoftBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </SoftBox>
    </Card>
  );
}

export default Projects;
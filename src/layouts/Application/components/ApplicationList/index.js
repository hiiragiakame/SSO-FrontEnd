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
import { useState } from "react";

import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import ListData from "layouts/Application/data/ListData";
import ViewData from "layouts/Application/data/ViewData";
import EditData from "layouts/Application/data/EditData";
import DeleteData from "layouts/Application/data/DeleteData";
import LockData from "layouts/Application/data/LockData";
import CreateData from "layouts/Application/data/CreateData";

function ApplicationList() {
  const [openThemMoi, setOpenThemMoi] = useState(false);
  const [openViewDetails, setOpenViewDetails] = useState(false);
  const [openEditDetails, setOpenEditDetails] = useState(false);
  const [openDeleteDetails, setOpenDeleteDetails] = useState(false);
  const [openLockDetails, setOpenLockDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  // const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);

  const handleSelectedRow = (rowData) => {
    setSelectedRow(rowData);
  };

  const handleViewDetails = () => {
    setOpenViewDetails(!openViewDetails);
  };

  const handleEditDetails = () => {
    setOpenEditDetails(!openEditDetails);
  };
  const handleDeleteDetails = () => {
    setOpenDeleteDetails(!openDeleteDetails);
  };

  const handleLockDetails = () => {
    setOpenLockDetails(!openLockDetails);
  };

  const handleThemMoi = () => {
    setOpenThemMoi(!openThemMoi);
  };
  const { columns, rows } = ListData({
    handleViewDetails,
    handleEditDetails,
    handleDeleteDetails,
    handleLockDetails,
    handleSelectedRow,
  });
  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>
          <SoftTypography variant="h6" gutterBottom>
            Danh sách ứng dụng
          </SoftTypography>
        </SoftBox>
        <SoftBox color="text" px={2}>
          <SuiButton
            color="var(--blue-blue-100)"
            onClick={handleThemMoi}
            sx={{
              flex: 1,
              height: "100%",
              marginTop: 0,
              marginBottom: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
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
              Thêm mới
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
        <CreateData openThemMoi={openThemMoi} handleThemMoi={handleThemMoi} />
        <ViewData
          openViewThongTin={openViewDetails}
          setViewThongTin={handleViewDetails}
          selectedRow={selectedRow}
        />
        <EditData
          openEditThongTin={openEditDetails}
          setEditThongTin={handleEditDetails}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
        <DeleteData
          openDeleteThongTin={openDeleteDetails}
          setDeleteThongTin={handleDeleteDetails}
          selectedRow={selectedRow}
        />
        <LockData
          openLockThongTin={openLockDetails}
          setLockThongTin={handleLockDetails}
          selectedRow={selectedRow}
        />
      </SoftBox>
    </Card>
  );
}

export default ApplicationList;

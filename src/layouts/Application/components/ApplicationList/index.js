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
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Switch } from "@mui/material";
import Card from "@mui/material/Card";
import Input from "components/Input";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import ListData from "layouts/Application/data/ListData";
import useData from "layouts/Application/data/data";
import ViewData from "layouts/Application/data/ViewData";
import EditData from "layouts/Application/data/EditData";
import DeleteData from "layouts/Application/data/DeleteData";
import LockData from "layouts/Application/data/LockData";

function ApplicationList() {
  const { data, setData } = useData();
  const [openThemMoi, setOpenThemMoi] = useState(false);
  const [inputUngDung, setInputUngDung] = useState({
    MÃ_ỨNG_DỤNG: "",
    TÊN_ỨNG_DỤNG: "",
    DOMAIN: "",
    URL: "",
    TOKEN_EXPIRATION: "",
    TÊN_TÀI_KHOẢN: "",
    MẬT_KHẨU: "",
    XÁC_NHẬN_MẬT_KHẨU: "",
    MÔ_TẢ: "",
    TRẠNG_THÁI: true,
  });
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

  const addNewData = (newData) => {
    setData([...data, newData]);
  };

  const handleThemMoi = () => {
    setOpenThemMoi(!openThemMoi);
  };

  const handleLuuThemMoi = () => {
    addNewData(inputUngDung);
    setInputUngDung({
      MÃ_ỨNG_DỤNG: "",
      TÊN_ỨNG_DỤNG: "",
      DOMAIN: "",
      URL: "",
      TOKEN_EXPIRATION: "",
      TÊN_TÀI_KHOẢN: "",
      MẬT_KHẨU: "",
      XÁC_NHẬN_MẬT_KHẨU: "",
      MÔ_TẢ: "",
      TRẠNG_THÁI: true,
    });
    setOpenThemMoi(!openThemMoi);
    console.log(data);
  };

  const handleInputChange = (event, propertyName, isBoolean = false) => {
    setInputUngDung({
      ...inputUngDung,
      [propertyName]: isBoolean ? event.target.checked : event.target.value,
    });
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
          <Dialog open={openThemMoi} onClose={handleThemMoi} maxWidth="sm" fullWidth>
            <DialogTitle style={{ textAlign: "center", fontWeight: "bold" }}>
              THÊM MỚI ỨNG DỤNG
            </DialogTitle>
            <DialogContent>
              <SoftBox py={3}>
                <SoftBox mb={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Tên ứng dụng"
                        placeholder="Nhập tên ứng dụng"
                        onChange={(event) => handleInputChange(event, "TÊN_ỨNG_DỤNG")}
                        value={inputUngDung.TÊN_ỨNG_DỤNG}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Domain"
                        placeholder="Nhập tên domain"
                        onChange={(event) => handleInputChange(event, "DOMAIN")}
                        value={inputUngDung.DOMAIN}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="URL"
                        placeholder="Nhập URL"
                        onChange={(event) => handleInputChange(event, "URL")}
                        value={inputUngDung.URL}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Secret Key"
                        placeholder="Nhập secret key"
                        onChange={(event) => handleInputChange(event, "SECRET_KEY")}
                        value={inputUngDung.URL}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Token Expiration"
                        placeholder="Nhập token expiration"
                        onChange={(event) => handleInputChange(event, "TOKEN_EXPIRATION")}
                        value={inputUngDung.TOKEN_EXPIRATION}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Tên Tài Khoản"
                        placeholder="Nhập tên tài khoản"
                        onChange={(event) => handleInputChange(event, "TÊN_TÀI_KHOẢN")}
                        value={inputUngDung.TÊN_TÀI_KHOẢN}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Mật Khẩu"
                        placeholder="Nhập mật khẩu"
                        onChange={(event) => handleInputChange(event, "MẬT_KHẨU")}
                        value={inputUngDung.MẬT_KHẨU}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Xác Nhận Mật Khẩu"
                        placeholder="Nhập xác nhận mật khẩu"
                        onChange={(event) => handleInputChange(event, "XÁC_NHẬN_MẬT_KHẨU")}
                        value={inputUngDung.XÁC_NHẬN_MẬT_KHẨU}
                        type="text"
                        disabled={false}
                        required={true}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Input
                        label="Mô Tả"
                        placeholder="Nhập mô tả"
                        onChange={(event) => handleInputChange(event, "MÔ_TẢ")}
                        value={inputUngDung.MÔ_TẢ}
                        type="text"
                        disabled={false}
                        required={false}
                        customProp="Custom Property"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                      <Switch
                        color="primary"
                        checked={inputUngDung.TRẠNG_THÁI}
                        onChange={(event) => handleInputChange(event, "TRẠNG_THÁI", true)}
                      />
                    </Grid>
                  </Grid>
                </SoftBox>
              </SoftBox>
            </DialogContent>
            <DialogActions style={{ justifyContent: "center" }}>
              <SuiButton
                color="transparent"
                sx={{
                  border: "1px solid var(--blue-blue-100)",
                  borderColor: "var(--blue-blue-100) !important",
                  fontWeight: 700,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                onClick={handleThemMoi}
              >
                <SuiTypography
                  whiteSpace="nowrap"
                  fontWeight="regular"
                  color="var(--blue-blue-100)"
                  fontSize="14px"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                  }}
                >
                  Đóng
                </SuiTypography>
              </SuiButton>
              <SuiButton
                color="var(--blue-blue-100)"
                sx={{
                  border: "1px solid var(--blue-blue-100)",
                  borderColor: "var(--blue-blue-100) !important",
                  fontWeight: 700,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                onClick={handleLuuThemMoi}
              >
                <SuiTypography
                  whiteSpace="nowrap"
                  color="white"
                  fontSize="14px"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                  }}
                >
                  Lưu
                </SuiTypography>
              </SuiButton>
            </DialogActions>
          </Dialog>
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

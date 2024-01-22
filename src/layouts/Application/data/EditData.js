import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Switch } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import Input from "components/Input";

export default function EditData({
  openEditThongTin = false,
  setEditThongTin = null,
  selectedRow,
  setSelectedRow,
}) {
  const handleSelectedRow = (event, propertyName) => {
    setSelectedRow({
      ...selectedRow,
      [propertyName]: event.target.value,
    });
  };

  const updateData = () => {
    setEditThongTin();
    //Sửa thông tin ở đây
  };

  return [
    <Dialog
      open={openEditThongTin}
      onClose={() => setEditThongTin((prevState) => !prevState)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle style={{ textAlign: "center", fontWeight: "bold" }}>
        SỬA THÔNG TIN ỨNG DỤNG
      </DialogTitle>
      <DialogContent>
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              {selectedRow && (
                <>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Mã Ứng Dụng"
                        placeholder="Nhập mã ứng dụng"
                        onChange={(event) => handleSelectedRow(event, "MÃ_ỨNG_DỤNG")}
                        value={selectedRow.MÃ_ỨNG_DỤNG}
                        type="text"
                        disabled={true}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <p> </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Tên Ứng Dụng"
                        placeholder="Nhập tên ứng dụng"
                        onChange={(event) => handleSelectedRow(event, "TÊN_ỨNG_DỤNG")}
                        value={selectedRow.TÊN_ỨNG_DỤNG}
                        type="text"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Domain"
                        placeholder="Nhập Domain"
                        onChange={(event) => handleSelectedRow(event, "DOMAIN")}
                        value={selectedRow.DOMAIN}
                        type="text"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="URL"
                        placeholder="Nhập URL"
                        onChange={(event) => handleSelectedRow(event, "URL")}
                        value={selectedRow.URL}
                        type="text"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Secret Key"
                        placeholder="Nhập Secret Key"
                        onChange={(event) => handleSelectedRow(event, "SECRET_KEY")}
                        value={selectedRow.SECRET_KEY}
                        type="text"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Token Expiration"
                        placeholder="Nhập token expiration"
                        onChange={(event) => handleSelectedRow(event, "TOKEN_EXPIRATION")}
                        value={selectedRow.TOKEN_EXPIRATION}
                        type="text"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Tên Tài Khoản"
                        placeholder="Nhập tên tài khoản"
                        onChange={(event) => handleSelectedRow(event, "TÊN_TÀI_KHOẢN")}
                        value={selectedRow.TÊN_TÀI_KHOẢN}
                        type="text"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Mật Khẩu"
                        placeholder="Nhập mật khẩu"
                        onChange={(event) => handleSelectedRow(event, "MẬT_KHẨU")}
                        value={selectedRow.MẬT_KHẨU}
                        type="password"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Xác Nhận Mật Khẩu"
                        placeholder="Nhập xác nhận mật khẩu"
                        onChange={(event) => handleSelectedRow(event, "XÁC_NHẬN_MẬT_KHẨU")}
                        value={selectedRow.XÁC_NHẬN_MẬT_KHẨU}
                        type="password"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Input
                        label="Mô Tả"
                        placeholder="Nhập mô tả"
                        onChange={(event) => handleSelectedRow(event, "MÔ_TẢ")}
                        value={selectedRow.MÔ_TẢ}
                        type="text"
                        disabled={false}
                        required={true}
                        // endAdornment={<span>Icon, button or something</span>}
                        customProp="Custom Property"
                      />
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftTypography variant="caption" color="text" fontWeight="bold">
                      <Switch
                        color="primary"
                        checked={selectedRow.TRẠNG_THÁI}
                        onChange={(event) => handleSelectedRow(event, "TRẠNG_THÁI", true)}
                      />
                    </SoftTypography>
                  </Grid>
                </>
              )}
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
          onClick={setEditThongTin}
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
          onClick={updateData}
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
    </Dialog>,
  ];
}

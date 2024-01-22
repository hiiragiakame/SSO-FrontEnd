import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Switch } from "@mui/material";
import Input from "components/Input";
import SoftBox from "components/SoftBox";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import useData from "./data";

export default function CreateData({ openThemMoi = false, handleThemMoi = null }) {
  const { data, setData } = useData();
  const [inputUngDung, setInputUngDung] = useState({
    MÃ_ỨNG_DỤNG: "",
    TÊN_ỨNG_DỤNG: "",
    DOMAIN: "",
    URL: "",
    TOKEN_EXPIRATION: "",
    SECRET_KEY: "",
    TÊN_TÀI_KHOẢN: "",
    MẬT_KHẨU: "",
    XÁC_NHẬN_MẬT_KHẨU: "",
    MÔ_TẢ: "",
    TRẠNG_THÁI: true,
  });
  const addNewData = (newData) => {
    setData([...data, newData]);
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
    handleThemMoi(!openThemMoi);
  };

  const handleInputChange = (event, propertyName, isBoolean = false) => {
    setInputUngDung({
      ...inputUngDung,
      [propertyName]: isBoolean ? event.target.checked : event.target.value,
    });
  };
  return [
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
                  value={inputUngDung.SECRET_KEY}
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
    </Dialog>,
  ];
}

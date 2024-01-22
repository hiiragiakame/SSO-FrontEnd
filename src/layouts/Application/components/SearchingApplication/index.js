import SoftBox from "components/SoftBox";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import SelectBox from "components/SelectBox";
import Input from "components/Input";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import dataTrangThai from "layouts/Application/data/SelectedTrangThai";

function Searching() {
  const [selectedTrangThai, setSelectedTrangThai] = useState();
  const [inputMaUngDung, setInputMaUngDung] = useState("");
  const [inputTenUngDung, setInputTenUngDung] = useState("");

  const { options } = dataTrangThai;

  const handleChange = (selectedOption) => {
    setSelectedTrangThai(selectedOption);
  };

  const handleInputMaUngDungChange = (event) => {
    // Xử lý khi giá trị input thay đổi
    setInputMaUngDung(event.target.value);
  };

  const handleInputTenUngDungChange = (event) => {
    // Xử lý khi giá trị input thay đổi
    setInputTenUngDung(event.target.value);
  };

  const handleTimKiem = (event) => {
    console.log(event);
  };

  return (
    <SoftBox py={3}>
      <SoftBox mb={3}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            xl={0.2}
            textAlign="center"
            marginTop="auto"
            marginBottom="auto"
          >
            <Icon>wifi</Icon>
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <Input
              label="Mã ứng dụng"
              placeholder="Nhập mã ứng dụng"
              onChange={handleInputMaUngDungChange}
              value={inputMaUngDung}
              type="text"
              disabled={false}
              required={false}
              // endAdornment={<span>Icon, button or something</span>}
              customProp="Custom Property"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <Input
              label="Tên ứng dụng"
              placeholder="Nhập tên ứng dụng"
              onChange={handleInputTenUngDungChange}
              value={inputTenUngDung}
              type="text"
              disabled={false}
              required={false}
              // endAdornment={<span>Icon, button or something</span>}
              customProp="Custom Property"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <SelectBox
              onChange={handleChange}
              value={selectedTrangThai}
              options={options}
              label="Trạng thái"
              placeholder="Tất cả"
              width="100%"
              height="100%"
              fontSize="16px"
              required={false}
              mapField="value"
              // customStatusStyle={{ border: "2px solid #2196F3" }}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              isMulti={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={1}>
            <div
              style={{
                marginTop: "10%",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SuiButton
                color="var(--blue-blue-100)"
                onClick={handleTimKiem}
                sx={{
                  flex: 1,
                  height: "100%",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                <SuiTypography
                  whiteSpace="nowrap"
                  color="white"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                  }}
                >
                  Tìm kiếm
                </SuiTypography>
              </SuiButton>
            </div>
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Searching;

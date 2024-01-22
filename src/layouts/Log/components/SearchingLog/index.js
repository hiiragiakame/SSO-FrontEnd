import DateRangePicker from "components/DateRangePicker";
import SoftBox from "components/SoftBox";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import SelectBox from "components/SelectBox";
import Input from "components/Input";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import dataTacNhan from "layouts/Log/data/SelectedTacNhan";

function Searching() {
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  const [selectedTacNhan, setSelectedTacNhan] = useState();
  const [inputValue, setInputValue] = useState("");

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  const { options } = dataTacNhan;

  const handleChange = (selectedOption) => {
    setSelectedTacNhan(selectedOption);
  };

  const handleInputChange = (event) => {
    // Xử lý khi giá trị input thay đổi
    setInputValue(event.target.value);
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
          <Grid item xs={12} sm={6} xl={3.5}>
            <DateRangePicker
              label="Thời gian"
              placeholder="Từ ngày - đến ngày"
              required={false}
              setDateRange={handleDateRangeChange}
              value={selectedDateRange}
              autoPlacement="bottomStart"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={3.5}>
            <SelectBox
              onChange={handleChange}
              value={selectedTacNhan}
              options={options}
              label="Tác nhân"
              placeholder="Tất cả"
              width="100%"
              height="100%"
              fontSize="16px"
              required={false}
              mapField="value"
              // customStatusStyle={{ border: "2px solid #2196F3" }}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              isMulti={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={3.5}>
            <Input
              label="Nội dung"
              placeholder="Nhập nội dung"
              onChange={handleInputChange}
              value={inputValue}
              type="text"
              disabled={false}
              required={false}
              // endAdornment={<span>Icon, button or something</span>}
              customProp="Custom Property"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={1.2}>
            <div
              style={{ marginTop: "10%", height: "80%", display: "flex", flexDirection: "column" }}
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

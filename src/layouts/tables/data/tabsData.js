import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import MUIPickers from "examples/DateTimePicker";
import Table from "examples/Tables/Table";

// Data
import rentDeviceRequestTableData from "./rentDeviceRequestTableData";

function TabsComponent() {
  const { columns, rows } = rentDeviceRequestTableData;
  const [status, setStatus] = useState(0);

  return (
    <>
      <SuiBox p={2}>
        <SuiInput
          placeholder="Nhập mã yêu cầu/mã khách hàng, họ tên, số điện thoại,..."
          icon={{ component: "search", direction: "left" }}
        />
      </SuiBox>

      <Grid display="flex" justifyContent="space-between" px={2}>
        <Grid item xs={10} display="flex" alignItems="center">
          <FormControl
            variant="outlined"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "100%" }}
          >
            <Grid display="flex" justifyContent="space-between">
              <Grid item xs={2}>
                <SuiBox display="flex" justifyContent="space-between" alignItems="center">
                  <SuiTypography fontWeight="medium" fontSize="small" mr={1}>
                    LỌC
                  </SuiTypography>
                  <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    name="status"
                    id="status"
                  >
                    <MenuItem value={0}>Tất cả</MenuItem>
                    <MenuItem value={1}>Đang xử lý</MenuItem>
                    <MenuItem value={2}>Đã xử lý</MenuItem>
                    <MenuItem value={3}>Đã hủy</MenuItem>
                  </Select>
                </SuiBox>
              </Grid>
              <Grid item xs={10}>
                <SuiBox px={3} display="flex" alignItems="center">
                  <Grid item xs={9} display="flex">
                    <Grid item xs={7} display="flex" mr={2} alignItems="center">
                      <Grid item xs={5}>
                        <SuiTypography mr={2} fontWeight="medium" fontSize="small">
                          ĐĂNG KÝ TỪ
                        </SuiTypography>
                      </Grid>
                      <Grid item xs={7}>
                        <MUIPickers />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Grid item xs={4}>
                        <SuiTypography mr={2} fontWeight="medium" fontSize="small">
                          ĐẾN
                        </SuiTypography>
                      </Grid>
                      <Grid item xs={8}>
                        <MUIPickers />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3} ml={3}>
                    <SuiButton color="info" circular="true">
                      <SuiTypography fontWeight="medium" fontSize="small" color="white">
                        Áp Dụng
                      </SuiTypography>
                    </SuiButton>
                  </Grid>
                </SuiBox>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <SuiButton color="info" circular="true" fullWidth>
            <SuiTypography fontWeight="medium" fontSize="small" color="white">
              Thêm Yêu Cầu Thuê Mới
            </SuiTypography>
          </SuiButton>
        </Grid>
      </Grid>

      <SuiBox
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
      </SuiBox>
    </>
  );
}

const tabs = [
  {
    label: "Yêu Cầu Mới",
    Component: <TabsComponent />,
  },
  {
    label: "Đang Xử Lý",
    Component: <TabsComponent />,
  },
  {
    label: "Đã Xử Lý",
    Component: <TabsComponent />,
  },
  {
    label: "Đã Hủy",
    Component: <TabsComponent />,
  },
];

export default tabs;

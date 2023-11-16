import { useState } from "react";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Soft UI Dashboard React components
import SuiTypography from "components/SuiTypography";

function BasicSelect() {
  const [action, setAction] = useState("");

  const handleChange = (e) => {
    setAction(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={action}
          label="Action"
          onChange={handleChange}
        >
          <MenuItem value="accept">Nhận yêu cầu</MenuItem>
          <MenuItem value="deny">Hủy yêu cầu</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const rentDeviceRequestTableData = {
  columns: [
    { name: "Mã Yêu Cầu", align: "center" },
    { name: "Ngày Đăng Ký", align: "left" },
    { name: "Khách Hàng", align: "left" },
    { name: "Số Điện Thoại", align: "center" },
    { name: "Danh Sách Thiết Bị", align: "left" },
    { name: "Địa Chỉ Lắp Đặt", align: "left" },
    { name: "Xử Lý", align: "left" },
  ],

  rows: [
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
    {
      "Mã Yêu Cầu": <SuiTypography variant="caption">#1234567</SuiTypography>,
      "Ngày Đăng Ký": <SuiTypography variant="caption">12/12/2020 6:00AM</SuiTypography>,
      "Khách Hàng": <SuiTypography variant="caption">342342 - Nguyễn Văn A</SuiTypography>,
      "Số Điện Thoại": <SuiTypography variant="caption">0987654321</SuiTypography>,
      "Danh Sách Thiết Bị": <SuiTypography variant="caption">aa</SuiTypography>,
      "Địa Chỉ Lắp Đặt": (
        <SuiTypography variant="caption">
          Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
        </SuiTypography>
      ),
      "Xử Lý": <BasicSelect />,
    },
  ],
};

export default rentDeviceRequestTableData;

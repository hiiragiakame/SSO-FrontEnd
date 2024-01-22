import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import SoftBox from "components/SoftBox";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckIcon from "@mui/icons-material/Check";
// import Avatar from "components/Avatar";

export default function DeleteData({
  openDeleteThongTin = false,
  setDeleteThongTin = null,
  selectedRow,
}) {
  const handleDeleteDetails = () => {
    //thực hiện xóa ở đây
    setDeleteThongTin();
  };
  return [
    <Dialog
      open={openDeleteThongTin}
      onClose={() => setDeleteThongTin((prevState) => !prevState)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle style={{ textAlign: "right", fontWeight: "bold" }}>
        <IconButton
          onClick={() => {
            setDeleteThongTin();
          }}
        >
          <ClearIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={12}>
                <Avatar
                  alt="Avatar Alt Text"
                  src="./question.png" // Đường dẫn đến hình ảnh
                  sx={{
                    width: 60,
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={12}>
                <SuiTypography
                  variant="caption"
                  color="text"
                  fontWeight="bold"
                  fontSize="16px"
                  verticalAlign="middle"
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  Xác nhận
                </SuiTypography>
              </Grid>
              <Grid item xs={12} sm={6} xl={12}>
                <SuiTypography
                  variant="caption"
                  color="text"
                  fontWeight="regular"
                  fontSize="13px"
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  {`Bạn muốn thực hiện xóa ứng dụng ${
                    selectedRow ? selectedRow.TÊN_ỨNG_DỤNG : ""
                  } không?`}
                </SuiTypography>
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
          onClick={setDeleteThongTin}
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
            <HighlightOffIcon style={{ marginRight: "5px", fontSize: "14px" }} />
            Không
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
          onClick={handleDeleteDetails}
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
            <CheckIcon style={{ marginRight: "5px", fontSize: "14px" }} />
            Có
          </SuiTypography>
        </SuiButton>
      </DialogActions>
    </Dialog>,
  ];
}

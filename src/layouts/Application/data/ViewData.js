import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";

export default function ViewData({
  openViewThongTin = false,
  setViewThongTin = null,
  selectedRow,
}) {
  const renderItem = ({ propertyName = "", value = "" }) => (
    <>
      <Grid item xs={12} sm={6} xl={3}>
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {propertyName}:
        </SoftTypography>
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <SoftTypography variant="caption" color="text" fontWeight="bold">
          {propertyName !== "TRẠNG_THÁI" ? (
            value
          ) : (
            <span style={{ color: value ? "green" : "red", marginTop: "10px" }}>
              {value ? "Hoạt động" : "Khóa"}
            </span>
          )}
        </SoftTypography>
      </Grid>
    </>
  );

  return [
    <Dialog
      open={openViewThongTin}
      onClose={() => setViewThongTin((prevState) => !prevState)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle style={{ textAlign: "center", fontWeight: "bold" }}>
        THÔNG TIN ỨNG DỤNG
      </DialogTitle>
      <DialogContent>
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              {selectedRow &&
                Object.entries(selectedRow).length > 0 &&
                Object.entries(selectedRow).map(([key, value], index) => (
                  <React.Fragment key={index}>
                    {renderItem({ propertyName: key, value })}
                  </React.Fragment>
                ))}
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
          onClick={setViewThongTin}
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
      </DialogActions>
    </Dialog>,
  ];
}

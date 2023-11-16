import { Grid } from "@mui/material";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import PropType from "prop-types";
import { getLocalUserInfo } from "utils/storage";
import { roles } from "constants/config";

function ButtonControl({
  handleSubmit,
  handleCancel,
  justifyContent,
  submitText,
  hiddenSubmit,
  hiddenCancel,
  cancelText,
  isHidden,
}) {
  const userInfo = getLocalUserInfo();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pb="5px">
        <Grid container gap={2} display="flex" justifyContent={justifyContent}>
          {userInfo.role === roles.staff && isHidden ? null : (
            <>
              {!hiddenCancel && (
                <SuiButton
                  color="transparent"
                  sx={{
                    border: "1px solid var(--blue-blue-100)",
                    borderColor: "var(--blue-blue-100) !important",
                    fontWeight: 700,
                  }}
                  onClick={handleCancel}
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
                    {cancelText}
                  </SuiTypography>
                </SuiButton>
              )}
              {!hiddenSubmit && (
                <SuiButton color="var(--blue-blue-100)" onClick={handleSubmit}>
                  <SuiTypography
                    whiteSpace="nowrap"
                    color="white"
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                  >
                    {submitText}
                  </SuiTypography>
                </SuiButton>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
ButtonControl.defaultProps = {
  handleSubmit: () => {},
  handleCancel: () => {},
  justifyContent: "flex-end",
  submitText: "Lưu",
  cancelText: "Hủy",
  isHidden: false,
  hiddenSubmit: false,
  hiddenCancel: false,
};
ButtonControl.propTypes = {
  handleSubmit: PropType.func,
  handleCancel: PropType.func,
  justifyContent: PropType.string,
  submitText: PropType.string,
  cancelText: PropType.string,
  isHidden: PropType.bool,
  hiddenSubmit: PropType.bool,
  hiddenCancel: PropType.bool,
};
export default ButtonControl;

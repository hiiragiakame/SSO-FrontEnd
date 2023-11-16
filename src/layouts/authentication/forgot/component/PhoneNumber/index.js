/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import PropType from "prop-types";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import { useNavigate } from "react-router-dom";
import { useSoftUIController } from "context";
import { setAlertMessage } from "context/common/action";
import useEnterKeyEvent from "hooks/useEnterKeyEvent";
import { isRequired, isMaxLength, isMinLength, isPhoneNumber } from "utils/verify";
import { getOTPForgotPassword } from "api/common";
import InputPhoneNumber from "./inputPhoneNumber";

function PhoneNumber(props) {
  const { setStep, setPhoneNumber, phoneNumber } = props;
  const navigate = useNavigate();
  const [, dispatch] = useSoftUIController();

  function handleError(messageError) {
    setAlertMessage(dispatch, {
      message: messageError,
      type: "error",
      openAlert: true,
    });
  }

  function handleNextStep() {
    const result =
      isPhoneNumber(phoneNumber, "số điện thoại", () => {
        setAlertMessage(dispatch, {
          message: `Số Điện Thoại phải có 10 chữ số và bắt đầu bằng số 0`,
          type: "error",
          openAlert: true,
        });
      }) &&
      isRequired(phoneNumber, "số điện thoại", (title) => {
        setAlertMessage(dispatch, {
          message: `Vui lòng nhập ${title}`,
          type: "error",
          openAlert: true,
        });
      }) &&
      isMaxLength(phoneNumber, "Số Điện Thoại", 10, (title) => {
        setAlertMessage(dispatch, {
          message: `${title} phải có 10 chữ số và bắt đâu bằng số 0`,
          type: "error",
          openAlert: true,
        });
      }) &&
      isMinLength(phoneNumber, "Số Điện Thoại", 10, () => {
        setAlertMessage(dispatch, {
          message: `Số Điện Thoại phải có 10 chữ số và bắt đâu bằng số 0`,
          type: "error",
          openAlert: true,
        });
      }) &&
      isRequired(phoneNumber, "mật khẩu", (title) => {
        setAlertMessage(dispatch, {
          message: `Vui lòng nhập ${title}`,
          type: "error",
          openAlert: true,
        });
      });
    if (result) {
      getOTPForgotPassword(phoneNumber).then((data) => {
        if (data.message.status !== 200) {
          handleError(data.message.data.message);
        } else if (data.message.status === 200) {
          setStep((current) => current + 1);
        }
      });
    }
  }

  useEnterKeyEvent([phoneNumber], handleNextStep);
  return (
    <SuiBox>
      <SuiTypography
        sx={{
          position: "relative",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "7px",
        }}
        textAlign="center"
      >
        Quên mật khẩu
      </SuiTypography>
      <SuiBox display="flex" mb="26px" justifyContent="center">
        <SuiTypography
          sx={{
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            color: "var(--gray-80)",
            textTransform: "none",
          }}
          textAlign="center"
          onClick={() => navigate("/authentication/sign-in")}
        >
          Trở về
        </SuiTypography>
        <SuiTypography
          textAlign="center"
          onClick={() => navigate("/authentication/sign-in")}
          sx={{
            cursor: "pointer",
            marginLeft: "6px",
            fontSize: "18px",
            fontWeight: "600",
            color: "#4acaf5",
            textTransform: "none",
          }}
        >
          Đăng nhập
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={0} pb={3} px={3}>
        <SuiBox mb={2}>
          <SuiTypography
            sx={{
              fontSize: "14px",
              color: "var(--gray-100)",
              fontWeight: "600",
              textTransform: "none",
            }}
            mb={0.7}
          >
            Số Điện Thoại
          </SuiTypography>
          <InputPhoneNumber
            sx={{ height: "53px", backgroundColor: "var(--blue-gray-line) !important" }}
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Nhập số điện thoại để nhận mã OTP"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </SuiBox>
        <SuiBox mt={4} mb={1} textAlign="center">
          <SuiButton
            size="small"
            color="info"
            circular
            sx={{
              background: "var(--blue-blue-100)",
              borderRadius: "5px",
              padding: "8px 24px",
            }}
            onClick={handleNextStep}
          >
            <SuiTypography whiteSpace="nowrap" variant="body2" color="white" fontSize="14px">
              Tiếp theo
            </SuiTypography>
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
}

PhoneNumber.defaultProps = {
  setStep: () => {},
  setPhoneNumber: () => {},
  phoneNumber: "",
};

PhoneNumber.propTypes = {
  setStep: PropType.func,
  setPhoneNumber: PropType.func,
  phoneNumber: PropType.string,
};

export default PhoneNumber;

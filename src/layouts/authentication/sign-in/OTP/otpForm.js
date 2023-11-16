// react-router-dom components
import { useNavigate } from "react-router-dom";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState } from "react";
import { generateOTP } from "api/common";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
// Authentication layout components
import { useSoftUIController } from "context";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import OtpInput from "react-otp-input";
import useEnterKeyEvent from "hooks/useEnterKeyEvent";
import "./Otp.css";
import { setAlertMessage } from "context/common/action";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function OTPForm(props) {
  const { phoneNumber, setStep } = props;
  const [, dispatch] = useSoftUIController();
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");

  const handleSubmit = () => {
    setAlertMessage(dispatch, {
      message: `Đăng nhập thành công`,
      type: "success",
      openAlert: true,
    });
    navigate("/operator/report/dashboard", { replace: true });
  };

  const getOtpAgain = () => {
    generateOTP(phoneNumber).then((res) => {
      if (res.message.status === 200) {
        setAlertMessage(dispatch, {
          message: `Đã gửi lại mã OTP`,
          type: "success",
          openAlert: true,
        });
        setOTP("");
      }
    });
  };

  useEnterKeyEvent([otp], handleSubmit);
  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <SuiTypography
        sx={{
          position: "relative",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "7px",
        }}
        textAlign="center"
      >
        Xác Thực Đăng Nhập
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
          onClick={() => setStep(0)}
        >
          Trở về
        </SuiTypography>
        <SuiTypography
          textAlign="center"
          onClick={() => setStep(0)}
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
      <SuiBox pt={0} mb={3} textAlign="center">
        <SuiTypography
          sx={{
            fontSize: "14px",
            lineHeight: "33px",
            fontWeight: "400",
            color: "var(--gray-80)",
            textTransform: "none",
          }}
          // variant="h5"
          fontWeight="light"
        >
          Vui lòng nhập mã OTP đã được gửi tới số điện thoại
        </SuiTypography>
        <SuiTypography
          sx={{
            fontSize: "14px",
            color: "#7e8299",
            fontWeight: "700",
          }}
        >
          0123456789
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={0} pb={3}>
        <SuiTypography
          sx={{
            fontSize: "14px",
            color: "var(--gray-100)",
            fontWeight: "600",
          }}
          mb={0.7}
        >
          Mã OTP
        </SuiTypography>
        <SuiBox p={0} display="flex" justifyContent="center">
          <OtpInput
            onChange={(e) => setOTP(e)}
            value={otp}
            numInputs={6}
            separator={<span> </span>}
            isInputNum
            shouldAutoFocus
            inputStyle="inputStyle"
          />
        </SuiBox>
        <SuiBox p={0} display="flex" justifyContent="center" mt="26px">
          <SuiTypography
            sx={{
              position: "relative",
              fontSize: "14px",
              color: "#888",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            Không nhận được mã OTP?
          </SuiTypography>
          <SuiTypography
            sx={{
              cursor: "pointer",
              position: "relative",
              fontSize: "14px",
              color: "#00a3ff",
              textDecoration: "underline",
              fontWeight: "500",
              textTransform: "none",
            }}
            ml={0.5}
            onClick={() => getOtpAgain()}
          >
            Gửi lại OTP
          </SuiTypography>
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
            onClick={handleSubmit}
          >
            <SuiTypography whiteSpace="nowrap" variant="body2" color="white" fontSize="14px">
              Xác nhận
            </SuiTypography>
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </BasicLayout>
  );
}
OTPForm.defaultProps = {
  phoneNumber: null,
  setStep: () => {},
  // setCurrentStep: () => {},
};

OTPForm.propTypes = {
  phoneNumber: PropTypes.string,
  setStep: PropTypes.func,
  // setCurrentStep: PropTypes.func,
};
export default OTPForm;

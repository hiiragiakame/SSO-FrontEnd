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

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import curved6 from "assets/images/curved-images/curved14.jpg";
import InputPassword from "components/InputPassword";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import useEnterKeyEvent from "hooks/useEnterKeyEvent";
import OTP from "./OTP";

const step = {
  phoneNumberInput: 0,
  otpInput: 1,
};

function SignIn() {
  const [phone, setPhone] = useState(JSON.parse(localStorage.getItem("phoneNumber")));
  localStorage.removeItem("phoneNumber");
  const [currentStep, setCurrentStep] = useState(step.phoneNumberInput);
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });

  function handleLogin() {
    setCurrentStep(1);
  }
  const [isBackButtonClicked, setBackbuttonPress] = useState(false);

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    if (isBackButtonClicked) {
      setBackbuttonPress(false);
    } else {
      window.history.pushState(null, null, window.location.pathname);
      setBackbuttonPress(true);
    }
  };

  useEnterKeyEvent([phone, password], handleLogin);

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
  }, []);

  return currentStep === 0 ? (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <SuiTypography
        textAlign="center"
        sx={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "28px",
        }}
        variant="h3"
      >
        Đăng Nhập
      </SuiTypography>
      <SuiBox>
        <SuiBox component="form" role="form">
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
            <TextField
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                width: "100%",
                "& .MuiFilledInput-root": {
                  height: "3.75rem !important",
                  backgroundColor: "var(--blue-gray-line) !important",
                  border: "none",
                },
                "& .MuiFilledInput-input": {
                  height: "45px",
                  width: "100% !important",
                  "::placeholder": {
                    fontStyle: "italic",
                  },
                },
                "& .MuiFilledInput-root:before,& .MuiFilledInput-root:after": {
                  border: "none",
                  content: "none",
                },
                "& label.Mui-focused": {
                  color: "#4acaf5",
                },
                "& .MuiInputLabel-root": {
                  color: "#aeaeae",
                },
                "& .Mui-focused": {
                  borderColor: "#4acaf5 !important",
                },
              }}
              // label="Số Điện Thoại"
              variant="filled"
              placeholder="Nhập số điện thoại"
            />
          </SuiBox>
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
              Mật khẩu
            </SuiTypography>
            <InputPassword placeholder="Nhập mật khẩu" value={password} onChange={setPassword} />
          </SuiBox>
          <SuiBox display="flex" alignItems="center">
            <SuiTypography
              component={Link}
              to="/authentication/forgot-password"
              variant="button"
              fontWeight="regular"
              sx={{
                cursor: "pointer",
                userSelect: "none",
                color: "#00b6de",
                fontSize: "0.875rem",
                textTransform: "none",
              }}
            >
              Quên mật khẩu?
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
              onClick={handleLogin}
            >
              <SuiTypography whiteSpace="nowrap" variant="body2" color="white" fontSize="14px">
                Đăng Nhập
              </SuiTypography>
            </SuiButton>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </BasicLayout>
  ) : (
    <OTP phoneNumber={phone} setStep={setCurrentStep} />
  );
}

export default SignIn;

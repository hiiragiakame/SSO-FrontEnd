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

// react-router-dom components
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState } from "react";
import ResetPassword from "../components/resetPassword";
import OTPForm from "./otpForm";

const step = {
  otpInput: 0,
  newPwdInput: 1,
};

function OTPSignin(props) {
  const { phoneNumber, setStep } = props;
  const [currentStep, setCurrentStep] = useState(step.otpInput);

  return currentStep === 0 ? (
    <OTPForm phoneNumber={phoneNumber} setStep={setStep} setCurrentStep={setCurrentStep} />
  ) : (
    <ResetPassword phoneNumber={phoneNumber} setStep={setStep} type="first" />
  );
}
OTPSignin.defaultProps = {
  phoneNumber: null,
  setStep: () => {},
};

OTPSignin.propTypes = {
  phoneNumber: PropTypes.string,
  setStep: PropTypes.func,
};
export default OTPSignin;

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

// @mui material components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSoftUIController } from "context";
import { setAlertMessage } from "context/common/action";
// Soft UI Dashboard React components
import { resetPassword } from "api/common";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import curved6 from "assets/images/curved-images/curved14.jpg";
import PhoneNumber from "./component/PhoneNumber";
import OTP from "./component/OTP";
import ResetPassword from "./component/resetPassword";

const step = {
  phoneInput: 0,
  otpInput: 1,
  newPasswordInput: 2,
};
function Forgot() {
  const [, dispatch] = useSoftUIController();
  const [currentStep, setCurrentStep] = useState(step.phoneInput);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleError(messageError) {
    setAlertMessage(dispatch, {
      message: messageError,
      type: "error",
      openAlert: true,
    });
  }

  function handleResetPassword(password) {
    resetPassword(phoneNumber, password, password).then((result) => {
      if (result.message.status === 200) {
        navigate("/authentication/sign-in");
      }
    });
  }

  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      {currentStep === step.phoneInput && (
        <PhoneNumber
          setStep={setCurrentStep}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />
      )}

      {currentStep === step.otpInput && (
        <OTP setStep={setCurrentStep} phoneNumber={phoneNumber} handleError={handleError} />
      )}

      {currentStep === step.newPasswordInput && (
        <ResetPassword
          onReset={handleResetPassword}
          handleError={handleError}
          phoneNumber={phoneNumber}
        />
      )}
    </BasicLayout>
  );
}

export default Forgot;

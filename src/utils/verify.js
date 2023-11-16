// verify Required
export const isRequired = (value, label, alert) => {
  if (!value || value.length === 0) {
    alert(label);
    return false;
  }
  return true;
};
// verify Max Length
export const isMaxLength = (value, label, length, alert) => {
  if ((typeof value !== "string" || value.length > length) && value !== null) {
    alert(label);
    return false;
  }
  return true;
};
// verify Min Length
export const isMinLength = (value, label, length, alert) => {
  if (typeof value !== "string" || value.length < length) {
    alert(label);
    return false;
  }
  return true;
};
// verify Number
export const isNumber = (value, label, alert) => {
  if (!Number(value)) {
    alert(label);
    return false;
  }
  return true;
};

// verify phoneNumber
export const isPhoneNumber = (value, label, alert) => {
  if (value.charAt(0) !== "0") {
    alert(label);
    return false;
  }
  return true;
};
// verify Email
export const isEmail = (value, label, alert) => {
  // const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //eslint-disable-next-line
  const format =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value && !format.test(value)) {
    alert(label);
    return false;
  }
  return true;
};
// verify Image
export const isImage = (value, label, alert) => {
  if (!value || value === undefined || value.length === 0) {
    return true;
  }
  const string = value.slice(0, value.indexOf(";"));
  if (string === "data:image/jpeg" || string === "data:image/png" || string === "data:image/jpg") {
    return true;
  }
  //   const string2 = value.split(".");
  //   const string2 = value?.substring(value.lastIndexOf(".") + 1);
  const string2 = value?.slice(value.indexOf(".") + 1);
  if (string2 === "jpeg" || string2 === "png" || string2 === "jpg" || string2 === "webp") {
    return true;
  }

  alert(label);
  return false;
};

// webp

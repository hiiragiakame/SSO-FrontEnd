import { roles, tableStatus } from "constants/config";
import StatusTag from "components/StatusTag";
import { v4 as uuidv4 } from "uuid";
import { getLocalEmpPermission, getLocalUserInfo } from "./storage";

export function validatePassword(text) {
  const rules = [
    {
      label: "Password phải có ít nhất 8 ký tự",
      status: false,
    },
    {
      label: "Password phải có cả IN HOA và thường",
      status: false,
    },
    {
      label: "Password phải có ít nhất một số",
      status: false,
    },
    {
      label: "Password phải có một ký tự đặc biệt: !@#$%^&*()",
      status: false,
    },
  ];

  if (text.length >= 8) {
    rules[0].status = true;
  } else {
    rules[0].status = false;
    return rules[0];
  }

  const upper = /[A-Z]/.test(text);
  const lower = /[a-z]/.test(text);
  if (upper && lower) {
    rules[1].status = true;
  } else {
    rules[1].status = false;
    return rules[1];
  }

  if (text.match(/[0-9]/)) {
    rules[2].status = true;
  } else {
    rules[2].status = false;
    return rules[2];
  }

  if (text.match(/[!@#$%^&*()]/)) {
    rules[3].status = true;
  } else {
    rules[3].status = false;
    return rules[3];
  }

  //pass all condition
  return {
    status: true,
    label: "",
  };
}

export function formatDateSearch(time) {
  if (time) {
    return new Date(new Date(time).getTime() - new Date(time).getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
  }

  return null;
}

export function formatCash(str) {
  if (str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => (index % 3 ? next : `${next},`) + prev);
  }
  return str;
}

export function isDate(date) {
  return date instanceof Date && !Number.isNaN(date);
}

/**
 * return date format yyyy-mm-dd
 */
export function convertDateFormat(date) {
  if (!isDate(date)) return null;
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

  return `${year}-${month}-${day}`;
}

/**
 * render StatusTag
 */
export function renderStatusTag(status, tableStatusSpecify) {
  let result;
  if (tableStatusSpecify && tableStatusSpecify.length > 0) {
    result = tableStatusSpecify.find((item) => item.value === status);
  } else result = tableStatus.find((item) => item.value === status);

  if (result) {
    return <StatusTag ishiddentooltip="true" text={result.label} color={result.color} />;
  }
  return <StatusTag ishiddentooltip="true" text={status} color="green" />;
}

export function formatMoney(number, nonUnit) {
  const vnd = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  if (number) {
    if (nonUnit) return vnd.format(number).slice(0, -2);
    return vnd.format(number).slice(0, -2).concat("đ");
  }
  if (nonUnit) return "0";
  return "0đ";
}

export function stringMoneyToNumb(value) {
  let newValue = value;
  if (typeof newValue === "number") {
    return newValue;
  }
  if (typeof newValue === "string") {
    newValue = newValue.replace("đ", "");
    while (newValue.indexOf(".") > 0) {
      newValue = newValue.replace(".", "");
    }
  }
  return Number(newValue);
}

export function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function getFormatCurrency(input, isUnit) {
  // get input value
  if (!input) {
    return input;
  }
  let inputValue = input.toString();
  // don't validate empty input
  if (inputValue === "") {
    return inputValue;
  }
  // check for decimal
  if (inputValue.indexOf(",") >= 0) {
    const decimalPos = inputValue.indexOf(",");

    // split number by decimal point
    let leftSide = inputValue.substring(0, decimalPos);
    let rightSide = inputValue.substring(decimalPos);

    // add commas to left side of number
    leftSide = formatNumber(leftSide);

    // validate right side
    rightSide = formatNumber(rightSide);

    // Limit decimal to only 2 digits
    rightSide = rightSide.substring(0, 2);

    // join number by .
    inputValue = isUnit ? `${leftSide},${rightSide}đ` : `${leftSide},${rightSide}`;
    // inputValue = `${leftSide},${rightSide}`;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    inputValue = formatNumber(inputValue);
    if (isUnit) inputValue += "đ";
  }
  return inputValue;
  // send updated string to input
}

export function decodingBase64(url) {
  const posStart = url.indexOf("/");
  const posEnd = url.indexOf(";");
  const type = url.slice(posStart + 1, posEnd);
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], `${uuidv4()}.${type}`, { type: `image/${type}` });
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: uuidv4(),
        });
        resolve(file);
      })
      .catch((err) => reject(err));
  });
}

export function isBase64(urlImage) {
  const data = urlImage?.split(",");
  if (data?.length > 0) {
    const knownTypes = {
      "data:image/jpg;base64": 1,
      "data:image/png;base64": 2,
      "data:image/jpeg;base64": 3,
      /*ETC*/
    };
    if (!knownTypes[data[0]]) {
      return false;
    }
    const image = new Image();
    image.src = knownTypes[0] + data;
    // eslint-disable-next-line func-names
    image.onload = function () {
      //This should load the image so that you can actually check
      //height and width.
      if (image.height === 0 || image.width === 0) {
        return false;
      }
      return true;
    };
  } else {
    return false;
  }
  return true;
}

export function checkUrlImage(image) {
  if (image) {
    return isBase64(image) ? image : `${process.env.REACT_APP_IMG_URL}${image}`;
  }
  return null;
}

export function exportExcelFile(data, name, type) {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name || "export"}.${type || "xlsx"}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function titleCase(str) {
  const splitStr = str.toLowerCase().split(" ");
  const res = [];
  splitStr.forEach((item) => {
    res.push(item.charAt(0).toUpperCase() + item.substring(1));
  });
  return res.join(" ");
}

/**
 *
 * @param {string} nameFeature examples: Yêu Cầu Thuê Máy, Yêu Cầu Trả Máy,..
 * @param {*} action  examples: XEM, TẠO MỚI, CHỈNH SỬA, XÓA
 * @returns boolean
 */
export function checkPermissionEmployee(nameFeature, action) {
  const empPermissionList = getLocalEmpPermission();
  const userInfo = getLocalUserInfo();
  const result =
    (empPermissionList &&
      empPermissionList[titleCase(nameFeature)] &&
      empPermissionList[titleCase(nameFeature)][action]) ||
    userInfo?.role !== roles?.employee;
  return result;
}

/* eslint-disable */
import { API, API_PROVINCE, standardResponse } from "./middleware";

/**
 *
 * @param {number} phoneNumber
 * @param {string} password
 * @returns {standardResponse}
 */
export async function loginWithPassword(phoneNumber, password) {
  const url = "/services/iamservice/api/login";
  const params = {
    tel: phoneNumber,
    password: password,
  };

  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} phoneNumber
 * @param {number} otp
 * @returns {standardResponse}
 */
export async function verifyOTPLogin(phoneNumber, otp) {
  const url = "/services/iamservice/api/otpLogin";
  const params = {
    tel: phoneNumber,
    otp: otp,
  };

  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} phoneNumber
 * @param {string} password
 * @param {string} rePassword
 * @returns {standardResponse}
 */
export async function changePasswordFirstTime(phoneNumber, oldPassword, password, rePassword) {
  const url = "/services/iamservice/api/changePasswordFirstTime";
  const params = {
    tel: phoneNumber,
    oldPassword: oldPassword,
    password: password,
    confirmPassword: rePassword,
  };

  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} phoneNumber
 * @returns {standardResponse}
 */
export async function getOTPForgotPassword(phoneNumber) {
  const url = "/services/iamservice/api/generate-otp?tel=" + phoneNumber;

  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} phoneNumber
 * @param {number} otp
 * @returns {standardResponse}
 */
export async function verifyOTPForgotPassword(phoneNumber, otp) {
  const url = "/services/iamservice/api/check-otp";
  const params = {
    tel: phoneNumber,
    otp: otp,
  };

  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response);
    });
}

/**
 *
 * @param {number} phoneNumber
 * @param {string} password
 * @param {string} rePassword
 * @returns {standardResponse}
 */
export async function resetPassword(phoneNumber, password, rePassword) {
  const url = "/services/iamservice/api/forgot-password";
  const params = {
    tel: phoneNumber,
    password: password,
    confirmPassword: rePassword,
  };

  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} userId
 * @returns {standardResponse}
 */
export async function getAccountInfo(userId) {
  const url = "/services/iamservice/api/user/" + userId;

  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {string} userId
 * @param {object} userInfo
 * @returns {standardResponse}
 */
export async function updateAccount(userId, userInfo) {
  const url = "/services/iamservice/api/update-current-account/" + userId;

  return API.patch(url, userInfo)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} userId
 * @returns {standardResponse}
 */
export async function getCurrentAccountInfo(userId) {
  const url = "/services/iamservice/api/info-user/" + userId;

  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {string} userId
 * @param {object} userInfo
 * @returns {standardResponse}
 */
export async function updateCurrentAccount(userInfo) {
  const url = "/services/iamservice/api/update-user";

  return API.post(url, userInfo)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} phoneNumber
 * @param {number} oldPassword
 * @param {string} password
 * @param {string} rePassword
 * @returns {standardResponse}
 */
export async function updatePassword(phoneNumber, oldPassword, newPassword, reNewPassword) {
  const url = "/services/iamservice/api/changePassNew/";
  const params = {
    tel: phoneNumber,
    oldPassword: oldPassword,
    password: newPassword,
    confirmPassword: reNewPassword,
  };

  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getListProvince() {
  const url = "/p";

  return API_PROVINCE.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getListDistrict(provinceId) {
  const url = "/p/" + provinceId + "?depth=2";

  return API_PROVINCE.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getListWard(districtId) {
  const url = "/d/" + districtId + "?depth=2";

  return API_PROVINCE.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getListSubFee() {
  const url = "services/clientservice/api/list-sub-fee";
  return API.get(url)
    .then((response) => {
      return standardResponse(true, response?.data?.data);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getDevicesBySubFee(
  subscriptionFeeId,
  number,
  size,
  sort = "id,ASC",
  keyword
) {
  const url = `services/clientservice/api/device-list?subscriptionFeeId=${subscriptionFeeId}`;
  const params = {
    feeFilter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      keyword: keyword,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export function generateOTP(phoneNumber) {
  const url = `services/iamservice/api/client-generate-otp?tel=${phoneNumber}`;
  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export function getUrlImage() {
  const url = `services/iamservice/api/get-hostting-image`;
  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} phoneNumber
 * @returns {standardResponse}
 */
export async function getUnreadCount() {
  const url = "/services/notificationservice/api/unreadCount";

  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getLnglatAddress(address) {
  const url = `/search?q=${address}&format=json&polygon=1&addressdetails=1`;
  const config = {
    baseURL: "https://nominatim.openstreetmap.org",
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Sec-Fetch-Site": "cross-site",
    },
  };
  return API.get(url, config)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

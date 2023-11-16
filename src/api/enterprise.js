/* eslint-disable */
import { API, standardResponse } from "./middleware";

/**
 *
 * @param {number} page
 * @param {number} size
 * @param {string} sort
 * @returns {standardResponse}
 */
export async function getListStaff(page, size, sort, customerId, keyword) {
  const keywordParam = keyword ? `&keyword=${keyword}` : "";
  const url =
    `/services/clientservice/api/daikin-staff-business/${customerId}` +
    `?page=${page}&size=${size}&sort=${sort}` +
    keywordParam;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} id
 * @returns {standardResponse}
 */
export async function getStaffDetail(id) {
  const url = "/services/clientservice/api/daikin-detail-staff/" + id;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} phoneNumber
 * @param {object} size
 * @returns {standardResponse}
 */
export async function createNewStaff(phoneNumber, data) {
  const url = "/services/clientservice/api/daikin-add-staff-business/" + phoneNumber;
  const params = {
    nameStaff: data.name,
    sexStaff: data.gender,
    dob: data.birthDay,
    status: data.status,
    identityNumber: data.identityCard,
    cellPhoneStaff: data.phoneNumber,
    emailStaff: data.email,
    street: data.address,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    url: data.image,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} staffId
 * @param {object} size
 * @returns {standardResponse}
 */
export async function updateStaff(staffId, data) {
  const url = "/services/clientservice/api/daikin-update-staff-business/" + staffId;
  const params = {
    nameStaff: data.name,
    cellPhoneStaff: data.phoneNumber,
    emailStaff: data.email,
    identityNumber: data.identityCard,
    street: data.address,
    sexStaff: data.gender,
    dob: data.birthDay,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    branchId: data.branchId,
    url: data.image,
    status: data.status,
  };
  return API.put(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} id
 * @returns {standardResponse}
 */
export async function deleteStaff(id) {
  const url = `services/clientservice/api/delete-staff/${id}`;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} page
 * @param {number} size
 * @param {string} sort
 * @returns {standardResponse}
 */
export async function getListBranch(page, size, sort, customerId, keyword) {
  const keywordParam = keyword ? `&keyword=${keyword}` : "";
  const url =
    `/services/clientservice/api/daikin-getAll-branch-business/${customerId}` +
    `?page=${page}&size=${size}&sort=${sort}` +
    keywordParam;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} page
 * @param {number} size
 * @param {string} sort
 * @returns {standardResponse}
 */
export async function getListAllBranch(userId) {
  const url = `/services/clientservice/api/daikin-listAll-branch-business/${userId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} id
 * @returns {standardResponse}
 */
export async function getBranchDetail(id) {
  const url = "/services/clientservice/api/daikin-detail-branch/" + id;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} phoneNumber
 * @param {object} data
 * @returns {standardResponse}
 */
export async function createNewBranch(phoneNumber, data) {
  const url = "/services/clientservice/api/daikin-add-branch-business/" + phoneNumber;
  const params = {
    nameBranch: data.name,
    cellPhoneBranch: data.phoneNumber,
    emailBranch: data.email,
    street: data.address,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    fullNameRepresent: data.representName,
    sexRepresent: data.gender,
    cellPhoneRepresent: data.representPhoneNumber,
    emailRepresent: data.representEmail,
    imageRepresent: data.avatar,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} userId
 * @param {object} data
 * @returns {standardResponse}
 */
export async function updateBranch(userId, data) {
  const url = "/services/clientservice/api/daikin-update-branch-business/" + userId;
  const params = {
    nameBranch: data.name,
    cellPhoneBranch: data.phoneNumber,
    emailBranch: data.email,
    street: data.address,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    fullNameRepresent: data.representName,
    sexRepresent: data.gender,
    cellPhoneRepresent: data.representPhoneNumber,
    emailRepresent: data.representEmail,
    imageRepresent: data.avatar,
  };
  return API.put(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} id
 * @returns {standardResponse}
 */
export async function deleteBranch(id) {
  const url = `services/clientservice/api/delete-branch/${id}`;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {string} userId
 * @param {object} data
 * @returns {standardResponse}
 */
export async function updateEnterpriseAccount(userId, data) {
  const url = "/services/iamservice/edit-enterprise-user/" + userId;
  const params = {
    contactName: data.contactName,
    cellPhone: data.cellPhone,
    email: data.email,
    street: data.street,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    url: data.url,
    tax: data.tax,
    fullNameBusiness: data.fullNameBusiness,
    emailBusiness: data.emailBusiness,
    cellPhoneBusiness: data.cellPhoneBusiness,
    sexBusiness: data.sexBusiness,
    imageBusiness: data.imageBusiness,
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
 * @param {string} userId
 * @param {array} data
 * @returns {standardResponse}
 */
export async function checkedBills(userId, data) {
  const url = `services/billingservice/api/bills/checkedBills?userId=${userId}`;

  return API.post(url, { ids: data })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

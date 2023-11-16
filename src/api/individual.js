/* eslint-disable */
import { API, standardResponse } from "./middleware";

/**
 *
 * @param {number} userId
 * @param {object} data
 * @returns {standardResponse}
 */
export async function updateIndividualAccount(userId, data) {
  const url = "/services/iamservice/update-individual-account/" + userId;
  const params = {
    contactName: data.contactName,
    cellPhone: data.cellPhone,
    email: data.email,
    identityNumber: data.identityNumber,
    dob: data.dob,
    sex: data.sex,
    street: data.street,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    url: data.url,
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function addCustomerRentRequest(data) {
  const url = "/services/clientservice/api/add-rent-request";

  return API.post(url, data)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getCustomerRequests(userId, params) {
  const url = `services/clientservice/api/getAllRequestTypeServiceByUserId?userId=${userId}`;

  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getListDevices(deviceId = 1) {
  const url = `services/productservice/api/listDevice`;
  const params = {
    page: {
      number: 0,
      size: 10,
      sort: "id,ASC",
      all: true,
    },
    status: "HOAT_DONG",
    keyword: null,
    startDate: null,
    endDate: null,
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
 * Danh Sách Thiết Bị Đang Thuê
 */
export async function getAllDeviceDetail(userId, keyword) {
  const keywordParams = keyword ? `&keyword=${keyword}` : "";
  const url =
    `services/productservice/api/getAllDeviceDetailInformationByUserId?userId=${userId}` +
    keywordParams;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Thêm mới yêu cầu bảo trì sửa chữa
 */
export async function createMaintainRequestService(userId, noteRequest, deviceDetailIds) {
  const noteRequestParams = noteRequest ? `&noteRequest=${noteRequest}` : "";
  const url =
    `services/clientservice/api/saveRentRequestMaintainServiceByUserId?userId=${userId}` +
    noteRequestParams +
    `&deviceDetailIds=${deviceDetailIds}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Cập nhật yêu cầu bảo trì sửa chữa
 */
export async function updateMaintainRequestService(rentRequestId, userId, note, deviceDetailIds) {
  const params = {
    userId: userId,
    deviceDetailIds: deviceDetailIds,
    note: note,
  };
  const url = `services/clientservice/api/updateRentRequestMaintainServiceByRentRequestId/${rentRequestId}`;
  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy thông tin chi tiết yêu cầu bảo trì
 */
export async function getMaintainRequestService(rentRequestId, userId) {
  const url = `services/clientservice/api/getRentRequestMaintainServiceByRentRequestId/${rentRequestId}?userId=${userId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy thông tin chi tiết yêu cầu trả máy
 */
export async function getReturnDeviceList(rentRequestId, userId) {
  const url = `services/clientservice/api/list-returned-devices?userId=${userId}&rentRequestId=${rentRequestId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// /${rentRequestId}

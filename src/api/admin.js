/* eslint-disable */
import { API, standardResponse } from "./middleware";

/**
 *
 * @param {object} data
 * @returns {standardResponse}
 */
export async function createNewInvidual(data) {
  const url = "/services/clientservice/api/daikin-add-clients-individual";
  const params = {
    contactName: data.name,
    cellPhone: data.phoneNumber,
    email: data.email,
    identityNumber: data.identityNumber,
    dob: data.dob,
    sex: data.gender,
    street: data.address,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    url: data.image,
    clientStatus: data.status,
    clientType: "INDIVIDUAL",
  };

  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {object} data
 * @returns {standardResponse}
 */
export async function createNewEnterprise(data) {
  const url = "/services/clientservice/api/daikin-add-clients-business";
  const params = {
    contactName: data.name,
    cellPhone: data.phoneNumber,
    email: data.email,
    street: data.address,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    url: data.avatar,
    imageBusiness: data.logo,
    clientType: "ENTERPRISE",
    tax: data.tax,
    fullNameBusiness: data.businessName,
    emailBusiness: data.businessEmail,
    cellPhoneBusiness: data.businessPhoneNumber,
    clientStatus: data.clientStatus,
    sexBusiness: data.gender,
  };

  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {object} data
 * @returns {standardResponse}
 */
export async function updateInvidual(data) {
  const url = "/services/clientservice/api/daikin-update-clients-individual";
  const params = {
    clientCode: data.code,
    contactName: data.name,
    cellPhone: data.phoneNumber,
    email: data.email,
    identityNumber: data.identityNumber,
    dob: data.dob,
    sex: data.gender,
    street: data.address,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    url: data.image,
    clientType: "INDIVIDUAL",
    clientStatus: data.status,
  };

  return API.put(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {object} data
 * @returns {standardResponse}
 */
export async function updateBusiness(data) {
  const url = "/services/clientservice/api/daikin-update-clients-business";
  const params = {
    clientCode: data.code,
    contactName: data.name,
    cellPhone: data.phoneNumber,
    email: data.email,
    street: data.address,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    imageBusiness: data.logo,
    url: data.avatar,
    clientType: "ENTERPRISE",
    clientStatus: data.status,
    tax: data.tax,
    fullNameBusiness: data.businessName,
    emailBusiness: data.businessEmail,
    cellPhoneBusiness: data.businessPhoneNumber,
    sexBusiness: data.gender,
    clientStatus: data.clientStatus,
  };

  return API.put(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} page
 * @param {number} size
 * @param {string} sort ASC, DSC
 * @param {string} keyword clientCode, contactName, phoneNumber
 * @param {string} clientTypes ENTERPRISE, INDIVIDUAL
 * @param {number} clientStatus
 * @param {date} startDate
 * @param {date} endDate
 * @returns {standardResponse}
 */
export async function getListClients(
  page = 0,
  size = 10,
  sort = "ASC",
  keyword,
  clientTypes,
  clientStatus,
  startDates,
  endDates,
  provinceName,
  districtName,
  wardName
) {
  const url = `/services/clientservice/api/daikin-clients`;
  const params = {
    page,
    size,
    sort,
    keyword,
    clientTypes,
    clientStatus,
    startDates,
    endDates,
    clientProvince: provinceName,
    clientDistrict: districtName,
    clientWard: wardName,
  };
  return API.get(url, { params })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {string} customerName
 * @returns {standardResponse}
 */
export async function getClientList(page, size, sort, keyword) {
  const pageParams = page ? `page=${page}&` : "";
  const sizeParams = size ? `size=${size}&` : "";
  const sortParams = sort ? `sort=${sort}&` : "";
  const keywordParams = keyword ? `keyword=${keyword}` : "";
  const url =
    `/services/clientservice/api/pageClientList?` +
    pageParams +
    sizeParams +
    sortParams +
    keywordParams;

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
 * @param {number} userId
 * @returns {standardResponse}
 */
export async function getClientDetail(userId) {
  const url = "/services/clientservice/api/daikin-client/getClient/" + userId;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} userId
 * @returns {standardResponse}
 */
export async function updateClientStatus(userId, status) {
  const url = "/services/clientservice/api/update-status/" + userId;

  return API.post(url, { status: status })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} userId
 * @returns {standardResponse}
 */
export async function getEmployeeDetail(userId) {
  const url = "/services/staffservice/api/findEmployeeByUserId/" + userId;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} userId
 * @returns {standardResponse}
 */
export async function deleteEmployee(userId) {
  const url = "services/staffservice/api/deleteEmployee/" + userId;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} userId
 * @returns {standardResponse}
 */
export async function resetPasswordEmployee(userId) {
  const url = "services/iamservice/api/reset-password/" + userId;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} page
 * @param {number} size
 * @param {string} sort ASC, DSC
 * @param {string} keyword emplyeeCode, phoneNumber, name
 * @param {number} clientStatus
 * @param {date} startDate
 * @param {date} endDate
 * @param {string} province
 * @returns {standardResponse}
 */
export async function getListAdmin(
  page = 0,
  size = 20,
  sort = "ASC",
  keyword,
  employeeStatus,
  startDateSearch,
  endDateSearch,
  provinceName,
  wardName,
  districtName
) {
  const url = `/services/staffservice/api/employeePage`;
  const params = {
    page,
    size,
    sort,
    keyword,
    employeeStatus,
    startDateSearch,
    endDateSearch,
    provinceName,
    wardName,
    districtName,
  };
  return API.get(url, { params })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 *
 * @param {number} page
 * @returns {standardResponse}
 */
export async function createAdmin(data) {
  const url = "/services/staffservice/api/create/employee/";
  const param = {
    name: data.name,
    tel: data.tel,
    email: data.email,
    idCard: data.idCard,
    dayOfBirth: data.dayOfBirth,
    gender: data.gender,
    street: data.street,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    userType: [data.userType],
    employeeStatus: data.employeeStatus,
    image: data.image,
    employeeCode: null,
  };
  return API.post(url, param)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 *
 * @param {number} page
 * @returns {standardResponse}
 */
export async function updateAdmin(userId, data) {
  const url = "/services/staffservice/api/employee/edit/" + userId;
  const param = {
    name: data.name,
    tel: data.tel,
    email: data.email,
    idCard: data.idCard,
    dayOfBirth: data.dayOfBirth,
    gender: data.gender,
    street: data.street,
    countryName: data.countryName,
    provinceName: data.provinceName,
    districtName: data.districtName,
    wardName: data.wardName,
    userType: [data.userType],
    employeeStatus: data.employeeStatus,
    image: data.image,
    // image:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  };
  return API.patch(url, param)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 * Khách hàng (cá nhân, doanh nghiệp) xem danh sách hợp đồng
 * Khách hàng (cá nhân, doanh nghiệp) xem danh sách các thiết bị thuê của từng hợp đồng
 */
export async function getListContract(id) {
  const url = `services/clientservice/api/daikin-find-contract/ + ${id}`;

  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 * Khách hàng (cá nhân, doanh nghiệp) xem danh sách hợp đồng
 * Khách hàng (cá nhân, doanh nghiệp) xem danh sách các thiết bị thuê của từng hợp đồng
 */
export async function getListContractForOnlyAccount(
  userId,
  page,
  size,
  sort,
  keyword,
  contractStatus,
  startDateSearch,
  endDateSearch,
  expirationStartDateSearch,
  expirationEndDateSearch
) {
  const url = `services/clientservice/api/daikin-find-contract/${userId}`;
  const params = {
    page,
    size,
    sort,
    keyword,
    contractStatus,
    startDateSearch,
    endDateSearch,
    expirationStartDateSearch,
    expirationEndDateSearch,
  };

  return API.get(url, { params })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 * Khách hàng (cá nhân, doanh nghiệp) xem chi tiết hợp đồng
 */
export async function getDaikinContractDetail(contractCode) {
  const url = `services/clientservice/api/daikin-detail-contract/` + contractCode;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Khách hàng mới đăng ký dịch vụ thuê
 */
export async function addRentRequest(data) {
  const url = "services/clientservice/api/add-rent-request";
  const params = {
    userId: data.userId,
    subscriptionFeeId: data.subscriptionFeeId,
    deviceList: data.deviceList,
    addressDTO: data.addressDTO,
    shouldSaveAddress: data.shouldSaveAddress,
    note: data.note,
    userAdmin: data.userAdmin,
    // userAdmin: null,
    // userId: null,
  };

  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Khách hàng cũ đăng ký thuê máy thêm
 */
export async function updateRentRequest(
  rentRequestId,
  subscriptionFeeId,
  deviceList,
  addressDTO,
  shouldSaveAddress = false,
  note
) {
  const url = `services/clientservice/api/update-rent-request`;
  const params = {
    rentRequestId,
    subscriptionFeeId,
    deviceList,
    addressDTO,
    shouldSaveAddress,
    note,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Khách hàng cũ đăng ký thuê máy thêm
 */
export async function buttonAcceptRentRequest(
  rentRequestId,
  subscriptionFeeId,
  deviceList,
  addressDTO,
  shouldSaveAddress = false,
  note
) {
  const url = `services/clientservice/api/button-accept-rent-request`;
  const params = {
    rentRequestId,
    subscriptionFeeId,
    deviceList,
    addressDTO,
    shouldSaveAddress,
    note,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xem chi tiết 1 yêu cầu thuê
 */
export async function getRentRequestDetail(id) {
  const url = "services/clientservice/api/details-rent-request/" + id;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Hủy thuê 1 máy hoặc nhiều máy
 */
export async function deleteDevices(rentRequestId, deviceId) {
  const url = `services/clientservice/api/delete-devices/${rentRequestId}/${deviceId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xem danh sách gói cước
 */
export async function getListSubFee() {
  const url = "services/clientservice/api/list-sub-fee";

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Tìm kiếm và xem danh sách yêu cầu thuê được phân trang
 */
export async function getListRentRequest(
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  keyword,
  startDate,
  endDate,
  provinceName,
  districtName,
  wardName
  // validStatus
) {
  const url = `services/clientservice/api/listRentRequest`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keyword,
      // validStatus,
      provinceName,
      districtName,
      wardName,
      startDate,
      endDate,
    },
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
 * Tìm kiếm và xem danh sách Hợp đồng và tạm ứng
 */
export async function getListContractAdvance(
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  keyword,
  all,
  paymentStatus,
  startDateSearch,
  endDateSearch,
  dateForPaymentStartDate,
  dateForPaymentEndDate
) {
  const url = `services/clientservice/api/PageRequestForContractAdvance`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: all,
      },
      keyword,
      paymentStatus,
      startDateSearch,
      endDateSearch,
      dateForPaymentStartDate,
      dateForPaymentEndDate,
    },
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
 * Chi Tiết Danh Sách Thiết Bị Thuê
 */
export async function getListRentRequestForContract(
  userId,
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  all = false,
  keyword = ""
) {
  const url = `services/clientservice/api/findRequestApprovedByUserId`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: all,
      },
      userId,
      keyword,
    },
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
 * Tìm kiếm và xem danh sách (yêu cầu thuê) Kiểm kho được phân trang
 */
export async function getListRentCheckInventory(
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  keyword,
  statusCheckInventory,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/list-rent-check-inventory`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keyword,
      statusCheckInventory,
      startDate,
      endDate,
    },
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
 * Tìm kiếm và xem danh sách (yêu cầu thuê) lắp đặt và thanh toán được phân trang
 */
export async function getListRentRequestSetup(
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  keyword,
  startDate,
  endDate,
  status
) {
  const url = `services/clientservice/api/listRentRequestSetup`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keyword,
      status,
      startDate,
      endDate,
    },
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
 * Tìm kiếm và xem danh sách (yêu cầu thuê) Hoàn tất được phân trang
 */
export async function getListRentRequestCompleted(
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  keyword,
  startDate,
  endDate,
  provinceName,
  districtName,
  wardName
) {
  const url = `services/clientservice/api/listRentRequestCompleted`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keyword,
      provinceName,
      districtName,
      wardName,
      startDate,
      endDate,
    },
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
 * Tìm kiếm và xem danh sách (yêu cầu thuê) Đã hủy được phân trang
 */
export async function getListRentRequestCancel(
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  keyword,
  startDate,
  endDate,
  provinceName,
  districtName,
  wardName
) {
  const url = `services/clientservice/api/listRentRequestCancel`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keyword,
      provinceName,
      districtName,
      wardName,
      startDate,
      endDate,
    },
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
 * Tìm kiếm và xem danh sách hợp đồng
 */
export async function getAllContracts(
  page = 0,
  size = 20,
  sort = "ASC",
  keyword,
  contractStatus,
  startDateOfTheCreateDate,
  endDateOfTheCreateDate,
  startDateOfTheStartDate,
  endDateOfTheStartDate,
  startDateOfTheExpirationDate,
  endDateOfTheExpirationDate
) {
  const url = "services/clientservice/api/pageContract";
  const params = {
    page,
    size,
    sort,
    keyword,
    contractStatus,
    startDateOfTheCreateDate,
    endDateOfTheCreateDate,
    startDateOfTheStartDate,
    endDateOfTheStartDate,
    startDateOfTheExpirationDate,
    endDateOfTheExpirationDate,
  };
  return API.get(url, { params })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

/**
 * Tạo hợp đồng cho yêu cầu thuê mới
 */
export async function createContract(data) {
  const url = "services/clientservice/api/create/contract";

  return API.post(url, data)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Cập nhật hợp đồng cho yêu cầu thuê mới
 */
export async function updateContract(contractId, rentRequestId, expirationDate) {
  const url = `services/clientservice/api/update/contract/{id}`;
  const params = {
    id: contractId,
    rentRequestId: rentRequestId,
    expirationDate: expirationDate,
  };

  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Gia hạn hợp đồng cho yêu cầu thuê mới
 */
export async function extendForContract(data) {
  const url = `services/clientservice/api/contractExtension/{id}`;
  const params = {
    id: data.id,
    expirationDate: data.expirationDate,
  };

  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xem chi tiết hợp đồng cho yêu cầu thuê mới
 */
export async function getContractDetail(id) {
  const url = `services/clientservice/api/details-contracts/${id}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xem chi tiết danh sách yêu cầu thuê cho hợp đồng
 */
export async function getListRentRequestforUpdateContract(
  number = 0,
  size = 20,
  sort = "DESC",
  all,
  userId,
  contractId
) {
  const url = `services/clientservice/api/findRentRequestByUserId`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: all,
      },
      userId,
      contractId,
    },
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
 * Xem chi tiết danh sách thiết bị thuê cho hợp đồng
 */
export async function getListRentDeviceforContract(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  all = false,
  keyword,
  contractId
) {
  const url = `services/productservice/api/findAllNotRentalDeviceByContractId`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: all,
      },
      keyword,
      contractId,
    },
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
 * Hủy hợp đồng cho yêu cầu thuê mới
 */
export async function cancelContract(id, cancellationReason) {
  const url = `services/clientservice/api/adminEnterReasonCancellation/` + id;
  const param = {
    cancellationReason,
  };

  return API.patch(url, param)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Hủy hợp đồng (Role Khách Hàng)
 */
export async function cancelContractForClient(id, cancellationReason) {
  const url = `services/clientservice/api/cancel-contract/${id}`;
  const param = {
    cancellationReason,
  };

  return API.post(url, param)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lý Do Hủy hợp đồng ở trạng thái chờ hủy
 */
export async function reasonAgreeCancelContract(id) {
  const url = `services/clientservice/api/adminCancelTheContract/` + id;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lý Do Từ Chối Hủy hợp đồng ở trạng thái chờ hủy
 */
export async function reasonRefuseCancelContract(id, cancellationReason) {
  const url = `services/clientservice/api/reasonForRefusal/` + id;
  const param = {
    cancellationReason,
  };
  return API.patch(url, param)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy lý Hủy hợp đồng ở trạng thái chờ hủy
 */
export async function getReasonCancellation(id) {
  const url = `services/clientservice/api/loadReasonCancellation/` + id;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Phát sinh hóa đơn và gởi cho khách hàng
 */
export async function billRentRequset(rentRequestId, data) {
  const url = `services/billingservice/api/bill-rent-request?rentRequestId=${rentRequestId}`;
  const params = {
    billPeriod: data.billPeriod,
    timeForPayment: data.timeForPayment,
    dateForPayment: data.dateForPayment,
    paymentMode: data.paymentMode,
    prepayment: data.prepayment,
    content: data.content,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Gửi hóa đơn(SMS)
 */
export async function SmsBillRentRequest(billId) {
  const url = `services/billingservice/api/notification-sms?billId=${billId}`;
  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Chi tiết hóa đơn
 */
export async function getBillDetail(billCode) {
  const url = `services/billingservice/daikin-detail-bill-contract/${billCode}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * nhập thiết bị vào kho bằng CSV
 */
export async function uploadDeviceDetailsCSV(userId, inventoryId, file) {
  const params = new FormData();
  params.append("file", file);
  const url = `services/productservice/api/uploadDeviceDetailsCSVNew?userId=${userId}&inventoryId=${inventoryId}`;

  return API.post(url, params, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Cập nhật yêu cầu thuê sau khi khách hàng thanh toán
 */
export async function updateRentalRequest(rentCode) {
  const url = `services/clientservice/update-rental-request/${rentCode}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy danh sách các kho
 */
export async function getInventoriesPage(
  page = 0,
  size = 10,
  sort = null,
  keyword = null,
  inventoryStatus = null,
  provinceName = null
) {
  const url = `services/inventoryservice/api/inventories-page?`;
  const params = {
    page,
    size,
    sort,
    keyword,
    inventoryStatus,
    provinceName,
  };

  return API.get(url, { params })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy danh sách kho
 */
export async function getInventoriesList() {
  const url = `services/inventoryservice/api/inventories-list`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Thêm mới kho hàng
 */
export async function createInventory(data) {
  const url = `services/inventoryservice/api/inventories-create`;

  return API.post(url, data)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}
/**
 * chi tiết kho hàng
 */
export async function inventoryDetail(id) {
  const url = `services/inventoryservice/api/inventories-details/${id}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * cập nhật kho hàng
 */
export async function updateInventoryDetail(data) {
  const url = `services/inventoryservice/api/inventories-update`;

  return API.patch(url, data)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * cập nhật kho hàng
 */
export async function getAllHistoryInventory(
  inventoryCode,
  number = 0,
  size = 10,
  sort = "receiptCode,ASC",
  receiptCode = null,
  historyType = null,
  startDate,
  endDate
) {
  const url = `services/inventoryservice/api/getALLHistoryInventory/{inventoryCode}?inventoryCode=${inventoryCode}`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      receiptCode: receiptCode,
      historyType: historyType,
      startDate: startDate,
      endDate: endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * danh sách thiết bị trong kho
 */
export async function getListDeviceInventory(
  inventoryId,
  number = 0,
  size = 10,
  sort = "id,ASC",
  keyword,
  rentStatus,
  deviceStatus
) {
  const url = `services/productservice/api/listDeviceInventory?inventoryId=${inventoryId}`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      rentStatus: rentStatus,
      deviceStatus: deviceStatus,
      keyword: keyword,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xem chi tiết phiếu nhập xuất kho
 */
export async function getDetailHistoryInventory(
  receiptCode,
  number = 0,
  size = 10,
  sort = "reciptCode,ASC"
) {
  const url = `services/inventoryservice/api/getDetailHistoryInventoryByReceiptCode?receiptCode=${receiptCode}`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * xóa thiết bị trong kho
 */
export async function deleteInventoryDevice(deviceDetailId, reason, inventoryId) {
  const url = `services/productservice/api/delete/listDeviceDetailByInventoryId`;
  const params = {
    inventoryId: inventoryId,
    reason: reason,
    deviceDetailId: deviceDetailId,
  };
  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function getImportExcelForm() {
  const url = `services/productservice/api/import-excel-form`;
  return API.get(url, { responseType: "blob" })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy danh sách tên của các kho
 */
export async function getAllInventoryName() {
  const url = `services/inventoryservice/api/getAllInventoryName`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy danh sách các thiết bị trong yêu cầu thuê
 */
export async function getDeviceInRentRequest(rentRequestId) {
  const url = `services/clientservice/api/device-in-rent-request/${rentRequestId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Tìm kiếm thiết bị trong kho 1
 */
export async function getAllDeviceByRentRequestId(rentRequestId) {
  const url = `services/clientservice/api/findAllDeviceBy/${rentRequestId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Tìm kiếm thiết bị trong kho 2
 */
export async function getDeviceInventoryByRentRequestId(
  rentRequestId,
  number = 0,
  size = 10,
  sort = "id,ASC",
  rentStatus,
  deviceStatus,
  inventoryId,
  deviceId,
  keyword
) {
  const url = `services/productservice/api/getDeviceInventoryByRentRequestId?rentRequestId=${rentRequestId}`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      rentStatus: rentStatus,
      deviceStatus: deviceStatus,
      inventoryId: inventoryId,
      deviceId: deviceId,
      keyword: keyword,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Gán thiết bị trong kho cho 1 yêu cầu thuê mới đã thanh toán
 */
export async function addDeviceInRentRequests(listDevice) {
  const url = `services/productservice/api/addDeviceInRentRequests`;

  return API.patch(url, listDevice)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Hoàn Thành kiểm kho
 */
export async function completeCheckInventory(rentRequestId) {
  const url = `services/clientservice/api/complete-check-inventory/${rentRequestId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xe vận chuyển
 */
export async function transportNextSteam(rentRequestId) {
  const url = `services/clientservice/api/transport-next-stream/${rentRequestId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Thanh toán hóa đơn
 */
export async function paidBillAndRent(billId) {
  const url = `services/billingservice/api/paid-update-bill-and-rent?billId=${billId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh sách thiết bị của yêu cầu thuê đã được gán ( màn hình thiết bị cho thuê)
 */
export async function pageRentalDevice(
  rentRequestId,
  number = 0,
  size = 10,
  sort = "rentRequestId,ASC"
) {
  const url = `services/productservice/api/pageRentalDevice`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      rentRequestId,
    },
  };

  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xóa 1 thiết bị của yêu cầu thuê đã được gán ( màn hình thiết bị cho thuê)
 */
export async function deleteDetailsDeviceAssigned(deviceDetailId, rentRequestId) {
  const url = `services/clientservice/api/delete-details-device-assigned/${deviceDetailId}/${rentRequestId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Gởi yêu cầu qua hệ thống giao nhận hàng cho yêu cầu giao thiết bị
 */
export async function getListBillRentUser(
  rentRequestId,
  number = 0,
  size = 10,
  sort = "string",
  keywords,
  paymentStatus,
  paymentMode,
  startDateCreatedDate,
  endDateCreatedDate,
  startDateDateForPayment,
  endDateDateForPayment,
  startDateTimeForPayment,
  endDateTimeForPayment
) {
  const url = `services/billingservice/api/list-rent-user/${rentRequestId}`;
  const params = {
    billUserFilter: {
      page: {
        number,
        size,
        sort,
      },
      keywords,
      paymentStatus,
      paymentMode,
      startDateCreatedDate,
      endDateCreatedDate,
      startDateDateForPayment,
      endDateDateForPayment,
      startDateTimeForPayment,
      endDateTimeForPayment,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Gởi yêu cầu qua hệ thống giao nhận hàng cho yêu cầu giao thiết bị
 */
export async function getListTransport(
  number = 0,
  size = 10,
  sort = "rentRequestId,ASC",
  keyword,
  startDate,
  endDate,
  status
) {
  const url = `services/clientservice/api/listTransport`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      status: status,
      keyword: keyword,
      startDate: startDate,
      endDate: endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Cập nhật tình trạng thiết bị
 */
export async function getDetailRequestClient(rentCode) {
  const url = `services/clientservice/detail-request-client/${rentCode}`;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Hệ thống giao nhận hàng sẽ gởi thông tin tới hệ thống PAYG qua API sau khi việc giao hàng hoàn tất để PAYG cập nhật trạng thái cho thiết bị được giao
 */
export async function updateTransportStatus(id, transportStatus) {
  const url = `services/clientservice/api/update-transport-status`;
  const params = {
    id,
    transportStatus,
  };
  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * danh sách cài đặt thiết bị
 */
export async function getPageDeviceModel(page, size, sort, deviceName, status) {
  const url = `services/productservice/api/pageDeviceModel`;
  const params = {
    page,
    size,
    sort,
    deviceName,
    status,
  };
  return API.get(url, { params })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * danh sách tất cả cài đặt thiết bị
 */
export async function getAllDeviceModel() {
  const url = `services/productservice/api/findAllDevice`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * danh sách tất cả model thiết bị trong xem chi tiết thiết bị
 */
export async function getAllDeviceModelDetail() {
  const url = `services/productservice/api/listModelDevice`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * danh sách khấu hao thiết bị
 */
export async function getAllDepreciationDeviceDetail(deviceDetailId) {
  const url = `services/productservice/api/getAllDepreciationDeviceDetailId?deviceDetailId=${deviceDetailId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Lấy giá trị khấu hao cũ
 */
export async function getOldDepreciationValue(deviceDetailId) {
  const url = `services/productservice/api/oldValueDeviceDetailByIdDeviceDetailId?deviceDetailId=${deviceDetailId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Cập nhật giá trị khấu hao
 */
export async function updateDepreciationAssessment(deviceDetailId, residualValue) {
  const url = `services/productservice/api/updateDepreciationAssessment?deviceDetailId=${deviceDetailId}&residualValue=${residualValue}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Nhập thiết bị vào kho
 */
export async function addDeviceIntoInventory(
  userId,
  deviceDetailCode,
  deviceName,
  serial,
  inventoryId,
  noteDevice,
  residualValue,
  image
) {
  const url = `services/productservice/api/addDeviceIntoInventory?userId=${userId}`;
  const params = {
    deviceDetailCode,
    deviceName,
    serial,
    inventoryId,
    noteDevice,
    residualValue,
    image,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}
/**
 * thêm mới cài đặt thiết bị
 */
export async function addDeviceModel(
  deviceName,
  sku,
  wattage,
  model,
  image,
  minimumRentalPeriod,
  maintenancePeriod,
  yearOfManufacture,
  note
) {
  const url = `services/productservice/api/addDeviceModel`;
  const params = {
    deviceName,
    sku,
    wattage,
    model,
    image,
    minimumRentalPeriod,
    maintenancePeriod,
    yearOfManufacture,
    note,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * cập nhật cài đặt mẫu thiết bị
 */
export async function updateDeviceModel(
  deviceId,
  deviceName,
  sku,
  wattage,
  model,
  image,
  minimumRentalPeriod,
  maintenancePeriod,
  yearOfManufacture,
  note
) {
  const url = `services/productservice/api/updateDeviceModel/${deviceId}`;
  const params = {
    deviceName,
    sku,
    wattage,
    model,
    image,
    minimumRentalPeriod,
    maintenancePeriod,
    yearOfManufacture,
    note,
  };
  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * lấy thông tin chi tiết mẫu thiết bị
 */
export async function detailsDeviceModel(id) {
  const url = `services/productservice/api/deviceModelDetails/${id}`;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * xem chi tiết 1 chi nhánh hoặc doanh nghiệp nếu user id đang login là ROLE_ADMIN_BRAND hoặc ROLE_STAFF
 * _BRAND
 */
export async function getDaikinBranch(userId) {
  const url = `services/clientservice/api/daikin-branch/${userId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * xem chi tiết 1 chi nhánh hoặc doanh nghiệp nếu user id đang login là ROLE_ADMIN_BRAND hoặc ROLE_STAFF
 * _BRAND
 */
export async function getStaffDaikinClient(userId) {
  const url = `/services/clientservice/api/staff-daikin-client/${userId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function acceptRentRequest(id) {
  const url = `/services/clientservice/api/updateStatusByIdAccepted?rentRequestId=${id}`;
  //   const params = { rentRequestId: id };
  return API.put(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function rejectRentRequest(id, note_request) {
  const url = `/services/clientservice/api/updateStatusByIdNotAccept?rentRequestId=${id}`;
  return API.put(url, note_request)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// button huy yeu cau thue moi
export async function requestRejectButton(id, note_request) {
  const url = `/services/clientservice/api/request-reject-button/${id}`;
  const params = note_request;
  return API.put(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// huy yeu cau bao tri
export async function rejectMaintainRequest(id) {
  const url = `/services/notificationservice/api/deleteRequestMaintainServiceNoticeFromSetUpSystem?rentRequestId=${id}`;
  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function getListBill(
  number = 0,
  size = 20,
  sort = "id,asc",
  all = false,
  keywords,
  billStatus,
  billPeriod,
  userID
) {
  const userId = userID ? `?userId=${userID}` : "";
  const url = `services/billingservice/api/bill/list` + userId;
  const params = {
    billFilter: {
      page: {
        number: number,
        size,
        sort,
        all: all,
      },
      keywords,
      billStatus,
      billPeriod,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
export async function getBillDetails(billID) {
  const url = `services/clientservice/api/bill-detail?billId=${billID}`;
  const params = {
    filter: {
      page: {
        number: 0,
        size: 10,
        sort: "rentRequestId,ASC",
        all: true,
      },
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function updateRequestAndNoticeTransport(userId, params) {
  const url = `services/notificationservice/api/sendNoticeToCheckTransportSystem?userIdEmployee=${userId}`;
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getPriceList(query) {
  const url = "services/clientservice/api/listSubscriptionFee";
  const params = {
    feeFilter: {
      ...query,
    },
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
 * Danh Sách Yêu Cầu Trả Máy
 */
export async function rentRequestReturnDevice(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  provinceName,
  districtName,
  wardName,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/rent-request-return-device`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      provinceName,
      districtName,
      wardName,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Chi Tiết Yêu Cầu Trả Máy
 */
export async function rentRequestReturnDeviceDetail(rentCode) {
  const url = `services/clientservice/api/detail-rent-return?rentCode=${rentCode}`;
  const params = {
    filter: {
      page: {
        number: 0,
        size: 20,
        sort: "rentCode, DESC",
        all: false,
      },
      startDate: null,
      endDate: null,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// update Yêu cầu trả máy vận hành
export async function updateRentReturnRequest(rentCode, noteRequest) {
  const url = `services/clientservice/api/update-request-return/${rentCode}`;
  const params = {
    noteRequest: noteRequest,
  };
  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Chuyển Đối Tác Xử Lý
 */
export async function transferPartner(rentRequestId) {
  const url = `services/notificationservice/api/send-notice-request-retake-to-setup-system?rentRequestID=${rentRequestId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Hủy Yêu Cầu Trả Máy
 */
export async function cancelReturnRequest(rentRequestId, reasonCancel) {
  const url = `services/clientservice/api/delete-rent/${rentRequestId}`;
  const params = { reasonCancel: reasonCancel };

  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Yêu cầu trả máy: Đổi status từ yêu cầu mới sang đang xử lý ( chuyển đối tác xử lý)
 */
export async function convertRent(rentCode) {
  const url = `services/clientservice/api/convert-rent/${rentCode}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Yêu Cầu Đang Xử Lý
 */
export async function getListPending(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  all = false,
  provinceName,
  districtName,
  wardName,
  status,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/rent-request-return-processing`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: all,
      },
      provinceName,
      districtName,
      wardName,
      status,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Hủy Yêu Cầu Trả Máy
 */
export async function cancelReturnRequestPending(rentRequestId, reasonCancel) {
  const url = `services/clientservice/api/delete-rent-processing/${rentRequestId}`;
  const params = { reasonCancel: reasonCancel };

  return API.patch(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Đánh Giá Thiết Bị
 */
export async function getListDeviceEvaluate(
  number = 0,
  size = 20,
  sort = "rentRequestId,DESC",
  all = false,
  status,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/rent-request-return-waiting-review`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: all,
      },
      status,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Đánh Giá Thiết Bị
 */
export async function getRequestListComplete(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  all = false,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/rent-request-return-completed`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: all,
      },
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Hoàn Tất Yêu Cầu Đánh Giá Thiết Bị
 */
export async function updateRecallRequestToComplete(rentRequestId) {
  const url = `services/clientservice/api/updateRecallRequestToComplete?rentRequestId=${rentRequestId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Load Thông Tin Tạo Hóa Đơn Đánh Giá Thiết Bị
 */
export async function getBillDepreciationBeforeCreate(rentRequestId) {
  const url = `services/billingservice/api/getBillDepreciationBeforeCreate?rentRequestId=${rentRequestId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Load Thông Tin Cập Nhật Hóa Đơn Đánh Giá Thiết Bị
 */
export async function getInforBillBeforUpdate(rentRequest, billId) {
  const url = `services/billingservice/api/get-info-bill-before-update?rentRequest=${rentRequest}&billId=${billId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Tạo Hóa Đơn Đánh Giá Thiết Bị
 */
export async function createBillDepreciation(rentRequestId, money, note) {
  const url = `services/billingservice/api/createBillDepreciation?rentRequestId=${rentRequestId}&totalPayment=${money}&note=${note}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Cập Nhật Hóa Đơn Đánh Giá Thiết Bị
 */
export async function updateBillDepreciation(rentRequestId, billId, money, note) {
  const url = `services/billingservice/api/update-bill-depreciation`;
  const params = {
    rentRequestId,
    billId,
    totalPayment: money,
    note: note,
  };

  return API.put(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Cập Nhập Trạng Thái Hóa Đơn Đánh Giá Thiết Bị
 */
export async function updateStatusBillDepreciation(billId) {
  const url = `services/billingservice/api/updateStatusBillDepreciation?billId=${billId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Yêu Cầu Đã Hủy
 */
export async function getRequestListCancel(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  all = false,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/rent-request-return-cancel`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Thiết Bị Thu Hồi
 */
export async function getRecallDeviceDetails(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  all = false,
  rentRequestId
) {
  const url = `services/productservice/api/pageRecallDeviceDetails`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: all,
      },
      rentRequestId,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Đánh Giá Khấu Hao Thiết Bị Thu Hồi
 */
export async function oldValueDeviceDetailByIdDeviceDetailId(deviceDetailId) {
  const url = `services/productservice/api/oldValueDeviceDetailByIdDeviceDetailId?deviceDetailId=${deviceDetailId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Tạo Đánh Giá Khấu Hao Thiết Bị Thu Hồi
 */
export async function createRecordDepreciation(deviceDetailId, rentRequestId, residualValue) {
  const url = `services/productservice/api/createRecordDepreciation?deviceDetailId=${deviceDetailId}&rentRequestId=${rentRequestId}&residualValue=${residualValue}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Hóa Đơn
 */
export async function getRecallBill(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  keyword,
  rentRequestId
) {
  const url = `services/billingservice/api/pageRecallBill`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      keyword,
      rentRequestId,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Đánh Giá Khấu Hao
 */
export async function createImportGoodsReceipt(rentRequestId, deviceDetailId, userId) {
  const url = `services/productservice/api/createImportGoodsReceipt?rentRequestId=${rentRequestId}&deviceDetailId=${deviceDetailId}&userId=${userId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// -----------------------------API QUẢN LÝ THIẾT BỊ-----------------------------//
/**
 * Danh Sách Thiết Bị Đang Cho Thuê
 */
export async function getDeviceInventoryRented(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  rentStatus,
  deviceStatus,
  keyword,
  startDate,
  endDate
) {
  const url = `services/productservice/api/getALLDeviceInventoryRented`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      rentStatus,
      deviceStatus,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Thiết Bị (Role Khách Hàng)
 */
export async function getlistDevice(
  number = 0,
  size = 20,
  sort = "id,DESC",
  all,
  userId,
  status,
  keyword,
  startDate,
  endDate
) {
  const url = `services/productservice/api/listDevice?userId=${userId}`;
  const params = {
    deviceFilter: {
      page: {
        number,
        size,
        sort,
        all: all,
      },
      status,
      keyword,
      startDate,
      endDate,
    },
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
 * Xem Chi Tiết Thông Tin Thiết Bị (Role Khách Hàng)
 */
export async function getDeviceInforDetail(deviceDetailId) {
  const url = `services/productservice/api/deviceDetail/${deviceDetailId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xem Chi Tiết Thông Tin Thống Kê Thiết Bị (Role Khách Hàng)
 */
export async function getStatisticalDeviceDetail(deviceDetailId) {
  const url = `services/productservice/api/getDeviceIdRentRequest/${deviceDetailId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Xóa Thiết Bị Trong Danh Sách Thiết Bị Đang Cho Thuê
/**
 *
 * @param {number} deviceDetailId
 * @returns {standardResponse}
 */
export async function deleteDevice(deviceDetailId) {
  const url = `services/productservice/api/deleteDeviceDetailBydeviceDetailId?deviceDetailId=${deviceDetailId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Xóa Thiết Bị Trong Danh Sách Quản Lý Thiết Bị Đang Cho Thuê
/**
 *
 * @param {number} deviceDetailId
 * @returns {standardResponse}
 */
export async function deleteDeviceDetail(deviceDetailId) {
  const url = `services/productservice/api/deleteDeviceDetailBydeviceDetailId`;

  return API.post(url, deviceDetailId)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Xem Chi Tiết Thiết Bị Đang Cho Thuê
 */
export async function getDeviceDetailsByDeviceDetailCode(deviceDetailCode) {
  const url = `services/productservice/api/getDeviceDetailsByDeviceDetailCode?deviceDetailCode=${deviceDetailCode}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

//Cập Nhật Thiết Bị Đang Cho Thuê
/**
 *
 * @param {object} data
 * @param {string} deviceDetailCode
 * @returns {standardResponse}
 */
export async function updateDeviceDetailByDeviceDetailCode(deviceDetailCode, data, listImage) {
  const url = `services/productservice/api/updateDeviceDetailByDeviceDetailCode/{deviceDetailCode}?deviceDetailCode=${deviceDetailCode}`;
  const { deviceInfor } = data;
  const params = {
    note: deviceInfor.note,
    serial: deviceInfor.serial,
    inventoryCode: deviceInfor?.warehouse,
    deviceStatus: deviceInfor.deviceStatus,
    model: deviceInfor.modal,
    deviceControl: deviceInfor.controlAbilityUpdate,
    deviceDetailCode: deviceInfor.deviceId,
    maintainceExpect: deviceInfor.expectedMaintainDate,
    addressUpdate: {
      street: deviceInfor.addressDTO.street,
      countryName: deviceInfor.addressDTO.countryName,
      provinceName: deviceInfor.addressDTO.provinceName,
      districtName: deviceInfor.addressDTO.districtName,
      wardName: deviceInfor.addressDTO.wardName,
      placeName: deviceInfor.addressDTO.placeName,
    },

    newImageList: listImage,
  };

  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

//Cập Nhật Địa Chỉ Thiết Bị Đang Cho Thuê
/**
 *
 * @param {object} data
 * @returns {standardResponse}
 */
export async function updatePopupAddress(data, deviceDetailCode) {
  const url = `services/productservice/api/updatePopupAddress?deviceDetailCode=${deviceDetailCode}`;
  const params = {
    addressFromDeviceCheck: data.addressFromDeviceCheck,
    requestCode: data.requestCode,
    addressDTO: {
      street: data.addressDTO.street,
      countryName: data.addressDTO.countryName,
      provinceName: data.addressDTO.provinceName,
      districtName: data.addressDTO.districtName,
      wardName: data.addressDTO.wardName,
      placeName: data.addressDTO.placeName,
    },
  };

  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Sự Cố & Bảo Trì
 */
export async function getMaintainHistoryByDeviceDetailId(
  number = 0,
  size = 20,
  sort = "id,DESC",
  all,
  serviceType,
  keyword,
  startDateCreate,
  endDateCreate,
  startDate,
  endDate,
  deviceDetailId
) {
  const url = `services/productservice/api/getMaintainHistoryByDeviceDetailId?deviceDetailId=${deviceDetailId}`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: all,
      },
      serviceType,
      keyword,
      startDateCreate,
      endDateCreate,
      startDate,
      endDate,
    },
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
 * Danh Sách Thiết Bị Đang Cho Thuê Và Đến Hạn Bảo Trì
 */
export async function getMaintenancePeriodList(
  number = 0,
  size = 20,
  sort = "",
  keywords,
  status,
  startDate,
  endDate
) {
  const url = `services/productservice/api/send-maintenance-req`;
  const params = {
    deviceFilter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      keywords,
      status,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Gửi Yêu Cầu Bảo Trì
/**
 *
 * @param {number} deviceDetailId
 * @returns {standardResponse}
 */
export async function sendMaintenanceNoticeToSetupSystem(deviceDetailId) {
  const url = `services/notificationservice/api/sendMaintenanceNoticeToSetupSystem?deviceDetailId=${deviceDetailId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Nhắc nhở bộ phận bảo trì
export async function receiveMaintenanceNotiFromSetupSystem(
  deviceDetailId,
  rentRequestId,
  serviceStatus,
  maintaincer,
  maintaincerId
) {
  const url =
    "services/notificationservice/api/receiveMaintenanceNoticeFromSetupSystem/" + deviceDetailId;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

/**
 * Danh Sách Cảnh Báo
 */
export async function getWarningList(
  number = 0,
  size = 20,
  sort = "createDate,DESC",
  keyword,
  startDate,
  endDate,
  deviceStatus
) {
  const url = `services/productservice/api/getAllDeviceMoveWarning`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      keyword,
      startDate,
      endDate,
      deviceStatus,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Gửi Yêu Cầu Kiểm Tra Vị Trí Cho Một Cảnh Báo
/**
 *
 * @param {number} deviceDetailId
 * @returns {standardResponse}
 */
export async function sendNoticeToCheckDeviceSystem(deviceDetailId) {
  const url = `services/notificationservice/api/sendNoticeToCheckDeviceSystem?deviceDetailId=${deviceDetailId}`;

  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Ghi nhận trạng thái kiểm tra thiết bị trừ bộ phận lắp đặt/ bảo trì
export async function receiveStatusCheckDeviceFromSetupSystem(
  deviceDetailId,
  status,
  maintaincer,
  maintaincerId,
  currentAddress,
  noteDevice,
  imageList
) {
  const url = `services/notificationservice/receiveStatusCheckDeviceFromSetupSystem`;
  const params = {
    deviceDetailId,
    status,
    maintaincer,
    maintaincerId,
    currentAddress,
    noteDevice,
    imageList,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}
// ----------------------------------------------------------------------//

export async function getListOfBill(
  page = 0,
  size = 10,
  sort = "id,asc",
  billCode,
  billStatus,
  billPeriod
) {
  const url = `services/billingservice/api/bill/list-of-bill`;
  const params = {
    filter: {
      page: { number: page, size, sort, all: false },
      billStatus,
      billCode,
      billPeriod,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// -----------------------------API DỊCH VỤ BẢO TRÌ-----------------------------//

// Lấy Danh Sách Yêu Cầu Bảo Trì Sửa Chữa
export async function getMaintainList(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  all = false,
  serviceStatus,
  serviceType,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/maintainService`;
  const params = {
    maintainServiceFilter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      serviceStatus,
      serviceType,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Hủy Yêu Cầu Bảo Trì Sửa Chữa
export async function cancelMaintainRequest(rentRequestId) {
  const url =
    `services/notificationservice/api/deleteRequestMaintainServiceNoticeFromSetUpSystem?rentRequestId=` +
    rentRequestId;

  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Nhận Yêu Cầu Bảo Trì Sửa Chữa
export async function acceptMaintainRequest(rentRequestId) {
  const url =
    `services/notificationservice/api/sendMaintainServiceNoticeFromSetUpSystem?rentRequestId=` +
    rentRequestId;

  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Nhận Yêu Cầu Bảo Trì Sửa Chữa
export async function sendSMSReceiveNotiMaintainService(rentRequestId) {
  const url = `services/notificationservice/api/sendSMSReceiveNotificationMaintainService?rentRequestId=${rentRequestId}`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Xem Chi Tiết Yêu Cầu Bảo Trì Sửa Chữa (service type: Bao tri)
// export async function viewDetailMaintainRequest(rentRequestId) {
//   const url = `services/clientservice/api/maintainServiceByIdRentRequest/` + rentRequestId;

//   return API.get(url)
//     .then((response) => {
//       return standardResponse(true, response);
//     })
//     .catch((error) => {
//       return standardResponse(false, error.response?.data);
//     });
// }

// Xem Chi Tiết Yêu Cầu Bảo Trì Sửa Chữa (service type: Bao tri)
export async function viewDetailMaintainRequest(rentRequestId) {
  const url =
    `services/clientservice/api/maintenance-request-information?rentRequestId=` + rentRequestId;

  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// xem chi tiet yeu cau dich vu bao tri (serviceType: bảo trì định kỳ)
export async function maintenanceRequestDetail(rentRequestId, deviceDetailId) {
  const url = `services/clientservice/api/maintenance-request-detail?rentRequestId=${rentRequestId}&deviceDetailId=${deviceDetailId}`;

  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// xem chi tiet yeu cau dich vu bao tri (serviceType: kiểm tra vị trí)
export async function getCustomerDetailsRequestCheckDevice(checkRequestId, deviceDetailId) {
  const url = `services/clientservice/api/getCustomerDetailsRequestCheckDevice?checkRequestId=${checkRequestId}&deviceDetailId=${deviceDetailId}`;

  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// danh sách hóa đơn của xem chi tiết bảo trì
export async function listBillsOfCheckRequest(
  checkRequestId,
  number,
  size,
  sort,
  keywords,
  paymentStatus,
  paymentMode,
  startDateCreatedDate,
  endDateCreatedDate,
  startDateDateForPayment,
  endDateDateForPayment,
  startDateTimeForPayment,
  endDateTimeForPayment
) {
  const url = `services/billingservice/api/list-bills-of-check-request/${checkRequestId}`;

  const params = {
    billUserFilter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keywords,
      paymentStatus,
      paymentMode,
      startDateCreatedDate,
      endDateCreatedDate,
      startDateDateForPayment,
      endDateDateForPayment,
      startDateTimeForPayment,
      endDateTimeForPayment,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Lấy Danh Sách Đang Xử Lý Yêu Cầu Bảo Trì
export async function getProcessingList(
  number = 0,
  size = 20,
  sort = "createdDate,DESC",
  all = false,
  status,
  serviceType,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/maintain-service-information`;
  const params = {
    maintainServiceInformationFilter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      status,
      serviceType,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Hoàn tất Yêu Cầu Bảo Trì Sửa Chữa
export async function updateStatusMaintainServiceSuccess(rentRequestId) {
  const url = `services/clientservice/api/update-status-maintain-service-success/` + rentRequestId;

  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Lấy Danh Sách Đang Xử Lý Yêu Cầu Bảo Trì
export async function getMaintainServiceHistoryList(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  all = false,
  serviceType,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/maintain-service-history`;
  const params = {
    maintainServiceHistoryFilter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      serviceType,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Lấy Danh Sách ĐÃ hủy Yêu Cầu Bảo Trì
export async function getCancelMaintainServiceHistoryList(
  number = 0,
  size = 20,
  sort = "rentRequestId,ASC",
  serviceType,
  keyword,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/maintain-service-cancelation-history`;
  const params = {
    maintainServiceHistoryFilter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: false,
      },
      serviceType,
      keyword,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getInstallDevice(
  number = 0,
  size = 20,
  sort = "ids,asc",
  all = false,
  status = null,
  keyword = ""
) {
  const url = "services/productservice/api/device-installation-package-page";
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all,
      },
      status,
      keyword,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function deleteDeviceInstallationPackage(installationPackageId) {
  const url = `services/productservice/api/delete/device-installation-package/${installationPackageId}`;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function updateDeviceInstallationPackage(installationPackageId) {
  const url = `services/productservice/api/update-status-device-installation-package/${installationPackageId}`;

  return API.patch(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function getAuxiliaryDevices(
  page = 0,
  size = 20,
  sort = "id,DESC",
  nameSearch,
  statusSearch
) {
  const url = "services/productservice/api/auxiliary-device-page";
  const params = {
    page: page,
    size: size,
    sort: sort,
    nameSearch: nameSearch,
    statusSearch: statusSearch,
  };
  return API.get(url, { params })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function deleteAuxiliaryDevice(idList) {
  const url = `services/productservice/api/auxiliary-device-delete/${idList}`;
  return API.delete(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function pauseAuxiliaryDevice(idList) {
  const url = `services/productservice/api/auxiliary-device-pause-status/${idList}`;
  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Lấy Danh Sách Hóa Đơn Tạm Ứng
export async function getAdvanceBill(id) {
  const url = `services/clientservice/api/bill-advance?billId=${id}`;
  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Lấy Danh Sách Hóa Đơn Phát Sinh
export async function getIncurredBill(id) {
  const url = `services/clientservice/api/bill-incurred?billId=${id}`;
  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// Lấy Thông tin Hóa Đơn bồi thường
export async function getIndemnifyBill(id) {
  const url = `services/clientservice/api/bill-indemnify?billId=${id}`;
  return API.post(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function returnDevicesRequest(
  userId,
  keyword,
  number = 0,
  size = 20,
  sort = "id,ASC"
) {
  const url = `services/productservice/api/list-rented-devices?userId=${userId}`;
  const params = {
    filter: {
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
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getReportClient() {
  const url = `services/clientservice/api/getReportClient`;
  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function getAlertMovementAndProblem(type, number, size, sort) {
  const url = `services/productservice/api/getListMessageOfDevice?type=${type}`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: true,
      },
    },
  };

  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function addReturnDevicesRequest(data) {
  const url = `services/clientservice/api/add-return-devices-request`;

  return API.post(url, data)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function updateReturnDevicesRequest(data, rentRequestId) {
  const url = `services/clientservice/api/update/return-devices-request/${rentRequestId}`;

  return API.patch(url, data)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getListDeviceDetailMaintenance(data) {
  const url = `services/productservice/api/getListDeviceDetailMaintenance`;
  const params = {
    filter: {
      page: { number: data.number, size: data.size, sort: "deviceDetailCode,ASC", all: false },
      deviceDetailCode: data.keyword,
      startDate: data.startDate,
      endDate: data.endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getUsedTimeList(number, size, sort, keyword, status, startDate, endDate) {
  const url = `services/productservice/api/list-device-detail-usage-time`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      deviceStatus: status,
      startDate: startDate,
      endDate: endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function exportUsedTimeList(number, size, sort, keyword, status, startDate, endDate) {
  const url = `services/productservice/api/excel/list-device-detail-usage-time`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      deviceStatus: status,
      startDate: startDate,
      endDate: endDate,
    },
  };
  return API.post(url, params, { responseType: "blob" })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getAllDevicesType() {
  const url = `services/productservice/api/getAllDeviceTypeSubscriptionFeeByWattage`;

  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
export async function getWattageByDeviceTypes(query) {
  const url = `services/productservice/api/getAllDeviceTypeTakeWattage/?${query}`;
  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
export async function getSubFeeType(query) {
  const url = `services/clientservice/api/findAllSubscriptionFeeType`;
  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getTimeUnit() {
  const url = `services/clientservice/api/findAllTimeUnit`;
  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getIntervalUnit() {
  const url = `services/clientservice/api/findAllIntervalUnit`;
  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function addSubScriptionFee(data) {
  const url = `services/clientservice/api/add-subscription-fee`;
  return API.post(url, data)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function pauseSubFee(id) {
  const url = `services/clientservice/api/pause-icon-sub-fee/${id}`;
  return API.put(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function deleteSubFee(id) {
  const url = `services/clientservice/api/delete-subscription-fee/${id}`;
  return API.put(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function getSubscriptionFeeById(id) {
  const url = `services/clientservice/api/getSubscriptionFeeById/${id}`;
  return API.get(url)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

export async function updateSubscriptionFee(id, data) {
  const url = `services/clientservice/api/update-subscription-fee/${id}`;
  return API.patch(url, data)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// ----------------------------------------------------------------------//

// DASHBOAD CLIENT
// Lấy Danh Sách Hóa Đơn Cần Thanh Toán

export async function getListBillHomePageClient(
  userId,
  number = 0,
  size = 20,
  sort = "ASC",
  all = false,
  keyword,
  startDatePeriod,
  endDatePeriod
) {
  const url = `services/billingservice/api/list-bill-home-page-client?userId=${userId}`;
  const params = {
    homeBillFitter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: all,
      },
      keyword,
      startDatePeriod,
      endDatePeriod,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// DASHBOAD CLIENT
// Lấy Danh Sách Yêu Cầu Thuê

export async function getListRentHomePageClient(
  userId,
  number = 0,
  size = 20,
  sort = "ASC",
  all = false,
  keyword,
  rentTypeSearch,
  startDate,
  endDate
) {
  const url = `services/clientservice/api/list-rent-home-page-client?userId=${userId}`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: all,
      },
      keyword,
      rentTypeSearch,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

//Cài Đặt Thiết Bị -- Danh Sách Thiết Bị
export async function getListDeviceDetailsByDeviceId(
  deviceId,
  number = 0,
  size = 20,
  sort = "deviceDetailsId, ASC",
  all = false,
  keywords,
  status,
  startDate,
  endDate
) {
  const url = `services/productservice/api/listDeviceDetailsByDeviceId?deviceId=${deviceId}`;
  const params = {
    filter: {
      page: {
        number: number,
        size: size,
        sort: sort,
        all: all,
      },
      keywords,
      status,
      startDate,
      endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

// danh sách quyền trong hệ thống phân quyền
export async function permissionsList() {
  const url = `services/iamservice/api/permissions-list`;
  const params = {
    page: 0,
    size: 20,
  };

  return API.get(url, { params })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// danh sách maàn hình ( form) trong hệ thống phân quyền
export async function formsList() {
  const url = `services/iamservice/api/forms-list`;
  const params = {
    page: 0,
    size: 20,
  };

  return API.get(url, { params })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// danh sách chức năng (control) trong hệ thống phân quyền
export async function controlList() {
  const url = `services/iamservice/api/controls-list`;
  const params = {
    page: 0,
    size: 20,
  };

  return API.get(url, { params })
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// danh sách chi tiết nhóm phân quyền dựa trên danh sách phân quyền, màn hình và chức năng hệ thống
export async function listDecentralizationSystem() {
  const url = `services/iamservice/api/list-decentralization-system`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

export async function changeDecentralizationSystem(data) {
  const url = `services/iamservice/api/change-decentralization-system`;
  return API.post(url, data)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Danh sách yêu cầu bồi thường
export async function listAllRentIndemnify(
  number = 0,
  size = 20,
  sort = "createdDate,DESC",
  status,
  keyword
) {
  const url = `services/clientservice/api/list-all-rent-indemnify`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      status,
      keyword,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Tạo bill theo id của y/c bồi thường
export async function indemnificationBill(indemnifyRequestId) {
  const url = `services/billingservice/api/indemnificationBill/${indemnifyRequestId}`;
  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Tạo yêu cầu bồi thường mới
export async function addRentIndemnify(rentRequestId, userId, reasonIndemnify, priceIndemnify) {
  const url = `services/clientservice/api/add-rent-indemnify`;
  const params = {
    rentRequestId,
    userId,
    reasonIndemnify,
    priceIndemnify,
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Cập nhật yêu cầu bồi thường
export async function updateRentIndemnify(rentRequestId, clientId, reason, price, indemnifyId) {
  const url = `services/clientservice/api/update-rentRequest-indemnify/${indemnifyId}`;
  const params = {
    rentRequestId,
    clientId,
    reason,
    price,
    imageLists: [],
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// xem chi tiết yêu cầu bồi thường
export async function getRentIndemnifyRequest(indemnifyId) {
  const url = `services/clientservice/api/get-indemnify-request/${indemnifyId}`;
  return API.post(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

//Báo cáo Cảnh báo di chuyển
export async function getChangeLocationList(
  number,
  size,
  sort,
  keyword,
  status,
  startDate,
  endDate
) {
  const url = `services/productservice/api/list-report-address`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      status: status,
      startDate: startDate,
      endDate: endDate,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
//Xuất Báo cáo Cảnh báo di chuyển
export async function exportChangeLocationList(
  number,
  size,
  sort,
  keyword,
  status,
  startDate,
  endDate
) {
  const url = `services/productservice/api/list-report-excel-address`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      status: status,
      startDate: startDate,
      endDate: endDate,
    },
  };
  return API.post(url, params, { responseType: "blob" })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

//Báo cáo Tồn kho
export async function getInventoryReportList(number, size, sort, keyword, provinceName, inventory) {
  const url = `services/productservice/api/page-inventory-report`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      provinceName: provinceName,
      inventory: inventory,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
//Xuất Báo cáo Tồn kho
export async function exportInventoryReportList(
  number,
  size,
  sort,
  keyword,
  provinceName,
  inventory
) {
  const url = `services/productservice/api/excel/page-inventory-report`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      provinceName: provinceName,
      inventory: inventory,
    },
  };
  return API.post(url, params, { responseType: "blob" })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

//Báo cáo Nợ xấu
export async function getBabDebtList(number, size, sort, keyword, billStatus, billPeriod) {
  const url = `services/billingservice/api/list-report-bad-debt`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      billStatus: billStatus,
      billPeriod: billPeriod,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
//Xuất Báo cáo Nợ xấu
export async function exportBabDebtList(number, size, sort, keyword, billStatus, billPeriod) {
  const url = `services/billingservice/api/list-report-excel-bad-debt`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      billStatus: billStatus,
      billPeriod: billPeriod,
    },
  };
  return API.post(url, params, { responseType: "blob" })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}

//Báo cáo Doanh thu
export async function getRevenueReportList(number, size, sort, keyword, billStatus, billPeriod) {
  const url = `services/billingservice/api/revenue-report`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      billStatus: billStatus,
      billPeriod: billPeriod,
    },
  };
  return API.post(url, params)
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
//Xuất Báo cáo Doanh thu
export async function exportRevenueReportList(number, size, sort, keyword, billStatus, billPeriod) {
  const url = `services/billingservice/api/excel/revenue-report`;
  const params = {
    filter: {
      page: { number: number, size: size, sort: sort, all: false },
      keywords: keyword,
      billStatus: billStatus,
      billPeriod: billPeriod,
    },
  };
  return API.post(url, params, { responseType: "blob" })
    .then((response) => {
      return standardResponse(true, response);
    })
    .catch((error) => {
      return standardResponse(false, error.response?.data);
    });
}
// Lấy tất cả danh sách khách hàng cho yêu cầu bồi thường
export async function getClientIndemnify(
  number = 0,
  size = 20,
  sort = "createdDate,DESC",
  keywords
) {
  const url = `services/clientservice/api/get-client-indemnify`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keywords,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

// Lấy tất cả danh sách yêu cầu bồi thường của khách hàng
export async function listRequestForIdemnify(
  number = 0,
  size = 20,
  sort = "id,desc",
  keyword,
  customerId
) {
  const url = `services/clientservice/api/list-request-for-idenmify?userId=${customerId}`;
  const params = {
    filter: {
      page: {
        number,
        size,
        sort,
        all: false,
      },
      keyword,
    },
  };
  return API.post(url, params)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

//Chart Dashboard
export async function getDashboardChart() {
  const url = `services/clientservice/api/dashboard-chart`;
  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

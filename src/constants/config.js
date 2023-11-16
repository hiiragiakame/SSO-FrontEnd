export const roles = {
  admin: "ROLE_ADMIN", //nhan vien van hanh
  employee: "ROLE_EMPLOYEE", //nhan vien van hanh (cap thap hon)
  individual: "ROLE_INDIVIDUAL", //khach hang ca nhan
  enterprise: "ROLE_ADMIN_ENTERPRISE", //khach hang doanh nghiep
  branch: "ROLE_ADMIN_BRAND", //chi nhanh
  staff: "ROLE_STAFF_BRAND", //nhan vien
};

export const genders = [
  {
    value: 1,
    label: "Nam",
  },
  {
    value: 2,
    label: "Nữ",
  },
];

export const status = [
  {
    value: "HOAT_DONG",
    label: "Hoạt động",
    color: "green",
  },
  {
    value: "TAM_DUNG",
    label: "Tạm dừng",
    color: "red",
  },
];

export const tableStatus = [
  {
    value: "YEU_CAU_MOI",
    label: "Yêu cầu mới",
    color: "blue",
  },
  {
    value: "DOI_THANH_TOAN",
    label: "Đợi thanh toán",
    color: "blue",
  },
  {
    value: "DOI_TAO_HOP_DONG",
    label: "Đợi tạo hợp đồng",
    color: "green",
  },
  {
    value: "QUA_HAN",
    label: "Quá hạn",
    color: "red",
  },
  {
    value: "CHO_KIEM_KHO",
    label: "Chờ kiểm kho",
    color: "blue",
  },
  {
    value: "HOAN_THANH_KIEM_KHO",
    label: "Hoàn thành kiểm kho",
    color: "green",
  },
  {
    value: "CHO_LAY_HANG",
    label: "Chờ lấy hàng",
    color: "purple",
  },
  {
    value: "DANG_VAN_CHUYEN",
    label: "Đang vận chuyển",
    color: "yellow",
  },
  {
    value: "DA_GIAO_HANG",
    label: "Đã giao",
    color: "green",
  },
  {
    value: "DA_GIAO",
    label: "Đã giao",
    color: "green",
  },
  {
    value: "DA_LAY_HANG",
    label: "Đã lấy hàng",
    color: "blue",
  },
  {
    value: "TRA_HANG",
    label: "Trả hàng",
    color: "red",
  },
  {
    value: "CHO_LAP_DAT",
    label: "Chờ lắp đặt",
    color: "gray",
  },
  {
    value: "DANG_LAP_DAT",
    label: "Đang lắp đặt",
    color: "yellow",
  },
  {
    value: "CHO_THANH_TOAN",
    label: "Chờ thanh toán",
    color: "blue",
  },
  {
    value: "HOAN_TAT",
    label: "Hoàn tất",
    color: "green",
  },
  {
    value: "DA_HUY",
    label: "Đã hủy",
    color: "red",
  },
  {
    value: "HOAT_DONG",
    label: "Hoạt động",
    color: "green",
  },
  {
    value: "TAM_DUNG",
    label: "Tạm dừng",
    color: "red",
  },
  {
    value: "",
    label: "",
    color: "green",
  },
  {
    value: "DA_THANH_TOAN",
    label: "Đã thanh toán",
    color: "green",
  },
  {
    value: "CHUA_THANH_TOAN",
    label: "Chưa thanh toán",
    color: "red",
  },
  {
    value: "CHUA_CO_HIEU_LUC",
    label: "Chưa có hiệu lực",
    color: "blue",
  },
  {
    value: "CO_HIEU_LUC",
    label: "Có hiệu lực",
    color: "green",
  },
  {
    value: "CHO_HUY",
    label: "Chờ hủy",
    color: "gray",
  },
  {
    value: "SAP_DEN_HAN",
    label: "Sắp đến hạn",
    color: "purple",
  },
  {
    value: "HET_HIEU_LUC",
    label: "Hết hiệu lực",
    color: "red",
  },
  {
    value: "DANG_XU_LY",
    label: "Đang xử lý",
    color: "yellow",
  },
  {
    value: "DANG_DUOC_THUE",
    label: "Đang được thuê",
    color: "green",
  },
  {
    value: "CHO_THUE",
    label: "Chờ thuê",
    color: "purple",
  },
  {
    value: "CHO_GIA_HAN",
    label: "Chờ gia hạn",
    color: "yellow",
  },

  {
    value: "DANH_GIA_THIET_BI",
    label: "Đánh giá thiết bị",
    color: "purple",
  },
  {
    value: "DA_CHO_THUE",
    label: "Đang được thuê",
    color: "green",
  },
  {
    value: "HOP_DONG_VA_TAM_UNG",
    label: "Hợp đồng và tạm ứng",
    color: "blue",
  },
  {
    value: "KIEM_KHO",
    label: "Kiểm kho",
    color: "gray",
  },
  {
    value: "VAN_CHUYEN",
    label: "Vận chuyển",
    color: "purple",
  },
  {
    value: "LAP_DAT_VA_THANH_TOAN",
    label: "Lắp đặt và thanh toán",
    color: "darkBlue",
  },
  {
    value: "ON",
    label: "Đang hoạt động",
    color: "green",
  },
  {
    value: "OFF",
    label: "Đang tạm dừng",
    color: "purple",
  },
  {
    value: "ERROR",
    label: "Đang bị lỗi",
    color: "red",
  },
  {
    value: "THUE_MOI",
    label: "Thuê mới",
    color: "transparent",
  },
  {
    value: "BAO_TRI",
    label: "Bảo trì",
    color: "transparent",
  },
  {
    value: "TRA_MAY",
    label: "Trả máy",
    color: "transparent",
  },
  {
    value: "BI_LOI",
    label: "Bị lỗi",
    color: "gray",
  },
  {
    value: "TienMat",
    label: "Tiền mặt",
    color: "transparent",
  },
  {
    value: "CHO_DUYET",
    label: "Chờ duyệt",
    color: "blue",
  },
  {
    value: "DA_DUYET",
    label: "Đã duyệt",
    color: "green",
  },
  {
    value: "MOI",
    label: "Mới",
    color: "blue",
  },
  {
    value: "TAM_NGUNG",
    label: "Tạm Ngưng",
    color: "gray",
  },
  {
    value: "",
    label: "",
    color: "transparent",
  },
];

//Bỏ
export const statusSearch = [
  {
    value: "",
    label: "Tất cả trạng thái",
  },
  {
    value: "Hoạt động",
    label: "Hoạt động",
  },
  {
    value: "Tạm ngưng",
    label: "Ngừng hoạt động",
  },
];

export const paymentMethod = [
  {
    value: "TienMat",
    label: "Tiền Mặt",
  },
  {
    value: "ViettelPay",
    label: "Viettel Pay",
  },
  {
    value: "Momo",
    label: "Momo",
  },
  {
    value: "Napas",
    label: "Napas",
  },
];

export const successCheckbox = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"),linear-gradient(310deg, #2e7d32, #2e7d32)`;
export const yellowRadio = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"),linear-gradient(310deg, #ffc000, #ffc000)`;

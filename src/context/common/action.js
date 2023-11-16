import { COMMON } from "./type";

export const setAlertMessage = (dispatch, value) => dispatch({ type: COMMON.ALERT_MESSAGE, value });
export const setLoading = (dispatch, value) => dispatch({ type: COMMON.LOADING, value });
export const setCustomerCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.CUSTOMER_CURRENT_TAB, value });
export const setCustomerManageCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.CUSTOMER_MANAGE_CURRENT_TAB, value });
export const setEmployeeCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.EMPLOYEE_CURRENT_TAB, value });
export const setRentRequestCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.RENT_REQUEST_CURRENT_TAB, value });
export const setReturnRequestCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.RETURN_REQUEST_CURRENT_TAB, value });
export const setRentDetailCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.RENT_DETAIL_CURRENT_TAB, value });
export const setReturnDetailCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.RETURN_DETAIL_CURRENT_TAB, value });
export const setDeviceDetailCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.DEVICE_DETAIL_CURRENT_TAB, value });
export const setInventoryDetailCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.INVENTORY_DETAIL_CURRENT_TAB, value });
export const setPriceListCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.PRICElIST_CURRENT_TAB, value });
export const setMainTainCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.MAINTAIN_CURRENT_TAB, value });
export const setMainTainDetailCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.MAINTAIN_DETAIL_CURRENT_TAB, value });
export const setManageDeviceCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.MANAGE_DEVICE_CURRENT_TAB, value });
export const setSettingDeviceCurrentTab = (dispatch, value) =>
  dispatch({ type: COMMON.SETTING_CURRENT_TAB, value });
export const setUrlImage = (dispatch, value) => dispatch({ type: COMMON.URL_IMAGE, value });
export const setIsStickyBtn = (dispatch, value) => dispatch({ type: COMMON.IS_STICKY_BTN, value });
export const setUnreadCount = (dispatch, value) => dispatch({ type: COMMON.COUNT_UNREAD, value });

export const clearCommon = (dispatch) => {
  setAlertMessage(dispatch, { type: "error", message: "", openAlert: false });
  setLoading(dispatch, false);
  setCustomerCurrentTab(dispatch, 0);
  setCustomerManageCurrentTab(dispatch, 0);
  setEmployeeCurrentTab(dispatch, 0);
  setRentRequestCurrentTab(dispatch, 0);
  setReturnRequestCurrentTab(dispatch, 0);
  setRentDetailCurrentTab(dispatch, 0);
  setReturnDetailCurrentTab(dispatch, 0);
  setDeviceDetailCurrentTab(dispatch, 0);
  setInventoryDetailCurrentTab(dispatch, 0);
  setMainTainCurrentTab(dispatch, 0);
  setMainTainDetailCurrentTab(dispatch, 0);
  setManageDeviceCurrentTab(dispatch, 0);
  setPriceListCurrentTab(dispatch, 0);
  setUrlImage(dispatch, "");
  setIsStickyBtn(dispatch, false);
  setSettingDeviceCurrentTab(dispatch, 0);
  setUnreadCount(dispatch, {
    YEU_CAU_THUE_MAY: {
      YEU_CAU_MOI: 0,
      HOP_DONG_TAM_UNG: 0,
      KIEM_KHO: 0,
      VAN_CHUYEN: 0,
      LAP_DAT_THANH_TOAN: 0,
      HOAN_TAT: 0,
      DA_HUY: 0,
    },
    YEU_CAU_TRA_MAY: {
      YEU_CAU_MOI: 0,
      DANG_XU_LY: 0,
      DANH_GIA_THIET_BI: 0,
      HOAN_TAT: 0,
      DA_HUY: 0,
    },
    YEU_CAU_BOI_THUONG: 0,
  });
};

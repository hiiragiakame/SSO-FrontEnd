import { COMMON } from "./type";

export function reducer(state, action) {
  switch (action.type) {
    case COMMON.ALERT_MESSAGE: {
      return { ...state, alertMessage: action.value };
    }
    case COMMON.LOADING: {
      return { ...state, loading: action.value };
    }
    case COMMON.CUSTOMER_CURRENT_TAB: {
      return { ...state, customerCurrentTab: action.value };
    }
    case COMMON.SETTING_CURRENT_TAB: {
      return { ...state, settingCurrentTab: action.value };
    }
    case COMMON.CUSTOMER_MANAGE_CURRENT_TAB: {
      return { ...state, customerManageCurrentTab: action.value };
    }
    case COMMON.EMPLOYEE_CURRENT_TAB: {
      return { ...state, employeeCurrentTab: action.value };
    }
    case COMMON.RENT_REQUEST_CURRENT_TAB: {
      return { ...state, rentRequestCurrentTab: action.value };
    }
    case COMMON.RETURN_REQUEST_CURRENT_TAB: {
      return { ...state, returnRequestCurrentTab: action.value };
    }
    case COMMON.RENT_DETAIL_CURRENT_TAB: {
      return { ...state, rentDetailCurrentTab: action.value };
    }
    case COMMON.RETURN_DETAIL_CURRENT_TAB: {
      return { ...state, returnDetailCurrentTab: action.value };
    }
    case COMMON.DEVICE_DETAIL_CURRENT_TAB: {
      return { ...state, deviceDetailCurrentTab: action.value };
    }
    case COMMON.INVENTORY_DETAIL_CURRENT_TAB: {
      return { ...state, inventoryDetailCurrentTab: action.value };
    }
    case COMMON.PRICElIST_CURRENT_TAB: {
      return { ...state, priceListCurrentTab: action.value };
    }
    case COMMON.MAINTAIN_CURRENT_TAB: {
      return { ...state, maintainCurrentTab: action.value };
    }
    case COMMON.MAINTAIN_DETAIL_CURRENT_TAB: {
      return { ...state, maintainDetailCurrentTab: action.value };
    }
    case COMMON.URL_IMAGE: {
      return { ...state, urlImage: action.value };
    }
    case COMMON.IS_STICKY_BTN: {
      return { ...state, isStickyBtn: action.value };
    }
    case COMMON.COUNT_UNREAD: {
      return { ...state, unReadCount: action.value };
    }
    case COMMON.MANAGE_DEVICE_CURRENT_TAB: {
      return { ...state, manageDeviceCurrentTab: action.value };
    }
    default: {
      return state;
    }
  }
}

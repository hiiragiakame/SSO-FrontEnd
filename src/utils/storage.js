/**
 * @return token in local storage
 */
export function getLocalToken() {
  const token = window.localStorage.getItem("token");
  return token;
}

/**
 * @return stored token in local storage
 */
export function setLocalToken(value) {
  window.localStorage.setItem("token", value);
  window.dispatchEvent(new Event("storage"));
}

/**
 * @return token in local storage
 */
export function getLocalUserInfo() {
  const info = window.localStorage.getItem("userInfo");
  return JSON.parse(info);
}

/**
 * @return stored token in local storage
 */
export function setLocalUserInfo(value) {
  window.localStorage.setItem("userInfo", JSON.stringify(value));
  window.dispatchEvent(new Event("storage"));
}

/**
 * @return stored token in local storage
 */
export function clearLocalStorage(triggerEvent) {
  window.localStorage.clear();
  if (triggerEvent) window.dispatchEvent(new Event("storage"));
}

export function setLocalEmpPermission(list) {
  window.localStorage.setItem("empPermissionList", JSON.stringify(list));
  window.dispatchEvent(new Event("storage"));
}

export function getLocalEmpPermission() {
  const empPermissionList = window.localStorage.getItem("empPermissionList");
  return JSON.parse(empPermissionList);
}

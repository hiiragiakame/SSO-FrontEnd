import { API, standardResponse } from "./middleware";

export async function getApplicationList() {
  const url = `/api/application/list`;

  return API.get(url)
    .then((response) => standardResponse(true, response))
    .catch((error) => standardResponse(false, error.response?.data));
}

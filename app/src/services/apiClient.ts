import { BACKEND_BASE_URL } from "../config";

const apiClient = (uri: string) => {
  return fetch(BACKEND_BASE_URL + uri).then(r => r.json())  
}

export default apiClient;
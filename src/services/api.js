import axios from "axios";

const apiClient = axios.create({
 baseURL: "https://65a97c89219bfa3718695671.mockapi.io/",
});

export const fetchAdverts = async ({ page = 1, limit = 12 }) => {
 const queryParams = new URLSearchParams({ page, limit });
 const query = queryParams.toString();
 const response = await apiClient.get(`/adverts?${query}`);
 return response.data;
};

export const advertsApi = {
 fetchAdverts,
};

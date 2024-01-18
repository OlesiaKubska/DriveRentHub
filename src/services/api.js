import axios from "axios";

const apiClient = axios.create({
 baseURL: "https://65a97c89219bfa3718695671.mockapi.io/",
});

export const fetchAdverts = async () => {
 // eslint-disable-next-line no-useless-catch
 try {
  const response = await apiClient.get("/adverts");
  return response.data;
 } catch (error) {
  throw error;
 }
};

export const createAdvert = async (advertData) => {
 // eslint-disable-next-line no-useless-catch
 try {
  const response = await apiClient.post("/adverts", advertData);
  return response.data;
 } catch (error) {
  throw error;
 }
};

export const updateAdvert = async (id, updateData) => {
 // eslint-disable-next-line no-useless-catch
 try {
  const response = await apiClient.put(`/adverts/${id}`, updateData);
  return response.data;
 } catch (error) {
  throw error;
 }
};

export const deleteAdvert = async (id) => {
 // eslint-disable-next-line no-useless-catch
 try {
  const response = await apiClient.delete(`/adverts/${id}`);
  return response.data;
 } catch (error) {
  throw error;
 }
};

export const advertsApi = {
 fetchAdverts,
 createAdvert,
 updateAdvert,
 deleteAdvert,
};

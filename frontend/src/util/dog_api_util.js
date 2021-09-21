import axios from "axios";

export const getDogs = () => {
  return axios.get("/api/dogs");
};

export const getDog = (id) => {
  return axios.get(`/api/dogs/${id}`);
}; // for dog show

export const getUserDogs = (id) => {
  return axios.get(`/api/dogs/user/${id}`);
};

export const postDog = (data) => {
  return axios.post("/api/dogs/new", data);
};

export const updateDog = (data) => {
  return axios.patch(`/api/dogs/${data._id}`, data)
}

import JSONplaceholder from "../../Api/JSONPlaceholder";

export const fetchposts = () => async (dispatch) => {
  const response = await JSONplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchuser = (id) => async (dispatch) => {
  const response = await JSONplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

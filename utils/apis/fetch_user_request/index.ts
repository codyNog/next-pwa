import fetch from "isomorphic-unfetch";

export const fetch_user_request = async () => {
  const data = await fetch("/mock/apis/fetch_user_request.json").then(res =>
    res.json()
  );
  return data;
};

import { getPathIamge } from "../service/Home/Home-homepage-service";

export const dataUser = async (setPath, id) => {
  let path = await getPathIamge(id);
  if (path !== "") {
    setPath(path);
  }
};

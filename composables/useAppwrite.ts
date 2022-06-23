import { Appwrite } from "appwrite";

export default () => {
  const appwrite = new Appwrite();

  appwrite
    .setEndpoint("http://localhost:8085/v1")
    .setProject("6283d215c023557eb281");

  return appwrite;
};


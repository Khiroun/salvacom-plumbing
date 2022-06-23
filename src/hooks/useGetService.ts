import { useState } from "react";
import { getDocument } from "../firebase";
type Service = {
  name: string;
  id: string;
  imageUrl: string;
  description: string;
};
const useGetService = () => {
  const [service, setService] = useState<any>({
    name: "",
    id: "",
    imageUrl: "",
    description: "",
  });
  const getService = async (id: string) => {
    const service = await getDocument("services", id);
    if (service) setService(service);
  };
  return { service, getService };
};
export default useGetService;

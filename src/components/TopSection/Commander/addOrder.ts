import { addDocument } from "../../../firebase";

const addOrder = async (
  name: string,
  address: string,
  phone: string,
  selectedLoc: string,
  selectedService: string,
  selectedSubService: string
) => {
  await addDocument("commandes", {
    name,
    address,
    phone,
    selectedLoc,
    selectedService,
    selectedSubService,
    timestamp: Date(),
    status: "reception",
  });
};
export default addOrder;

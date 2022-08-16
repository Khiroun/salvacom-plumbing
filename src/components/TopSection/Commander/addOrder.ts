import { addDocument } from "../../../firebase";

const addOrder = async (
  name: string,
  address: string,
  phone: string,
  selectedLoc: string,
  selectedService: any[]
) => {
  await addDocument("commandes", {
    name,
    address,
    phone,
    selectedLoc,
    selectedService,
    timestamp: Date(),
    status: "reception",
  });
};
export default addOrder;

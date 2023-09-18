
import { toast } from "react-toastify";
import { postNewAdmin } from "../helper/axios.js";

export const createNewAdminAction = obj => {
    const {status, message} = postNewAdmin(obj)

    toast[status](message)


}
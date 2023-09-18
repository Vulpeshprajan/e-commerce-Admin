import axios from "axios";

const rootApi = process.env.REACT_APP_ROOTAPI
const adminAPI = rootApi + "/admin"

const axiosProcessor = async({method, url, obj}) => {
try {

   const {data} = await axios({
        method,
        url,
        data: obj
      });
    
    return data
} catch (error) {
    return {
        status: "error",
        message: error.message
    }
}


}


// ========admin api 
export const postNewAdmin = (data) => {
 
const obj = {
        methods: "post",
        url: adminAPI,
        obj: data

}

return axiosProcessor(obj)

}
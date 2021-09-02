import { baseURL } from "../../configuration/environment";
import Axios from "axios";

export const getUsersList = async ()=>{
    let requestURL = baseURL + `users`;
    let responseResults={
        status:"",
        message:"",
        data:""
    };
    await Axios.get(requestURL)
        .then((response) => {
            console.log(response)
            responseResults={
                status:true,
                message:"",
                data:response.data
            };
        }).catch((error) => {
            responseResults={
                status:false,
                message:error,
                data:[]
            };
        });
    return responseResults;
};

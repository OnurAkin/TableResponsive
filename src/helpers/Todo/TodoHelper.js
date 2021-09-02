import { baseURL } from "../../configuration/environment";
import Axios from "axios";

export const getTodosList = async ()=>{
    let requestURL = baseURL + `todos`;
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

export const updateTodo = async (todo_id,data)=>{
    let requestURL = baseURL + `todos/${todo_id}`;
    let responseResults={
        status:"",
        message:"",
        data:""
    };
    await Axios.patch(requestURL,data)
        .then((response) => {
            console.log(response)
            responseResults={
                status:true,
                message:""
            };
        }).catch((error) => {
            responseResults={
                status:false,
                message:error
            };
        });
    return responseResults;
};

export const deleteTodo = async (todo_id)=>{
    let requestURL = baseURL + `todos/${todo_id}`;
    let responseResults={
        status:"",
        message:"",
        data:""
    };
    await Axios.delete(requestURL)
        .then((response) => {
            responseResults={
                status:true,
                message:""
            };
        }).catch((error) => {
            responseResults={
                status:false,
                message:error
            };
        });
    return responseResults;
};

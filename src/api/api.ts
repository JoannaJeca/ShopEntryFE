import axios from "axios"

const URL:string = "https://test-prod2-env.onrender.com"

export const createTask = async()=>{
    try {
       return await axios.post(`${URL}/create-task`).then((res)=>{return res.data})
    } catch (error) {
        console.log(error);
        
    }
}

export const viewTasks = async()=>{
    try {
       return await axios.get(`${URL}/view-tasks`).then((res:any)=>{
        return res.data
       })
    } catch (error) {
        console.log(error);
        
    }
}

export const viewOneTask = async(projectID:string)=>{
    try {
       return await axios.get(`${URL}/view-one-task/${projectID}`).then((res:any)=>{
        return res.data
       })
    } catch (error) {
        console.log(error);
        
    }
}
import axios from "axios"

const URL:string = "https://shop-main-be.onrender.com"

export const createTask = async(data: any)=>{
    try {
       return await axios.post(`${URL}/create-product` ,data).then((res)=>{return res.data})
    } catch (error) {
        console.log(error);
        
    }
}

export const viewproducts = async()=>{
    try {
       return await axios.get(`${URL}/get-products`).then((res:any)=>{
        return res.data
       })
    } catch (error) {
        console.log(error);
        
    }
}

// export const viewOneTask = async(projectID:string)=>{
//     try {
//        return await axios.get(`${URL}/view-one-task/${projectID}`).then((res:any)=>{
//         return res.data
//        })
//     } catch (error) {
//         console.log(error);
        
//     }
// }
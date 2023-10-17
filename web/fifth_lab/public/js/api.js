const BASE_URL = "http://localhost:5500/api";

const baseRequest = async ({
    pathUrl = "/zoo",
    method = "GET",
    body = null,

}) => {
    try{
        const reqParams = {
            method, 
            headers: {
                "Content-Type": "application/json",
            }
        };
        if (body){
            reqParams.body = JSON.stringify(body);
        }
        return await fetch(`${BASE_URL}${pathUrl}`, reqParams);

    } catch (error){
        console.log(error);
    }
};

const getAllZoos = async () => {
    const rawResponce = await baseRequest({method: "GET"});
    return rawResponce.json();
}

const getSortedZoo = async () =>{
    const rawResponce = await baseRequest({
        pathUrl: `/zoosort`,
        method: "GET",
    })
    return rawResponce.json();
}

const postZoo = (body) => baseRequest({
    method: "POST", body
});

const editZoo = (body) => baseRequest({method: "PUT", body});
const deleteZoo = (id) => 
    baseRequest({pathUrl: `/zoo/${id}`, method: "DELETE"});
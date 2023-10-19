const BASE_URL = "http://localhost:5500/api";

const baseRequest = async ({
    pathUrl = "/zoo",
    method = "GET",
    body = null,
}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        const response = await fetch(`${BASE_URL}${pathUrl}`, reqParams);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error(error);
        // You can handle the error in a more specific way here
    }
};



const getAllZoos = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
    const jsonData = await rawResponse.json();
    return jsonData;
}

const getSortedZoo = async () => {
    const rawResponse = await baseRequest({
        pathUrl: `/zoosort`,
        method: "GET",
    });
    const jsonData = await rawResponse.json();
    return jsonData;
}


const postZoo = (body) => baseRequest({
    method: "POST", body
});

const editZoo = (body) => baseRequest({method: "PUT", body});
const deleteZoo = (id) => baseRequest({pathUrl: `/zoo/${id}`, method: "DELETE"});
import axiosInstance from "@/api/axiosInstance";

export const registerUser = async (data: any) => {
    console.log("trying to register user")
    try {
        const response = await axiosInstance.post("/api/auth/register", data)
        return response.data
    } catch (error) {
        console.error("Error during registration", error)
        throw error
    }
}

export const loginUser = async () => {
    console.log("trying to login user")
    try {
        const response = await axiosInstance.post("/api/auth/validateSession")
        return response.data
    } catch (error) {
        console.error("Error during logining", error)
        throw error
    }
}
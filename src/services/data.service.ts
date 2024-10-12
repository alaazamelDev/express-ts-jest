import axios, {AxiosResponse} from "axios";

export const fetchData = async (url: string) => {
    try {
        const response: AxiosResponse = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching data")
    }
}
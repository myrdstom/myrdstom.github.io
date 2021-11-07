import axios from "axios";
import { baseUrl } from "../config/baseUrl.js"

export const getAllReviews = async () => {
    try {
        const response = await axios.get(`${baseUrl}/products`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export const addReview = async (reviewData, id) => {
    try {
        const response = await axios.post(
            `${baseUrl}/products/rating/${id}`,
            reviewData
        );
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

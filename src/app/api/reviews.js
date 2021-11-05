import { addReview, getAllReviews } from './api.js';

export default class Reviews {
    static async getAllReviews() {
        return await getAllReviews();
    }

    static async saveReview(reviewData, id) {
        return await addReview(reviewData, id);
    }
}

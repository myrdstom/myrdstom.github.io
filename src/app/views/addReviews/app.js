import AddReviewService from './addReview.service.js';

const app = document.getElementById('add-review');
export const reviews = new AddReviewService(app);


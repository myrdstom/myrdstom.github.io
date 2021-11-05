import { starsTotal } from '../../components/stars.js';
import { header } from "../../components/header.js";
import Reviews from '../../api/reviews.js';
import {
    calculateEachReview,
    calculateTotalRating,
} from '../../helpers/utils.js';

export default class ProductsService {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            ${header()}
            
            <div class="all__reviews">
            </div>

            
        `;
    }

    _createReviewHTML(data, i) {
        const { productName, productId } = data;
            return `
                 <div class="reviews">
                    <div class="title">${productName}</div>
                    <div class="reviews__content" id="${i}">
                        <span>
                            <span class="reviews__rating"></span>
                            ${starsTotal()}
                        </span>
                        
                         <span class="reviews__button">
                            <button type="submit" class="reviews__add" id="add__review" >
                                <a href="/addReview.html?reviewId=${productId}">
                                    Add Review
                                </a>
                            </button>
                         </span>
                    </div>
                    <hr/>
                    <div class="review_details">
                        <div class="reviews__title">Reviews</div>
                        <div class="review__list" id="${productId}">
             
                        </div>
                    </div>
                </div>
                <br/>
        `;
    }

    _ratingHTML(data) {
        const { description, rating, ratingId } = data;
        return `
                <div>
                    ${starsTotal(
                        ratingId
                    )} <span> ${rating}, </span> <span class="review__desc"> ${description}</span>
                </div>`;
    }
    errorMessage(){

    }

    async getProducts() {
        const reviewHTMLContainer = this.root.querySelector('.all__reviews');

        const data = await Reviews.getAllReviews();

        reviewHTMLContainer.innerHTML = '';

        data.map((item, i) => {
            const { productSlug } = item;
            const html = this._createReviewHTML(item, productSlug);
            reviewHTMLContainer.insertAdjacentHTML('beforeend', html);
            this._createRatingsHTML(item);
            calculateTotalRating(item);
            calculateEachReview(item);
        });
    }

    _createRatingsHTML(data, i) {
        const { productId, ratings } = data;

        const arr = [];

        const ratingsHTMLContainer = this.root.querySelector(`#${productId}`);

        for (const rating of ratings) {
            ratingsHTMLContainer.insertAdjacentHTML(
                'beforeend',
                this._ratingHTML(rating)
            );
        }
    }
}

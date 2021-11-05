import { starsTotal } from '../../components/stars.js';
import { header } from "../../components/header.js";
import Reviews from '../../api/reviews.js';
import { getRating } from '../../helpers/utils.js';

export default class AddReviewService {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            ${header()}
            
            <div class="all__reviews">
                <div class="reviews">
                    <div class="title">What's your rating?</div>
                    <div class="review_details">
                         <div class="reviews__title">Rating</div>
                        <div class="review__list">
                            <div>
                                ${starsTotal()}
                            </div>
                             <div>
                                Review
                            </div>
                            <input class="review__input" type="text" placeholder="Start Typing..."/>
                        </div>
                    </div>
                    <div class="reviews__content">
                         <span class="reviews__button">
                            <button type="submit" class="reviews__add" id="submit__review" onclick="this.addReview()">
                                    Submit Review
                            </button>
                         </span>
                    </div>
                 </div>
            </div>
        `;
    }

    addReview() {
        const reviewData = {};
        const rateProduct = document.querySelectorAll('.reviews__stars');
        rateProduct.forEach((field) => {
            field.addEventListener('click', (e) => {
                const clickedPosition = e.pageX - field.offsetLeft;
                const clickedRating =
                    Math.round((clickedPosition / 100) * 5 * 100) / 100;
                const { reviewRating, ratingWidth } = getRating(clickedRating);
                reviewData.rating = reviewRating;
                document.querySelector('.stars-inner').style.width =
                    ratingWidth;
            });
        });
        const btnAddReview = this.root.querySelector('.reviews__add');
        const reviewDescription = this.root.querySelector('.review__input');
        this.root
            .querySelector('.review__input')
            .addEventListener('blur', () => {
                reviewData.description = reviewDescription.value.trim();
            });
        const params = new URLSearchParams(
            document.location.search.substring(1)
        );
        const reviewId = params.get("reviewId");
        btnAddReview.addEventListener('click', async (e) => {
            e.preventDefault();
            const response = await Reviews.saveReview(reviewData, reviewId);
            if (response) {
                window.location.replace(document.referrer);
            } else {
                alert('error please review your inputs');
            }
        });
    }
}

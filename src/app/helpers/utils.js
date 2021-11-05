export const calculateTotalRating = (data) => {
    const { productSlug } = data;
    const ratings = [];
    data.ratings.forEach((rate) => {
        ratings.push(rate.rating);
    });
    if (ratings.length > 0) {
        const reducer = (previousValue, currentValue) =>
            previousValue + currentValue;
        const ratingsValue = ratings.reduce(reducer);
        const maxRatings = ratings.length * 5;
        const ratingsPercentage = (ratingsValue / maxRatings) * 100;
        document.querySelector(`#${productSlug} .reviews__rating`).innerHTML =
            Math.round((ratingsValue / maxRatings) * 5 * 10) / 10;
        document.querySelector(
            `#${productSlug} .stars-inner`
        ).style.width = `${ratingsPercentage}%`;
    }
};

export const calculateEachReview = (data) => {
    const ratings = [];
    data.ratings.forEach((rate) => {
        ratings.push({
            id: rate.ratingId,
            rating: rate.rating,
        });
    });
    for (const rating of ratings) {
        const ratingsPercentage = (rating.rating / 5) * 100;
        document.querySelector(
            `#${rating.id} .stars-inner`
        ).style.width = `${ratingsPercentage}%`;
    }
};

export const getRating = (rating, width) => {
    const reviewRating = Math.ceil(rating);

    const ratingWidth = `${(reviewRating / 5) * 100}%`;

    return { reviewRating, ratingWidth };
};

export const run = (products) =>{
    products.getProducts()
}
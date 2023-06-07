// @server/actions.js
import HttpError from '@wasp/core/HttpError.js'
import { getStrains } from "./queries.js"

export const createProducer = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Producer.create({
        data : {
            name: args.name,
            location: args.location,
            contact: args.contact,
        }
    })
}

export const createStrain = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    console.log(args)
    return context.entities.Strain.create({
        data: {
            name: args.name,
            productType: args.type,
            producer: { connect: { id: args.producerID } },
            batchDate: args.batchDate,
            THC: args.THC,
        }

    })
}

export const createReview = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Review.create({
        data: { 
            user: { connect: { id: context.user.id } },
            strain: { connect: { id: args.strainID } },
            rating: args.rating,
            comment: args.comment,
        }
    })
}

// create similar functions for other CRUD operation

export const updateProducer = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Producer.update({
        where: { id: args.id },
        data: { ...args.data }
    })
}

export const updateStrain = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Strain.update({
        where: { id: args.id },
        data: { ...args.data }
    })
}

export const updateReview = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Review.update({
        where: { id: args.id },
        data: { ...args.data }
    })
}

export const deleteProducer = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Producer.delete({
        where: { id: args.id }
    })
}

export const deleteStrain = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Strain.delete({
        where: { id: args.id }
    })
}

export const deleteReview = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Review.delete({
        where: { id: args.id }
    })
}

// write action to update producer rating when a new review is created for a strain related to that producer
export const updateProducerRating = async (args, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }

    console.log(args);

    if (!args.producerID) {
        throw new Error("Producer ID is missing");
    }

    // console.log("Producer ID:", args.producerID);

    const { data: strains, isFetching, error } = useQuery(getStrains, { id: args.producerID })

    if (isFetching) {
        console.log("Fetching strains...");
    }

    if (error) {
        throw new Error("Error fetching strains");
    }

    console.log("Strains:", strains);

    let totalReviews = 0;
    let totalRating = 0;
    strains.forEach((strain) => {
        strain.reviews.forEach((review) => {
            totalReviews += 1;
            totalRating += review.rating;
        });
    });

    if (totalReviews === 0) {
        throw new Error("No reviews found");
    }

    let newRating = totalRating / totalReviews;
    console.log("New rating:", newRating);

    let updatedProducer;
    try {
        updatedProducer = await context.entities.Producer.update({
            where: { id: args.producerID },
            data: { rating: newRating },
        });
    } catch (error) {
        console.error("Error updating producer:", error);
        throw error;
    }

    return updatedProducer;
};

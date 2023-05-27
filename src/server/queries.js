// @server/queries.js
import HttpError from '@wasp/core/HttpError.js'

// User Queries

export const getUsers = async (args, context) => {
    return context.entities.User.findMany()
}

export const getUser = async (args, context) => {
    return context.entities.User.findUnique({
        where: { id: args.id }
    })
}

// Producer Queries

export const getProducers = async (args, context) => {
    return context.entities.Producer.findMany({
        where: { name: { contains: args.name } }
    })
}

export const getProducer = async (args, context) => {
    return context.entities.Producer.findUnique({
        where: { id: args.id }
    })
}

// Strain Queries

export const getStrains = async (args, context) => {
    return context.entities.Strain.findMany({
        where: { producer: { id: args.id } }
    })
}

export const getStrain = async (args, context) => {
    return context.entities.Strain.findUnique({
        where: { id: args.id }
    })
}

// Review Queries

export const getReviews = async (args, context) => {
    return context.entities.Review.findMany({
        where: { strain: { id: args.id } }
    })
}

export const getReview = async (args, context) => {
    return context.entities.Review.findUnique({
        where: { id: args.id }
    })
}




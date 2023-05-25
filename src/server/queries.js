// @server/queries.js
import HttpError from '@wasp/core/HttpError.js'

export const getProducer = async (args, context) => {
    return context.entities.Producer.findOne({
        where: { id: args.id }
    })
}

export const getProducers = async (args, context) => {
    return context.entities.Producer.findMany()
}

export const getStrains = async (args, context) => {
    return context.entities.Strain.findMany({
        where: { producer: { id: args.producerId } }
    })
}

export const getStrain = async (args, context) => {
    return context.entities.Strain.findOne({
        where: { id: args.id }
    })
}

export const getReviews = async (args, context) => {
    return context.entities.Review.findMany({
        where: { strain: { id: args.strainId } }
    })
}




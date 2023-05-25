// @server/actions.js
import HttpError from '@wasp/core/HttpError.js'

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
    return context.entities.Strain.create({
        data: {
            name: args.name,
            productType: args.type,
            producer: { connect: { id: args.producerId } },
            batchDate: args.batchDate,
            THC: args.THC,
        }

    })
}

export const createReview = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    return context.entities.Review.create({
        data: { ...args.data, strain: { connect: { id: args.data.strainId } }, user: { connect: { id: context.user.id } } }
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

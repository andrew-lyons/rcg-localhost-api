const Router = require('express').Router

module.exports = Router({mergeParams: true})
.post('/v1/tickets', async (req, res, next) => {
    try {
        const ticket = new req.db.Ticket({
            assignedUser:       req.body.assignedUser,
            assignedStation:    req.body.assignedStation,
            customerName:       req.body.customerName,
            callbackNumber:     req.body.callbackNumber,
            device:             req.body.device,
            jobType:            req.body.jobType,
            completionTime:     req.body.completionTime
        })
        await ticket.save()
        const location = `${req.base}${req.originalUrl}/${ticket.id}`
        res.setHeader('Location', location)
        res.status(201).send(ticket)
    }
    catch(error) {
        next(error)
    }
})
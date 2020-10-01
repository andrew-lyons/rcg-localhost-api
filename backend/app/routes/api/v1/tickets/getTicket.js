const Router = require('express').Router;

module.exports = Router({mergeParams: true})


.get('/v1/tickets', async (req, res, next) => {
    try {
        const all = await req.db.Ticket.find()
        res.send(all)
    }
    catch(error) {
        next(error)
    }
})
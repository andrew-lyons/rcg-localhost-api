const Router = require('express').Router

module.exports = Router({mergeParams: true})
.post('/v1/parts/phones', async (req, res, next) => {
    try {
        const phone = new req.db.Phone({
            model:              req.body.model,
            screen:             req.body.screen,
            parts:              req.body.parts
        })
        await phone.save()
        const location = `${req.base}${req.originalUrl}/${phone.id}`
        res.setHeader('Location', location)
        res.status(201).send(phone)
    }
    catch(error) {
        next(error)
    }
})
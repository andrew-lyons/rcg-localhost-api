const Router = require('express').Router;

module.exports = Router({mergeParams: true})

// GET all the phones
.get('/v1/parts/phones', async (req, res, next) => {
    try {
        const phones = await req.db.Phone.find()
        res.send(phones)
    }
    catch (error) {
        next(error)
    };
})

// GET one phone by its ID
.get('/v1/parts/phones/:id', async (req, res, next) => {
    try {
        const phones = await req.db.Phone.findById(req.params.id)
        res.send(phones)
    }
    catch (error) {
        next(error)
    };
})
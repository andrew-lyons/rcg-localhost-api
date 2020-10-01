const Router = require('express').Router

module.exports = Router({mergeParams: true})
.put('/v1/parts/phones/:id', (req, res) => {
        req.db.Phone.findById(req.params.id)
        .then(phone => {
            phone.model =   req.body.model;
            phone.screen =  req.body.screen;
            phone.parts =   req.body.parts;

            phone.save()
                .then(() => 
                    console.log("Device " + phone.model + " was updated succesfully"),
                    res.status(201).send(phone)
                )
                .catch(error => res.status(400).json('Error: ' + error))
        })
    .catch(error => res.status(400).json('Error: ' + error));
})
const Router = require('express').Router

module.exports = Router({mergeParams: true})
.put('/v1/tickets/:id', (req, res) => {
        req.db.Ticket.findById(req.params.id)
        .then(ticket => {

            ticket.assignedUser = req.body.assignedUser;
            ticket.assignedStation = req.body.assignedStation;
            ticket.customerName =      req.body.customerName;
            ticket.callbackNumber =    req.body.callbackNumber;
            ticket.device =            req.body.device;
            ticket.jobType =           req.body.jobType;
            ticket.completionTime =    req.body.completionTime;

            ticket.save()
                .then(() => 
                    console.log("Ticket " + ticket._id + " was updated succesfully"),
                    res.status(201).send(ticket)
                )
                .catch(error => res.status(400).json('Error: ' + error))
        })
    .catch(error => res.status(400).json('Error: ' + error));
})
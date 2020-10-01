const Router = require('express').Router

module.exports = Router({mergeParams: true})
.delete('/v1/tickets/:id', (req, res) => {
        req.db.Ticket.findByIdAndDelete(req.params.id)
            .then(() => 
                res.json('Ticket entry deleted successfully'),
                console.log('Ticket entry deleted successfully'))
            .catch(error => res.status(400).json('Error: ' + error));
})
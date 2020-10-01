const Router = require('express').Router

module.exports = Router({mergeParams: true})
.delete('/v1/parts/phones/:id', (req, res) => {
        req.db.Phone.findByIdAndDelete(req.params.id)
            .then(() => 
                res.json('Phone entry deleted successfully'),
                console.log('Phone entry deleted successfully'))
            .catch(error => res.status(400).json('Error: ' + error));
})

// DEL http://localhost:5000/api/v1/parts/phones/:id
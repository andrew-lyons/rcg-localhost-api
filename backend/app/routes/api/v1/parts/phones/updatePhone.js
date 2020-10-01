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

/*

PUT localhost:5000/api/v1/parts/phones/:id
Body type = .json:
{
	"model": "iX",
	"screen": {
		"type": {
			"white": {
				"stock": 100
			},
			"black": {
				"stock": 2
			}
		},
		"price": 40
	},
	"parts": {
		"earPieceRibbon": {
			"stock": 3,
			"price": 10
		},
		"homeButton": {
			"stock": 0,
			"price": 10
		},
		"battery": {
			"stock": 5,
			"price": 8
		},
		"motherboard": {
			"stock": 0,
			"price": 30
		},
		"chassis": {
			"stock": 2,
			"price": 40
		},
		"backGlass": {
			"stock": 999,
			"price": 999
		},
		"backCamera": {
			"stock": 3,
			"price": 10
		},
		"backCameraGlass": {
			"stock": 3,
			"price": 4
		}
	}
}

*/
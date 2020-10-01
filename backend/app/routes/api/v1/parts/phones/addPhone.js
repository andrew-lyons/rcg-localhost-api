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

/*

POST localhost:5000/api/v1/parts/phones
Body type = .json:
{
	"model": "iX",
	"screen": {
		"type": {
			"white": {
				"stock": 4
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

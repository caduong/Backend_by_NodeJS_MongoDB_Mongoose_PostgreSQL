var  { check, validationResult } = require('express-validator');
module.exports = {
	
	validateBody: () => {
		
		[check('name').isEmail(),
		check('card').isLength({min: 5})]


		//-----------------------------------------------------------
		return (req, res, next) => {
			const errors = validationResult(req);
			console.log('validationResult: ' + JSON.stringify(errors));
			if (!errors.isEmpty()) {
				return res.status(422).json({ errors: errors.array() });
			}
				next();
		}

	},

	// userSchema: () => {
	// 	return (req, res, next) => {
	// 		[check('name').isEmail(),
	// 		check('card').isLength({ min: 5 })];
	// 		const errors = validationResult(req);
	// 		console.log('validationResultaaaaaaaa: ' + JSON.stringify(errors));
	// 		next();
	// 	}
	// }

		
	
		

}


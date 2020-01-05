const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

  app.get(`/api/users`, async (req, res) => {
	  try {
		let users = await User.find();
		return res.status(200).send(users);
	  } catch (error) {
		  console.error(error);
		  
	  }
   
  });

  app.post(`/api/users`, async (req, res) => {
	  try {
		let user = await User.create(req.body);
		 console.log(user)
		return res.status(201).send({
		  user
		})
	  } catch (error) {
		  console.error(error);
		  
	  }
	
  });

	app.post(`/api/validateEmail`, async(req,res) => {
		try {
			let user = await  User.findOne({email: req.body.email});
		user ? res.sendStatus(204): res.sendStatus(200);
			
		} catch (error) {
			console.log(error);
			
		}
		
	});

  app.delete(`/api/user`, async (req, res) => {
    try {
		const {id} = req.params;

	let user = await User.findByIdAndDelete(id);
	 console.log(user);

    return res.status(202).send({
      user
    })
	} catch (error) {
		console.log(error);
		
	}

  });

}

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
module.exports = {
    create,
    createJWT,
    login,
    checkToken
}

 async function create(req, res) {

  try{
    const user = await User.create(req.body)

    const token = createJWT(user);
    res.json(token);

  } catch (err){
    res.status(400).json(err);

  }
}

  function createJWT(user) {
    return jwt.sign(
      {user},
      process.env.SECRET,
      {expiresIn:'24h'}
    )
  }

  async function login(req, res) {
    try{
  
      const user = await User.findOne({name: req.body.name});
      console.log(user)
      if(!user) throw new Error('Invalid UserName');
      

      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if(!isMatch) throw new Error('Invalid Password');

      const token = createJWT(user);

      res.json(token);
    }catch(err){
      res.status(400).json(err);
    }
  }

  function checkToken(req, res){
    console.log('req.user', req.user)
    res.json(req.exp);
  }
const router = require("express").Router();


// bascially importing router module and importing router object from it 



router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = {
    email: "Aabiskar@gmail.com",
    password: "dhenga",
  };

  if (email !== user.email) {
    return res
      .status(403)
      .json({ message: "email is not correct ", status: false });
  } else if (password !== user.password) {
    return res
      .status(403)
      .json({ message: "password  is not correct ", status: false });
  } else {
    return res
      .status(200)
      .json({ message: "Login successfully ", status: true });
  }
});


// basically simply creating a authorizaton where a email and password is already
// defined and when user input correct email and password it will return login successfuly  this and 
// if they enter wrong email it return email is not correct and if they enter wrong password and 
// it will return password is not correct.


router.get("/login/:id", (req, res) => {
  const { id } = req.params;

  const searchedUser = user.find((item) => {
    return item.id === Number(id);
  });

  if (searchedUser) {
    res.status(200).json({
      message: searchedUser,
      success: true,
    });
  } else {
    res
      .status(404)
      .json({ message: `user  is not found for this ${id}`, success: false });
  }
});

// The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}. 


const user = [
  {
    id: 1,
    username: "santosh",
    gender: "male",
  },
  {
    id: 4,
    gender: "female",
    username: "santosh",
  },
  {
    id: 2,
    username: "rita",
    gender: "female",
  },
];

// just array of objects nothing special

module.exports = router;


// The line module.exports = router;
//  is used to export the router object so that 
//  it can be imported and used in other parts of your Node.js application.


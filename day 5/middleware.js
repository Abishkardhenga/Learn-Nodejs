const checkMethod = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // this is custom created middleware
  next();
};

// creating apikey through middleware
const checkApiKey = (req, res, next) => {
  const apikey = req.headers.apikey;
  // const {apikey}  = req.headers
  // const apikey  = req.headers["apikey"];
  if (apikey) {
    if (apikey === "dhengahero") {
      next();
    } else {
      res.status(403).json({ message: "Enter valid API key", success: true });
    }
  } else {
    res.status(403).json({ message: "Api key is missing", success: false });
  }
};

module.exports = { checkApiKey, checkMethod };

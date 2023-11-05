// middleware for checking method and request url
const checkMethod = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // this is custom created middleware
  next();
  // should add next so code move can move to  next if we don't do then it becames infinite loop
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

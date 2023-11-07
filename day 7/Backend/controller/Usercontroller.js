const { data } = require("../data");

const movie = (req, res) => {
  res.status(200).json({ message: data, success: true });
};

const movieInfo = (req, res) => {
  const { id } = req.params;
  searchedMovie = data.find((item) => {
    return item.id === Number(id);
  });

  if (searchedMovie) {
    res.status(200).json({ movie: searchedMovie, success: true });
  } else {
    res.status(403).json({ movie: "Movie not found ", success: false });
  }
};

module.exports = { movieInfo, movie };

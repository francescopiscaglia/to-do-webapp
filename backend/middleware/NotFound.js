const NotFound = (req, res, next) => {
    res.status(404).json({ message: "Page not found" });
};

module.exports = NotFound
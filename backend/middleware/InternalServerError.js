const InternalServerError = (req, res, next, err) => {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
};

module.exports = InternalServerError
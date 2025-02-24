const path = require("path");

var root = async (req, res) => {
    res.render("index");
};

exports.root = root;

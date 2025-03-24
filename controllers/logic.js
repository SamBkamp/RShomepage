const path = require("path");

var root = async (req, res) => {
    res.render("index");
};

var customs = async (req, res) => {
    res.render("customs");
}

var generic = async (req, res) => {
    res.render("generic");
}

var tanks = async (req, res) => {
    res.render("tanks");
}

var about = async (req, res) => {
    res.render("about");
}

var contact = async (req, res) => {
    res.render("contact");
}

exports.root = root;
exports.customs = customs;
exports.generic = generic;
exports.tanks = tanks;
exports.about = about;
exports.contact = contact;

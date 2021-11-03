const db = require("../models");
const Month = db.month

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.getMonth = (req, res) => {
    Month.find({month: '11'}).exec((err, month) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        res.send(month)
    })
};

exports.setMonth = (req, res) => {
    const month = new Month({
        year: req.body.year,
        month: req.body.month,
        dates: req.body.dates
    })

    db.save(month).then(

    )
    console.log(month)
    res.send('success')
    }

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};
const db = require("../config/db");

const OccupationDataController = (req, res) => {
    const sqlquery = "SELECT * FROM occupation_data";
    db.query(sqlquery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
        console.log(result);
    });
};

module.exports = { OccupationDataController };
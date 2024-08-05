const db = require("../config/db");
const { connect } = require("../routes/occupationRoutes");

const OccupationDataController = (req, res) => {
    const sqlquery = "SELECT * FROM occupation_data";
    db.query(sqlquery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
};

const Occupation_Summary = (req, res) => {
    const { code } = req.params;

    const query = `
        SELECT task_statements.*, knowledge.*
        FROM task_statements
        LEFT JOIN knowledge ON task_statements.onetsoc_code = knowledge.onetsoc_code
        WHERE task_statements.onetsoc_code = ${code}`;

    db.query(query, [code], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Server error');
            return;
        }

        res.json(results);
    });
};


module.exports = { OccupationDataController, Occupation_Summary };
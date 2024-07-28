const express = require('express');
const occupationRoutes = require('./routes/occupationRoutes');
const db = require("./config/db"); // Ensure the database connection is established

const app = express();
app.use(express.json());
app.use('/api', occupationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
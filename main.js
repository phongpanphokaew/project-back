const express = require('express');

const { Sequelize, sequelize } = require('./db');


const albumRoutes = require('./routes/route-album');
const locationRoutes = require('./routes/route-location');
const photographerRoutes = require('./routes/route-photographer');
const photoRoutes = require('./routes/route-photos');


const app = express();

app.use(express.json());
app.use("/api", albumRoutes);
app.use("/api", locationRoutes);
app.use("/api", photographerRoutes);
app.use("/api", photoRoutes);




sequelize.sync();



const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log(`Listen on port ${port}...`);
})
const express = require('express');
const userRoutes = require('./users');
const tasksRoutes = require('./tasks');
const rolesRouter = require('./roles');

const apiRoutes = express.Router();

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/tasks", tasksRoutes);
apiRoutes.use("/roles", rolesRouter);

module.exports = apiRoutes;
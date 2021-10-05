const router = require ("express").Router();
const viewRoutes = require("./viewsRoutes");

router.use("/api", apiRoutes );
router.use("/", viewRoutes)

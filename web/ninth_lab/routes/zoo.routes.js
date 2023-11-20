const Router = require("express");
const router = new Router();
const zooController = require("../controller/zoo.controller")

router.post("/zoo", zooController.createZoo);
router.get("/zoo", zooController.getAllZoo);
router.get("/zoo/:id", zooController.getOneZoo);
router.put("/zoo", zooController.updateZoo);
router.delete("/zoo/:id", zooController.deleteZoo);
router.get("/zoosort", zooController.getSortedZoo);
router.get("/zootypes", zooController.getAllTypesOfZoo);

module.exports = router;

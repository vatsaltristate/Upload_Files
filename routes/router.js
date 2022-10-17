const router = require("express").Router()
const controller = require("../controller/controller"); 



  router.post("/upload", controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);
  router.delete("/files/:name", controller.remove);


module.exports = router;
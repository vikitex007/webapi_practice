const express = require("express")
const { findAll, save,findById ,deleteById,update} = require("../controller/userController");
const router = express.Router();



//CRUD operation is here
router.get("/",findAll)
router.post("/",save)
router.get("/:id",findById)
router.delete("/:id",deleteById)
router.put("/:id",update)







module.exports  = router;

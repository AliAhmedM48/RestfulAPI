const router = require("express").Router();
const {
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/user.controller.js");
const upload = require("../middleware/upload.js");

router.route("/getAll").get(getAllUser);
router.route("/:id").get(getUserById);
router.patch("/:id", upload.single('image'), updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createPostCategory,
  deletePostCategory,
  getAllPostCategories,
  updatePostCategory,
} = require("../controllers/postCategoriesController");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategories);

router
  .route("/:postCategoryId")
  .put(authGuard, adminGuard, updatePostCategory)
  .delete(authGuard, adminGuard, deletePostCategory);

module.exports = router;

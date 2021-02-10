// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});
// Import comment controller
var commentController = require("./commentController");
// Comment routes
router
  .route("/comments")
  .get(commentController.index)
  .post(commentController.new);
router
  .route("/comments/:post_id")
  .get(commentController.view)
  .patch(commentController.update)
  .put(commentController.update)
  .delete(commentController.delete);

// Post routes
var postController = require("./postController");
router
  .route("/posts")
  .get(postController.index)
  .post(postController.new);
router
  .route("/posts/:id")
  .get(postController.view)
  .patch(postController.update)
  .put(postController.update)
  .delete(postController.delete);

  // Export API routes
module.exports = router;

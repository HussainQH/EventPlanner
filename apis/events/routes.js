const express = require("express");
const {
  eventCreate,
  eventList,
  eventListDetails,
  eventUpdate,
  eventDelete,
} = require("./controllers");

const router = express.Router();

router.post("/", eventCreate);
router.get("/", eventList);
router.get("/:eventId", eventListDetails);
router.put("/:eventId", eventUpdate);
router.delete("/:eventId", eventDelete);

module.exports = router;

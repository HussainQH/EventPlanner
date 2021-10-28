const express = require("express");
const {
  eventCreate,
  eventList,
  eventListDetails,
  eventUpdate,
  eventDelete,
  eventFull,
} = require("./controllers");

const router = express.Router();

router.post("/", eventCreate);
router.get("/", eventList);
router.get("/:eventId", eventListDetails);
router.put("/:eventId", eventUpdate);
router.delete("/:eventId", eventDelete);
router.get("/full", eventFull);

module.exports = router;

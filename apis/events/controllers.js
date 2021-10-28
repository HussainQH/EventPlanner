const mongoose = require("mongoose");
const { rawListeners } = require("../../app");

const Event = require("../../models/Event");

exports.eventCreate = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    return res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

exports.eventList = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.eventListDetails = async (req, res, next) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById({ _id: eventId });
    if (event) {
      return res.json(event);
    } else {
      next({
        status: 404,
        message: "Event Not Found",
      });
    }
  } catch (error) {
    next(error); // Check error logs
  }
};

exports.eventUpdate = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findByIdAndUpdate({ _id: eventId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (event) {
      return res.json(event);
    } else {
      next({
        status: 404,
        message: "Event Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.eventDelete = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findByIdAndDelete({ _id: eventId });

    if (event) {
      return res.status(204).end();
    } else {
      next({
        status: 404,
        message: "Event Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

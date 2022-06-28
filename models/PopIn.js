const { Schema, Types } = require("mongoose");
const formatDate = require("../utils/formatDate");

const PopInSchema = new Schema(
  {
    popInId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    popInBody: {
      type: String,
      required: [true, "A pop-in is required."],
      max: [280, "Pop-in must not exceed 280 characters!"]
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => formatDate(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  },
);

module.exports = PopInSchema;

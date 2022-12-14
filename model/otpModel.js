const { Schema, model } = require("mongoose");

module.exports.Otp = model(
  "Otp",
  Schema(
    {
      number: {
        type: String,
        require: true,
      },
      otp: {
        type: String,
        require: true,
      },
      createAt: { type: Date, default: Date.now, index: { expires: 300 } },
    },
    { timestamps: true }
  )
);

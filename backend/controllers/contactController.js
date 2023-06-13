const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const sendEmail = require("../utils/sendEmail")

const contactUs = asyncHandler(async (req, res) => {
  const {
    subject,
    message
  } = req.body
  const user = await User.findById(req.body._id)

  if (!user) {
    res.status(400)
    throw new Error("User not found,please signup")
  }

  // validation
  if (!subject || !message) {
    res.status(400)
    throw new Error("Please add subject and message")
  }
  
  const send_to = process.env.EMAIL_USER
  const send_from = process.env.EMAIL_USER
  const reply_to = user.email

  
})

module.exports = {
  contactUs
}
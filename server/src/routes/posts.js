const express = require('express')
const router = express.Router()
const Post = require('../models/post-model')

router.post('/items', (req, res) => {
  const item = new Post({
    left: req.body.left,
    top: req.body.top,
    width: req.body.width,
    height: req.body.height,
    bg: req.body.bg
  });
  post.save((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `item with ID_${data._id} saved successfully!`
      })
    }
  })
})


router.get("/item", (req, res) => {
  Post.find({}, "left top width height bg", (err, items) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send({ items: items })
    }
  }).sort({ _id: -1 })
})

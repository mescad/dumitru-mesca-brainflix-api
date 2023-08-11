const express = require("express");
const router = express.Router();
const videos = require("../data/video-details.json");
const { v4: uuidv4 } = require('uuid');


// /videos

router.get("/", (req, res) => {
  res.json(videos);
});

// /videos/:id
router.get("/:id", (req, res) => {
  const video = videos.find((video) => video.id == req.params.id);

  if (!video) {
    return res.status(404).json({ message: "video not found" });
  }

  res.json(video);
});

router.post("/upload", (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);

  const timestampInSeconds = Date.now();

  const newVideo = {
    id: uuidv4(),
    title,
    description,
    image:'http://localhost:8080/images/uploadvid.jpg',
    views: '0',
    likes: '0',
    duration: "6:31",
    channel: "Green Orc",
    timestamp: timestampInSeconds,
    comments:[
    ],
  
  };

  videos.push(newVideo);

  res.json(newVideo);
  console.log(newVideo);
});

module.exports = router;

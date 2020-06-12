const express = require('express');
const router = express.Router();
const multer = require("multer");
const { Photo } = require("../models/Photos")
const fs = require('fs');
const path = require('path');
var bodyParser = require('body-parser');
const { auth } = require("../middleware/auth");
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")

//서버에저장 (uploads파일)

router.post("/uploadfiles", auth, (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});

// 데이터베이스에 저장
router.post("/uploadPhotos", async (req, res) => {
    const photo = new Photo(req.body)
    photo.save((err, Photo) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
});



router.get("/getPhotos", async (req, res) => {

    Photo.find()
        .populate('writer')
        .exec((err, Photos) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, Photos })
        })

});

router.get("/getphoto", (req, res) => {

    let type = req.query.type
    let photoId = req.query.id

    Photo.find({ _id: photoId })
        .populate("writer")
        .exec((err, photo) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send({ success: true, photo })
        })

});








module.exports = router;

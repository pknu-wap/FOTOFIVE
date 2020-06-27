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

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 20;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;
    let term = req.body.searchTerm


    let findArgs = {};

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {

            console.log('key', key)

            if (key === "price") {
                findArgs[key] = {
                    //Greater than equal
                    $gte: req.body.filters[key][0],
                    //Less than equal
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }

        }
    }


    if (term) {
        Photo.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, photoInfo) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({
                    success: true, photoInfo,
                    postSize: photoInfo.length
                })
            })
    } else {
        Photo.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, photoInfo) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({
                    success: true, photoInfo,
                    postSize: photoInfo.length
                })
            })
    }
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

router.post("/main", (req, res) => {

    let skip = req.body.skip ? parseInt(req.body.skip) : 0;
    let term = req.body.SearchTerm

    if (term) {
        Photo.find()
            .find({ $text: { $search: term } })
            .populate("writer")
            .skip(skip)
            .exec((err, photoInfo) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({ success: true, photoInfo })
            })
    } else {
        Photo.find()
            .populate("writer")
            .skip(skip)
            .exec((err, photoInfo) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({ success: true, photoInfo })
            })
    }




});


router.get('/photo_by_id', (req, res) => {
    let type = req.query.type
    let photoIds = req.query.id

    if (type === "array") {
        let ids = req.query.id.split(',')
        photoIds = ids.map(item => {
            return item
        })
    }

    Photo.find({ '_id': { $in: photoIds } })
        .populate('writer')
        .exec((err, photo) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(photo)
        })
})



module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        //id만 넣어도 유저 모델에서 유저의 모든 정보를 알 수 있다.
        ref: 'User'
    },
    title: {
        type: String,
        required: "Tilte is required"
    },
    detail: {
        type: String,
    },
    images: {
        type: Array,
        default: []
    },
    //이미지 배열로 입력받음
    price: {
        type: Number,
        default: 0
    },
}, { timestamps: true })

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = { Photo }
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json(
        {
        blockinfo: '0x627306090abab3a6e140...', 

        avatar: "https://lovetobeinthekitchen.com/wp-content/uploads/2015/04/Emily-Circle-Profile-e1428003256512.png",

        prodTitle: "2016 Louis Vuitton Keepall",
        subTitle: "Classic Monogram",
        prodimg: "https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500",

        RAP1T: "Jaeger-LeCoultre Polaris",
        RAP1ST: "Chronograph, PINK GOLD",
        RAP1img: "https://www.laingsuk.com/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/0/3/0350020091_2.jpg",

        RAP2T: "Hermes Birkin",
        RAP2ST: "30cm Craie Epsom Birkin",
        RAP2img: "https://item5.tradesy.com/images/hermes-birkin-30cm-epsom-gold-hardware-off-white-summer-a-stamp-craie-leather-tote-21697794-0-1.jpg?width=720&height=960",

        RAP3T: "Louis Vuitton / Supreme",
        RAP3ST: "Christopher Backpack PM",
        RAP3img: "https://select-orlando.com/wp-content/uploads/2017/11/mWHITEBACKGROUND.jpg",

        Hash1: 'asfd',
        Hash2: '',
        Hash3: '',

        Date1: '',
        Date2: '',
        Date3: '',


    },

);
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /products"
    });
});

module.exports = router;
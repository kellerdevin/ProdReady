const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json(
        {
            blockinfo: '0x627306090abab3a6e140...', 

            avatar: "https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2013%2F03%2F2scanadus-walter-de-brouwer-backstage-at-expand-video.jpg&client=cbc79c14efcebee57402&signature=42294b1a66cf7ca9639bba7dcb8b7d48339e3825",

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

            Hash: '0x5e4bb521e0b6c18bd40674474f4b1527...',
            toYou: '0x6bd2bd4fa7ec27ef0...',
            FromTrans: '0xb35f68a5d0da29ds2...',
            To: '0x6bd2bd4fa7ec27ef0...',

            DateToYou: '4/1/2018',
            DateTrans: '3/15/2017',
            DateCreated: '4/26/2016',

            Mechant: 'Louis Vuitton'
        },

);
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /products"
    });
});

module.exports = router;
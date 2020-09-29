var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "Iphone 11 Pro",
      category: "Iphones",
      description: "The All new Iphone 11 made just for you. Order now and make it yours now!",
      price: "Rs. 108500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg2f2stWf429e2XHJeY1FLt5m4imJm53YLfw&usqp=CAU"
    },
    {
      name: "Motorola E6s",
      category: "Smartphones",
      description: "Motorola has been loyal to its customers in bringing updates to their products",
      price: "Rs.8000",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Motorola One Fusion",
      category: "Smartphone",
      description: "Motorola's new Device with a powerfull battery of 5000mAh and 6.7inches display",
      price: "Rs. 55000",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Poco M2 Pro",
      category: "Smartphone",
      description: "This is Poco's M2 Pro device with Android 10 and MIUI 11",
      price: "Rs. 16000",
      image: "data:image/jpeg;base64,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"
    }
  ]
  res.render('index', { products, admin: false });
});

module.exports = router;

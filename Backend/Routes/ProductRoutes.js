const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const multer = require("multer");
const path = require("path");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use Date.now() to ensure unique filenames
  },
});

const upload = multer({ storage: storage });

router.post("/registerProduct", upload.single("image"), async (req, res) => {
  const { id, name, rating, description, price } = req.body;
  const imagePath = req.file ? req.file.filename : null; // Get the path to the uploaded image

  try {
    const product = new Product({
      id,
      name,
      description,
      image: imagePath,
      rating,
      price,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET route to retrieve all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Product = require("../Models/Product");
// const multer = require("multer");
// const path = require("path");
// const storage = multer.diskStorage({
//   destination: (req, image, cb) =>{
//     cb(null, 'public/Images')
//   },
//   filename: (req, image, cb) =>{
//     cb(null, image.fieldname + "_" + path.extname(image.orignalname))
//   }
// })

// const imageStorage = multer({
//   storage : storage
// })

// router.post("/registerProduct", imageStorage.single("image"),  async (req, res) => {
//   console.log(req.image)
//   const { id , name, image, rating, description, price } = req.body;
//   try {
//     const product = new Product({ id, name, description, image, rating, price });
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;

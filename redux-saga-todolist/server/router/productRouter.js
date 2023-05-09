const router = require("express").Router();
const productController =  require("../controller/productController")

router.get('/getall',productController.getall)
router.post('/addproduct',productController.addproduct)
router.delete('/deleteproduct/:id',productController.deleteproduct)
router.patch('/updateproduct/:id',productController.updateproduct)
router.get('/search',productController.searchproduct)
module.exports = router
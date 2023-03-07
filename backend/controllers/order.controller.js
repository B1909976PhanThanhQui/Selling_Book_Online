const OrderModel = require("../models/Order");

module.exports = class API {
  //Create Product
  static async createOrder(req, res) {
    const orderInput = new OrderModel({
        username: req.body.username,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        payment:  req.body.payment,
        detail_cart: req.body.detail_cart,
        statusOrder: req.body.statusOrder,
        totalOrder: req.body.totalOrder
    });
    try {
      const createNewOrder = await orderInput.save();
      res.status(200).json(createNewOrder);
    } catch (err) {
      // console.log(err)
      res.status(501).json(err);
    }
  }

  //Update Product
  static async updateOrder(req, res) {
    const id_order = req.params.id;
    try {
      const updateOrder = await ProductModel.findByIdAndUpdate(
        id_order,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateOrder);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Delete Product
//   static async deleteOrder(req, res) {
//     const id_product = req.params.id;
//     try {
//       await ProductModel.findByIdAndDelete(id_product);
//       res.status(200).json("Sản phẩm đã xóa thành công!");
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }

  //Get One Product
//   static async findoneProduct(req, res) {
//     const id_product = req.params.id;
//     try {
//       const ProductResult = await ProductModel.findById(id_product);
//       res.status(201).json(ProductResult);
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }

  //Get Product With Name
//   static async findproductwithName(req, res) {
//     try {
//       const name_product = await req.params.nameproduct;
//       const ProductData = await ProductModel.find({
//         $or: [
//           { title: { $regex: `${name_product}`, $options: "i" } },
//           { description: { $regex: `${name_product}`, $options: "i" } },
//         ],
//       });

//       res.status(201).json(ProductData);
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }

  //Get All Product
  static async getAllOrder(req, res) {
    try {
      const arrayOrder = await OrderModel.find();
      res.status(200).json(arrayOrder);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get Product With Limit Collection
//   static async getProductLimit(req, res) {
//     try {
//       const arrayProduct = await ProductModel.find().limit(12);
//       res.status(200).json(arrayProduct);
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }

  //Get Product Category
//   static async getcategoryProduct(req, res) {
//     try {
//       var arrayProduct;
//       if (req.params.name === "Tất Cả Sách") {
//         arrayProduct = await ProductModel.find({});
//       } else {
//         let arrayResultCategory = await CategoryModel.find();
//         var check_duplicated = 0;
//         arrayResultCategory.forEach((item, index) => {
//           if (item.category_name === req.params.name) {
//             check_duplicated++;
//           }
//         });

//         if (check_duplicated == 0) {
//           arrayProduct = await ProductModel.find({ bookType: req.params.name });
//         } else {
//           arrayProduct = await ProductModel.find({
//             categories: req.params.name,
//           });
//         }
//       }

//       res.status(200).json(arrayProduct);
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }

  //Get Product With id
//   static async getproductwithID(req, res) {
//     try {
//       const result = await ProductModel.findOne({ _id: req.params.id });
//       res.status(201).json(result);
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }

  //Get product with id
//   static async getwithID(req, res) {
//     try {
//       const result = await ProductModel.findOne({ _id: req.params.id });
//       res.status(201).json(result);
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }
};

const express = require("express");
const {
    createOrder,
    getAllOrders,
    getOrdersByUser,
    getOrderById,
    updateOrder,
    deleteOrder,
} = require("../../controllers/orderControllers");

const router = express.Router();

// เส้นทาง CRUD
router.post("/", createOrder); // สร้าง Order ใหม่
router.get("/", getAllOrders); // อ่าน Order ทั้งหมด
router.get("/user/:userId", getOrdersByUser); // อ่าน Order ทั้งหมดของ User
router.get("/:id", getOrderById); // อ่าน Order ตามเลข Order (id)
router.put("/:id", updateOrder); // อัปเดต Order
router.delete("/:id", deleteOrder); // ลบ Order

module.exports = router;

const mongoose = require('mongoose');

// สร้าง Schema สำหรับสินค้า
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },       // ชื่อสินค้า
    description: { type: String },                // รายละเอียดสินค้า
    price: { type: Number, required: true },      // ราคาสินค้า
    stock: { type: Number, default: 0 },          // จำนวนสินค้าที่มีอยู่
    category: { type: String },                   // หมวดหมู่สินค้า
    createdAt: { type: Date, default: Date.now }, // วันที่สร้าง
    updatedAt: { type: Date, default: Date.now }, // วันที่อัปเดตล่าสุด
});

// ส่งออก Schema ไปใช้ในไฟล์อื่น
module.exports = mongoose.model('Product', ProductSchema);

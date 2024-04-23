const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
const axios = require('axios');
const { html } = require('html-template-tag');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Driver = require('../models/driver.model');

const multer = require('multer');

// Khởi tạo Multer middleware với cấu hình
const upload = multer({ dest: 'audio/' }); // 'uploads/' là thư mục để lưu trữ tệp tải lên


exports.upload = async (req, res) => {
  try {
    // Sử dụng middleware upload.single() để xử lý tệp tải lên từ yêu cầu
    upload.single('file')(req, res, async (err) => {
      if (err) {
        // Xử lý lỗi nếu có
        return res.status(400).json({ message: err.message });
      }

      // Sau khi tệp đã được tải lên thành công, bạn có thể truy cập thông tin của tệp thông qua req.file
      console.log(req.file);
      // Đọc dữ liệu của file từ đường dẫn
      const filePath = req.file.path;
      const fileData = fs.readFileSync(filePath);

      // Mã hóa dữ liệu của file thành base64
      const base64Data = fileData.toString('base64');

      // Tiếp tục xử lý logic của bạn, ví dụ: lưu thông tin của tệp vào cơ sở dữ liệu
      const doc = new Driver({
        // Thêm các trường dữ liệu cho đối tượng
        dat: base64Data,
        description: ``,
        upload: new Date(),
        filename: filePath,
        path: `${filePath}`,
        author: {}
      });

      // Lưu đối tượng vào cơ sở dữ liệu hoặc thực hiện các thao tác khác ở đây
      const saveDoc = await doc.save();

      console.log(saveDoc)
      // Trả về phản hồi JSON thành công
      return res.json({ message: 'Tệp đã được tải lên thành công', file: req.file });
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};

exports.get = async (req, res) => {
  try {
    return res.json("hi");
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};
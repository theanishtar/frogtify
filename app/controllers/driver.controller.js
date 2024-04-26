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
  try {// Thư mục chứa file audio
    const audioDirectory = path.join(__dirname, '..', '..', 'audio'); // Điều chỉnh đường dẫn để truy cập vào thư mục audio ở ngoài controller

    // Sử dụng middleware upload.single() để xử lý tệp tải lên từ yêu cầu
    upload.single('file')(req, res, async (err) => {
      if (err) {
        // Xử lý lỗi nếu có
        return res.status(400).json({ message: err.message });
      }

      const fileData = fs.readFileSync(audioDirectory);

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
    let result = await Driver.find({});
    // Thư mục chứa file audio
    // const audioDirectory = path.join(__dirname, '..', '..', 'audio');
    // // Giải mã chuỗi base64
    // const mp3Data = Buffer.from(result[0].dat, 'base64');

    // // Lưu dữ liệu vào file MP3
    // const outputFilePath = path.join(audioDirectory, `${result[0]._id}.mp3`);
    // fs.writeFileSync(outputFilePath, mp3Data);

    res.json({ result })
    // const htmlResponse = `<a href="${outputFilePath}">${result[0]._id}}</a>`;
    // res.send(htmlResponse);
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};
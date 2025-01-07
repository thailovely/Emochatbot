const express = require('express');
const app = express();
// แก้ไขเป็นใช้ port 10000 ตามที่ Render แนะนำ
const port = process.env.PORT || 10000;

app.use(express.json());

// เพิ่มเส้นทางหลักเพื่อทดสอบ
app.get('/', (req, res) => {
    res.send('Emochatbot is running!');
});

// โค้ดส่วนอื่นๆ เหมือนเดิม...

const express = require('express');
const app = express();

// ตั้งค่า port ให้ตรงกับ Render
const port = process.env.PORT || 10000;

// แสดงข้อความเมื่อเริ่มต้นเซิร์ฟเวอร์
console.log('Starting server...');

// เพิ่มเส้นทางหลักเพื่อทดสอบ
app.get('/', (req, res) => {
    console.log('Root path accessed');
    res.send('Emochatbot is running!');
});

// ตั้งค่า webhook สำหรับ Facebook
app.get('/webhook/facebook', (req, res) => {
    console.log('Facebook webhook GET request received');
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    
    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('Facebook webhook verified');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

// รับข้อความจาก Facebook
app.post('/webhook/facebook', (req, res) => {
    console.log('Facebook webhook POST request received');
    res.status(200).send('EVENT_RECEIVED');
});

// ตั้งค่า webhook สำหรับ LINE
app.post('/webhook/line', (req, res) => {
    console.log('LINE webhook request received');
    res.status(200).send('OK');
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, '0.0.0.0', () => {
    console.log(`Emochatbot running on port ${port}`);
});

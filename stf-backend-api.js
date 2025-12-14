const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require('socket.io');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const { DateTime } = require ('luxon');

const app = express();
const socketServerNorthern1 = http.createServer(app);
const socketServerNorthern2 = http.createServer(app);
const socketServerNorthern3 = http.createServer(app);
const socketServerNorthern4 = http.createServer(app);
const socketServerNorthern5 = http.createServer(app);
const socketServerNorthern6 = http.createServer(app);
const socketServerNorthern7 = http.createServer(app);
const ioNorthern1 = new Server(socketServerNorthern1, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const ioNorthern2 = new Server(socketServerNorthern2, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const ioNorthern3 = new Server(socketServerNorthern3, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const ioNorthern4 = new Server(socketServerNorthern4, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const ioNorthern5 = new Server(socketServerNorthern5, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const ioNorthern6 = new Server(socketServerNorthern6, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const ioNorthern7 = new Server(socketServerNorthern7, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());
app.use(express.json());

const NORTHERN_1_DIR_PATH = './northern_1'; // northern_1 JSON Directory
const NORTHERN_2_DIR_PATH = './northern_2'; // northern_2 JSON Directory
const NORTHERN_3_DIR_PATH = './northern_3'; // northern_3 JSON Directory
const NORTHERN_4_DIR_PATH = './northern_4'; // northern_4 JSON Directory
const NORTHERN_5_DIR_PATH = './northern_5'; // northern_5 JSON Directory
const NORTHERN_6_DIR_PATH = './northern_6'; // northern_6 JSON Directory
const NORTHERN_7_DIR_PATH = './northern_7'; // northern_7 JSON Directory
const NORTHERN_1_ENDPOINT = 'http://159.65.116.195:3000/stf/northern_1/'; // northern_1 Endpoint
const NORTHERN_2_ENDPOINT = 'http://159.65.116.195:3000/stf/northern_2/'; // northern_2 Endpoint
const NORTHERN_3_ENDPOINT = 'http://159.65.116.195:3000/stf/northern_3/'; // northern_3 Endpoint
const NORTHERN_4_ENDPOINT = 'http://159.65.116.195:3000/stf/northern_4/'; // northern_4 Endpoint
const NORTHERN_5_ENDPOINT = 'http://159.65.116.195:3000/stf/northern_5/'; // northern_5 Endpoint
const NORTHERN_6_ENDPOINT = 'http://159.65.116.195:3000/stf/northern_6/'; // northern_6 Endpoint
const NORTHERN_7_ENDPOINT = 'http://159.65.116.195:3000/stf/northern_7/'; // northern_7 Endpoint
const NORTHERN_1_ENDPOINT_ALL = 'http://159.65.116.195:3000/data/northern_1/all' // northern_1 Endpoint All Data
const NORTHERN_2_ENDPOINT_ALL = 'http://159.65.116.195:3000/data/northern_2/all' // northern_2 Endpoint All Data
const NORTHERN_3_ENDPOINT_ALL = 'http://159.65.116.195:3000/data/northern_3/all' // northern_3 Endpoint All Data
const NORTHERN_4_ENDPOINT_ALL = 'http://159.65.116.195:3000/data/northern_4/all' // northern_4 Endpoint All Data
const NORTHERN_5_ENDPOINT_ALL = 'http://159.65.116.195:3000/data/northern_5/all' // northern_5 Endpoint All Data
const NORTHERN_6_ENDPOINT_ALL = 'http://159.65.116.195:3000/data/northern_6/all' // northern_6 Endpoint All Data
const NORTHERN_7_ENDPOINT_ALL = 'http://159.65.116.195:3000/data/northern_7/all' // northern_7 Endpoint All Data

let latestTimestampNorthern1 = null;
let latestTimestampNorthern2 = null;
let latestTimestampNorthern3 = null;
let latestTimestampNorthern4 = null;
let latestTimestampNorthern5 = null;
let latestTimestampNorthern6 = null;
let latestTimestampNorthern7 = null;
let latestRecordNorthern1 = null;
let latestRecordNorthern2 = null;
let latestRecordNorthern3 = null;
let latestRecordNorthern4 = null;
let latestRecordNorthern5 = null;
let latestRecordNorthern6 = null;
let latestRecordNorthern7 = null;

// Displacement alert email tracking
let displacementAlertSentTimestamps = [null, null, null, null, null, null, null];

// No-data alert email tracking
let noDataAlertSentTimestamps = [null, null, null, null, null, null, null];


const PORT_DATA = 3000; // EXPRESS SERVER PORT
const PORT_SOCKET_NORTHERN_1 = 3001; // SOCKET.IO SERVER PORT NORTHERN 1
const PORT_SOCKET_NORTHERN_2 = 3002; // SOCKET.IO SERVER PORT NORTHERN 2
const PORT_SOCKET_NORTHERN_3 = 3003; // SOCKET.IO SERVER PORT NORTHERN 3
const PORT_SOCKET_NORTHERN_4 = 3004; // SOCKET.IO SERVER PORT NORTHERN 4
const PORT_SOCKET_NORTHERN_5 = 3005; // SOCKET.IO SERVER PORT NORTHERN 5
const PORT_SOCKET_NORTHERN_6 = 3006; // SOCKET.IO SERVER PORT NORTHERN 6
const PORT_SOCKET_NORTHERN_7 = 3007; // SOCKET.IO SERVER PORT NORTHERN 7

ioNorthern1.on('connection', socket => { if (latestRecordNorthern1) socket.emit('latest-record-northern-1', latestRecordNorthern1); });
ioNorthern2.on('connection', socket => { if (latestRecordNorthern2) socket.emit('latest-record-northern-2', latestRecordNorthern2); });
ioNorthern3.on('connection', socket => { if (latestRecordNorthern3) socket.emit('latest-record-northern-3', latestRecordNorthern3); });
ioNorthern4.on('connection', socket => { if (latestRecordNorthern4) socket.emit('latest-record-northern-4', latestRecordNorthern4); });
ioNorthern5.on('connection', socket => { if (latestRecordNorthern5) socket.emit('latest-record-northern-5', latestRecordNorthern5); });
ioNorthern6.on('connection', socket => { if (latestRecordNorthern6) socket.emit('latest-record-northern-6', latestRecordNorthern6); });
ioNorthern7.on('connection', socket => { if (latestRecordNorthern7) socket.emit('latest-record-northern-7', latestRecordNorthern7); });

function convertUkToUtcDate(ukTimeString) {
  return DateTime.fromFormat(ukTimeString, "yyyy-MM-dd HH:mm:ss", {
    zone: "Europe/London"
  }).toUTC().toJSDate();
}

setInterval(async () => {
  try {
    const res = await fetch(NORTHERN_1_ENDPOINT);
    if (!res.ok) throw new Error('Failed to fetch data');
    const recordData = await res.json();
    const record = {
        timestamp: convertUkToUtcDate(recordData.timestamp),
        temperature: recordData.temperature,
        humidity: recordData.humidity,
        soilMoisture: recordData.soilmoisture,
        displacement: recordData['displacement in micrometer ']
    }
    const currentTimestamp = record.timestamp;
    const previousTimestamp = latestTimestampNorthern1 ? new Date(latestTimestampNorthern1) : null;
    if (!previousTimestamp || currentTimestamp > previousTimestamp) {
      latestTimestampNorthern1 = currentTimestamp.toISOString();
      latestRecordNorthern1 = record;
      ioNorthern1.emit('latest-record-northern-1', record);
        if (record.displacement > 10) {
            const now = Date.now();
            const lastSent = displacementAlertSentTimestamps[0];
            if (!lastSent || now - lastSent > 24 * 60 * 60 * 1000) {
            sendAlertEmail(
                'Northern 1 - Displacement Out of Range',
                `Displacement value has exceeded 10. It is currently: ${record.displacement}. This is out of the typical displacement range, therefore it is likely incorrect, and the dendrometer may need recalibration on the tree. Please check this as soon as possible.`
            );
            displacementAlertSentTimestamps[0] = now;
            }
        }
    }
  } catch (err) {
    console.error('Error polling:', err.message);
  }
}, 10000);

setInterval(async () => {
  try {
    const res = await fetch(NORTHERN_2_ENDPOINT);
    if (!res.ok) throw new Error('Failed to fetch data');
    const recordData = await res.json();
    const record = {
        timestamp: convertUkToUtcDate(recordData.timestamp),
        temperature: recordData.temperature,
        humidity: recordData.humidity,
        soilMoisture: recordData.soilmoisture,
        displacement: recordData['displacement in micrometer ']
    }
    const currentTimestamp = record.timestamp;
    const previousTimestamp = latestTimestampNorthern2 ? new Date(latestTimestampNorthern2) : null;
    if (!previousTimestamp || currentTimestamp > previousTimestamp) {
      latestTimestampNorthern2 = currentTimestamp.toISOString();
      latestRecordNorthern2 = record;
      ioNorthern2.emit('latest-record-northern-2', record);
      if (record.displacement > 10) {
            const now = Date.now();
            const lastSent = displacementAlertSentTimestamps[1];
            if (!lastSent || now - lastSent > 24 * 60 * 60 * 1000) {
            sendAlertEmail(
                'Northern 2 - Displacement Out of Range',
                `Displacement value has exceeded 10. It is currently: ${record.displacement}. This is out of the typical displacement range, therefore it is likely incorrect, and the dendrometer may need recalibration on the tree. Please check this as soon as possible.`
            );
            displacementAlertSentTimestamps[1] = now;
            }
        }
    }
  } catch (err) {
    console.error('Error polling:', err.message);
  }
}, 10000);

setInterval(async () => {
  try {
    const res = await fetch(NORTHERN_3_ENDPOINT);
    if (!res.ok) throw new Error('Failed to fetch data');
    const recordData = await res.json();
    const record = {
        timestamp: convertUkToUtcDate(recordData.timestamp),
        temperature: recordData.temperature,
        humidity: recordData.humidity,
        soilMoisture: recordData.soilmoisture,
        displacement: recordData['displacement in micrometer ']
    }
    const currentTimestamp = record.timestamp;
    const previousTimestamp = latestTimestampNorthern3 ? new Date(latestTimestampNorthern3) : null;
    if (!previousTimestamp || currentTimestamp > previousTimestamp) {
      latestTimestampNorthern3 = currentTimestamp.toISOString();
      latestRecordNorthern3 = record;
      ioNorthern3.emit('latest-record-northern-3', record);
      if (record.displacement > 10) {
            const now = Date.now();
            const lastSent = displacementAlertSentTimestamps[2];
            if (!lastSent || now - lastSent > 24 * 60 * 60 * 1000) {
            sendAlertEmail(
                'Northern 3 - Displacement Out of Range',
                `Displacement value has exceeded 10. It is currently: ${record.displacement}. This is out of the typical displacement range, therefore it is likely incorrect, and the dendrometer may need recalibration on the tree. Please check this as soon as possible.`
            );
            displacementAlertSentTimestamps[2] = now;
            }
        }
    }
  } catch (err) {
    console.error('Error polling:', err.message);
  }
}, 10000);

setInterval(async () => {
  try {
    const res = await fetch(NORTHERN_4_ENDPOINT);
    if (!res.ok) throw new Error('Failed to fetch data');
    const recordData = await res.json();
    const record = {
        timestamp: convertUkToUtcDate(recordData.timestamp),
        temperature: recordData.temperature,
        humidity: recordData.humidity,
        soilMoisture: recordData.soilmoisture,
        displacement: recordData['displacement in micrometer ']
    }
    const currentTimestamp = record.timestamp;
    const previousTimestamp = latestTimestampNorthern4 ? new Date(latestTimestampNorthern4) : null;
    if (!previousTimestamp || currentTimestamp > previousTimestamp) {
      latestTimestampNorthern4 = currentTimestamp.toISOString();
      latestRecordNorthern4 = record;
      ioNorthern4.emit('latest-record-northern-4', record);
      if (record.displacement > 10) {
            const now = Date.now();
            const lastSent = displacementAlertSentTimestamps[3];
            if (!lastSent || now - lastSent > 24 * 60 * 60 * 1000) {
            sendAlertEmail(
                'Northern 4 - Displacement Out of Range',
                `Displacement value has exceeded 10. It is currently: ${record.displacement}. This is out of the typical displacement range, therefore it is likely incorrect, and the dendrometer may need recalibration on the tree. Please check this as soon as possible.`
            );
            displacementAlertSentTimestamps[3] = now;
            }
        }
    }
  } catch (err) {
    console.error('Error polling:', err.message);
  }
}, 10000);

setInterval(async () => {
  try {
    const res = await fetch(NORTHERN_5_ENDPOINT);
    if (!res.ok) throw new Error('Failed to fetch data');
    const recordData = await res.json();
    const record = {
        timestamp: convertUkToUtcDate(recordData.timestamp),
        temperature: recordData.temperature,
        humidity: recordData.humidity,
        soilMoisture: recordData.soilmoisture,
        displacement: recordData['displacement in micrometer ']
    }
    const currentTimestamp = record.timestamp;
    const previousTimestamp = latestTimestampNorthern5 ? new Date(latestTimestampNorthern5) : null;
    if (!previousTimestamp || currentTimestamp > previousTimestamp) {
      latestTimestampNorthern5 = currentTimestamp.toISOString();
      latestRecordNorthern5 = record;
      ioNorthern5.emit('latest-record-northern-5', record);
      if (record.displacement > 10) {
            const now = Date.now();
            const lastSent = displacementAlertSentTimestamps[4];
            if (!lastSent || now - lastSent > 24 * 60 * 60 * 1000) {
            sendAlertEmail(
                'Northern 5 - Displacement Out of Range',
                `Displacement value has exceeded 10. It is currently: ${record.displacement}. This is out of the typical displacement range, therefore it is likely incorrect, and the dendrometer may need recalibration on the tree. Please check this as soon as possible.`
            );
            displacementAlertSentTimestamps[4] = now;
            }
        }
    }
  } catch (err) {
    console.error('Error polling:', err.message);
  }
}, 10000);

setInterval(async () => {
  try {
    const res = await fetch(NORTHERN_6_ENDPOINT);
    if (!res.ok) throw new Error('Failed to fetch data');
    const recordData = await res.json();
    const record = {
        timestamp: convertUkToUtcDate(recordData.timestamp),
        temperature: recordData.temperature,
        humidity: recordData.humidity,
        soilMoisture: recordData.soilmoisture,
        displacement: recordData['displacement in micrometer ']
    }
    const currentTimestamp = record.timestamp;
    const previousTimestamp = latestTimestampNorthern6 ? new Date(latestTimestampNorthern6) : null;
    if (!previousTimestamp || currentTimestamp > previousTimestamp) {
      latestTimestampNorthern6 = currentTimestamp.toISOString();
      latestRecordNorthern6 = record;
      ioNorthern6.emit('latest-record-northern-6', record);
      if (record.displacement > 10) {
            const now = Date.now();
            const lastSent = displacementAlertSentTimestamps[5];
            if (!lastSent || now - lastSent > 24 * 60 * 60 * 1000) {
            sendAlertEmail(
                'Northern 6 - Displacement Out of Range',
                `Displacement value has exceeded 10. It is currently: ${record.displacement}. This is out of the typical displacement range, therefore it is likely incorrect, and the dendrometer may need recalibration on the tree. Please check this as soon as possible.`
            );
            displacementAlertSentTimestamps[5] = now;
            }
        }
    }
  } catch (err) {
    console.error('Error polling:', err.message);
  }
}, 10000);

setInterval(async () => {
  try {
    const res = await fetch(NORTHERN_7_ENDPOINT);
    if (!res.ok) throw new Error('Failed to fetch data');
    const recordData = await res.json();
    const record = {
        timestamp: convertUkToUtcDate(recordData.timestamp),
        temperature: recordData.temperature,
        humidity: recordData.humidity,
        soilMoisture: recordData.soilmoisture,
        displacement: recordData['displacement in micrometer ']
    }
    const currentTimestamp = record.timestamp;
    const previousTimestamp = latestTimestampNorthern7 ? new Date(latestTimestampNorthern7) : null;
    if (!previousTimestamp || currentTimestamp > previousTimestamp) {
      latestTimestampNorthern7 = currentTimestamp.toISOString();
      latestRecordNorthern7 = record;
      ioNorthern7.emit('latest-record-northern-7', record);
      if (record.displacement > 10) {
            const now = Date.now();
            const lastSent = displacementAlertSentTimestamps[6];
            if (!lastSent || now - lastSent > 24 * 60 * 60 * 1000) {
            sendAlertEmail(
                'Northern 7 - Displacement Out of Range',
                `Displacement value has exceeded 10. It is currently: ${record.displacement}. This is out of the typical displacement range, therefore it is likely incorrect, and the dendrometer may need recalibration on the tree. Please check this as soon as possible.`
            );
            displacementAlertSentTimestamps[6] = now;
            }
        }
    }
  } catch (err) {
    console.error('Error polling:', err.message);
  }
}, 10000);

async function getData(endpointUrl, dirPath, req) {
    try {
        const res = await fetch(endpointUrl);
        if (!res.ok) throw new Error('Failed to fetch data');
        const records = await res.json();
        const data = records.map(recordData => {
            return {
                timestamp: convertUkToUtcDate(recordData.timestamp),
                temperature: recordData.temperature,
                humidity: recordData.humidity,
                soilMoisture: recordData.soilmoisture ?? recordData.soilmosture ?? null,
                displacement: recordData['displacement in micrometer ']
            };
        });
        data.sort((a, b) => a.timestamp - b.timestamp);
        if (req.query?.latest === 'true') return data[data.length-1];
        return data;
    } catch (error) {
        console.log(error);
        let data = [];
        fs.readdirSync(dirPath).forEach(file => {
            if (path.extname(file) === '.json') {
                const filePath = path.join(dirPath, file);
                const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                data = fileData.map(recordData => {
                    return {
                        timestamp: convertUkToUtcDate(recordData.timestamp),
                        temperature: recordData.temperature,
                        humidity: recordData.humidity,
                        soilMoisture: recordData.soilmoisture ?? recordData.soilmosture ?? null,
                        displacement: recordData['displacement in micrometer ']
                    }
                });
            }
        });
        data.sort((a, b) => a.timestamp - b.timestamp);
        if (req.query?.latest === 'true') return data[data.length-1];
        return data;
    }
}

setInterval(() => {
  const now = Date.now();
  for (let i = 0; i < 7; i++) {
    const lastTimestamp = [
      latestTimestampNorthern1,
      latestTimestampNorthern2,
      latestTimestampNorthern3,
      latestTimestampNorthern4,
      latestTimestampNorthern5,
      latestTimestampNorthern6,
      latestTimestampNorthern7
    ][i];

    const lastAlert = noDataAlertSentTimestamps[i];

    if (lastTimestamp) {
      const lastTime = new Date(lastTimestamp).getTime();
      const diff = now - lastTime;

      if (diff > 5 * 60 * 60 * 1000) {
        if (!lastAlert || now - lastAlert > 24 * 60 * 60 * 1000) {
          sendAlertEmail(
            `Northern ${i + 1} - Stopped Streaming`,
            `No data has been received from Northern ${i + 1} in over 5 hours. The last record was sent at: ${new Date(lastTimestamp).toLocaleString()} Please check the device is still on, connected to Wi-Fi, and streaming, as soon as possible.`
          );
          noDataAlertSentTimestamps[i] = now;
        }
      }
    }
  }
}, 10 * 60 * 1000); // every 10 minutes


app.get('/', (req, res) => {
    res.json({Endpoints:
        [ 
            { Endpoint: '/northern_1' }, 
            { Endpoint: '/northern_2' },
            // { Endpoint: '/northern_3' },
            // { Endpoint: '/northern_4' },
            // { Endpoint: '/northern_5' },
            // { Endpoint: '/northern_6' },
            // { Endpoint: '/northern_7' }
        ]
    });
});

app.get('/northern_1', async (req, res) => res.json(await getData(NORTHERN_1_ENDPOINT_ALL, NORTHERN_1_DIR_PATH, req)));
app.get('/northern_2', async (req, res) => res.json(await getData(NORTHERN_2_ENDPOINT_ALL, NORTHERN_2_DIR_PATH, req)));
app.get('/northern_3', async (req, res) => res.json(await getData(NORTHERN_3_ENDPOINT_ALL, NORTHERN_3_DIR_PATH, req)));
app.get('/northern_4', async (req, res) => res.json(await getData(NORTHERN_4_ENDPOINT_ALL, NORTHERN_4_DIR_PATH, req)));
app.get('/northern_5', async (req, res) => res.json(await getData(NORTHERN_5_ENDPOINT_ALL, NORTHERN_5_DIR_PATH, req)));
app.get('/northern_6', async (req, res) => res.json(await getData(NORTHERN_6_ENDPOINT_ALL, NORTHERN_6_DIR_PATH, req)));
app.get('/northern_7', async (req, res) => res.json(await getData(NORTHERN_7_ENDPOINT_ALL, NORTHERN_7_DIR_PATH, req)));

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_SEND_TO,
    replyTo: email,
    subject: `StF SV Tool - New Contact Form Message`,
    text: `Message received on: ${new Date().toLocaleString()} 
    [First Name]: ${firstName} 
    [Last Name]: ${lastName}
    Email: ${email}
    Message: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message' });
  }
});

async function sendAlertEmail(subject, message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_SEND_TO,
    subject,
    text: `${message}\n\nTime: ${new Date().toLocaleString()}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`ALERT EMAIL SENT: ${subject}`);
  } catch (err) {
    console.error('Failed to send alert email:', err.message);
  }
}

app.listen(PORT_DATA, () => {
  console.log(`Data server running at http://localhost:${PORT_DATA}`);
});

socketServerNorthern1.listen(PORT_SOCKET_NORTHERN_1, () => {
    console.log(`Northern 1 socket data server running at http://localhost:${PORT_SOCKET_NORTHERN_1}`);
});

socketServerNorthern2.listen(PORT_SOCKET_NORTHERN_2, () => {
    console.log(`Northern 2 socket data server running at http://localhost:${PORT_SOCKET_NORTHERN_2}`);
});

socketServerNorthern3.listen(PORT_SOCKET_NORTHERN_3, () => {
    console.log(`Northern 3 socket data server running at http://localhost:${PORT_SOCKET_NORTHERN_3}`);
});

socketServerNorthern4.listen(PORT_SOCKET_NORTHERN_4, () => {
    console.log(`Northern 4 socket data server running at http://localhost:${PORT_SOCKET_NORTHERN_4}`);
});

socketServerNorthern5.listen(PORT_SOCKET_NORTHERN_5, () => {
    console.log(`Northern 5 socket data server running at http://localhost:${PORT_SOCKET_NORTHERN_5}`);
});

socketServerNorthern6.listen(PORT_SOCKET_NORTHERN_6, () => {
    console.log(`Northern 6 socket data server running at http://localhost:${PORT_SOCKET_NORTHERN_6}`);
});

socketServerNorthern7.listen(PORT_SOCKET_NORTHERN_7, () => {
    console.log(`Northern 7 socket data server running at http://localhost:${PORT_SOCKET_NORTHERN_7}`);
});
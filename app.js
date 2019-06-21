const express = require('express');
const app = express();

const crypto = require('crypto');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function (req, res) {

  const password = "1234";
  const salt = "+8KxBK/wFbbkPyvfImahuktMAHFHGuXjyF2etcKe4BfD8NAWSbGlJg1Y3b61Txw27s4zAq72WoYDiyYDDmwiLWVDnthXYeRUWgdmcqz4femzYD3JdpF1s9Adjn2iz4URJZ7CVrKv+8RFEJb4qLxDdFfxHi1hvi5qFUAftY15Sbc=";
  //const salt = crypto.randomBytes(128).toString('base64');
  // console.log("salt:", salt);
  // const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  crypto.pbkdf2(password, salt, 10000, 512, 'sha512', (err, hash) => {
    console.log("hash done");
    // if (users[username].hash.toString() === hash.toString()) {
    //   res.sendStatus(200);
    // } else {
    //   res.sendStatus(401);
    // }
  });

  res.send('Test World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
const express = require('express');
const app = express();

// app.use(express.json());

// app.post('/data', (req, res) => {
//     res.send(req.body)
// //   res.send(`Received: ${JSON.stringify(req.body)}`);
// });



app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  res.send(`Form Data: ${req.body.name}`);
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

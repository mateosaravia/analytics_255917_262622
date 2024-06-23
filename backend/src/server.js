const express = require('express');
const Vertica = require('vertica');
const mainRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', mainRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

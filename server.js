const express = require('express');
const studentRoutes = require('./src/student/routes');
const authRoutes = require ('./src/auth/routes');
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect('/auth');
})

app.use('/students', studentRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

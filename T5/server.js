const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/', usersRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port 5001`);
});

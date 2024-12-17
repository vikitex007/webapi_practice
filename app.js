const express = require('express') // Import Express
const app = express(); // Create an Express app
const connectDb = require("./config/db")
const UserRouter = require("./routes/UserRoute")



connectDb();

app.use(express.json());
app.use("/api/user",UserRouter);


const port = 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
const express = require("express");
const morgan = require("morgan");
const app = express();
const router = require("./routes");
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
	res.send("Welcome to ~Insert Generic Car Ride Share App~");
});

//error handling???

app.listen(PORT, () => {
	console.log(`Server has started on port http://localhost:${PORT}...`);
});

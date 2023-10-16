import express from "express";
const app = express();
const PORT = 5000;
app.use(express.json()); // boiler code for setting up our express application

app.get("/", (req, res) => {
  console.log("test");
  res.send("hello from home page"); //get request is made then we send a response
});

app.post("/", (req, res) => {
  // section shows when sending list of students we get sorted list back
  try {
    // using try, catch block for getting data from body
    const { students } = req.body;
    if (!students) {
      return res
        .status(400)
        .json({ error: 'Missing "students" key in JSON data' });
    }

    const sortedStudents = students.sort(); // using js sort function to sort list of students
    res.json({ sorted_students: sortedStudents });
  } catch (error) {
    res.status(500).json({ error: error.message }); // if error occurs send error code and status as json
  }
});

app.listen(
  PORT,
  () => console.log(`sever Running on port: http://localhost:${PORT}`) // consoles .log our app activity status if msg shows then app running succesfully
);

const Todo = require("../model/Todo");

exports.getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ success: true, message: "All todos", todos });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// app.get("/flight/:id", (req, res) => {
//   try {
//     const id = req.params.id;
//     const flight = flights.find((flight) => flight.id === id);
//     if (flight) {
//       res.status(200).json({ message: "Flight ${id}", flight });
//     } else {
//       res.status(400).json({ message: `Flight ${id} not found` });
//     }
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

// app.post("/flight", (req, res) => {
//   try {
//     const { title, time, price, date } = req.body;
//     const newFlight = {
//       id: getId(),
//       title,
//       time,
//       price,
//       date,
//     };

//     flights.push(newFlight);

//     res.status(200).json({ message: "New flight is added", newFlight });
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// app.put("/flight/:id", (req, res) => {
//   try {
//     const id = req.params.id;
//     const flight = flights.find((flight) => flight.id === id);
//     const { title, time, price, date } = req.body;
//     flight.title = title;
//     flight.time = time;
//     flight.price = price;
//     flight.date = date;

//     if (flight) {
//       res.status(200).json({ message: `Flight ${id} updated`, flight });
//     } else {
//       res.status(404).json(`Flight ${id} does not exit`);
//     }
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// app.delete("/flight/:id", (req, res) => {
//   try {
//     const id = req.params.id;
//     let flight = flights.find((flight) => flight.id === id);

//     if (flight) {
//       flights.splice(flights.indexOf(flight), 1);
//       res.status(200).json(`Flight ${id} is deleted`);
//     } else {
//       res.status(404).json(`Flight ${id} does not exit`);
//     }
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

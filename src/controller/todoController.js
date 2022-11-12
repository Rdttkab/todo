const Todos = require("../model/Todo");

exports.getAllTodo = async (req, res) => {
  try {
    const todos = await Todos.find();

    if (todos.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "No todos is found" });

    res.status(200).json({
      success: true,
      message: "All todos",
      todos,
      count: todos.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const todo = await Todos.findOne(id);

    if (!todo)
      return res
        .status(404)
        .json({ success: false, message: "Todo is not found" });

    res.status(200).json({ success: true, message: "Todo is found", todo });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await req.body;
    const created = await Todos.create(todo);

    if (!created)
      return res.status(400).json({
        success: false,
        message: "Todo creation failed",
      });

    res.status(200).json({
      success: true,
      message: "Todo created successfully",
      todo: created,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const todo = await req.body;
    const update = await Todos.findOneAndUpdate(id, todo, { new: true });

    if (!update)
      return res.status(400).json({
        success: false,
        message: "Todo is not updated",
      });

    res.status(200).json({
      success: true,
      message: `Todo ${id._id} updated successfully`,
      todo: update,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const deleted = await Todos.findByIdAndRemove(id);

    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "Todo is not deleted",
      });

    res.status(200).json({
      success: true,
      message: `Todo ${id._id} deleted successfully`,
      todo: deleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

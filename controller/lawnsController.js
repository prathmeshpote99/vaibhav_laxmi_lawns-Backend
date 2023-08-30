const lModel = require("../model/lawnsModel");

const Add = async (req, res) => {
  try {
    const addDetails = new lModel({
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Message: req.body.Message
    });
    const saveDetails = await addDetails.save();
    res.status(200).send({ msh: "Message Send", data: saveDetails });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { Add };

export default function (req, res, next) {
  console.log("IN THE API!");

  console.log("res: " + Object.keys(res));
  res.render("hi");
};

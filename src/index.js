const Mongoose = require("mongoose");

const app = require("./app");

const port = process.env.PORT || 3001;
app.listen(port, () => {
  /* eslint-disable no-console */
  Mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected !");
      console.log(`Listening: http://localhost:${port}`);
    })
    .catch((err) => console.log(err));

  /* eslint-enable no-console */
});

const { runMigration } = require("../scripts/run-migration");

const runApp = () =>{
  const env = process.env.NODE_ENV;
  if(env === "production") {
    runMigration()
  }
}
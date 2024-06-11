const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "rollno":String,
        "admno":String,
        "clg":String

    }
)


let studentmodel = mongoose.model("students",schema);
module.exports=(studentmodel)
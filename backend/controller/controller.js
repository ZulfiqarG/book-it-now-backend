const booking = require("../model/booking"); //imported schema model


// async getBooking function for finding the last object in the collection
const getBooking = async (req,res)=>{
    let data; //for storing the data 
try{
data = await booking.find({},{_id:0,__v:0});
}
catch(err){
    console.log(err.message) //logging the error if any
}
//if there is no data avaiable then send a response "no previous booking found"
if(data.length===0){
    res.send("no previous booking found");
    return;
}

//else send the last oject from the collection as response with status code(200)
res.status(200).send(data[data.length-1])

}


//async postBooking function for creating a new document in the collection and sending response with the lastest object(document). 
const postBooking = async (req,res)=>{
    let data;
try{
data = new booking(req.body); //creating a new booking document with the inputs from frontend stored in req.body
await data.save();  //saving the data
}
catch(err){
    console.log(err) //log error if any
}

//if there is no data then send a response of "unable to add" with status code 500
if(!data){
    res.status(500).send("Unable to add")
}
//else if the data is succesfully added then give response of the latest document added in the collection with status code 200.
else{
   
   booking.find().then((result)=>res.status(200).send(result[result.length-1]))

}
}


//async deleteBooking function for deleting all the documents in the database
const deleteBooking = async (req,res)=>{
try{
 await booking.deleteMany();
res.send("deleted")
}
catch(err){
    res.status(500).send(err.message)
}
}

//exported these functions
exports.getBooking = getBooking;
exports.postBooking = postBooking;
exports.deleteBooking = deleteBooking;

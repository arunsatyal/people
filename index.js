import express  from "express";
import { dbConnect } from "./src/config/dbConfig.js";
import { viewAllPeople, showPeopleById, createPerson, updatePerson, deletePerson } from "./src/model/peopleModel.js"

const app = express();
dbConnect();
const PORT = 8000;

//Middleware
app.use(express.json())

// INDEX all data
app.get("/people", async (req, res)=>{
const viewAll = await viewAllPeople();
 res.json({
  data: viewAll
  })
})

// Show (View data by ID)
app.get("/people/:id", async (req, res)=>{
  const {id} = req.params;
  const peopleDataById = await showPeopleById(id)
  res.json({
    peopleDataById
  })
})

//Create person
app.post("/add", async(req, res)=>{
  const result = await createPerson(req.body)
  result?._id ? res.json({
    message: "Successfully added"
  }) : res.json({
    message: "Error",
  })
})

// Update Person Data
  app.patch("/people/:id", async(req, res)=>{
  const {id} = req.params;
  const result = await updatePerson(id, req.body);
  result?._id ? res.json({
    message: "Success"
  }) : res.json({
    message: "error"
  })

})

// Delete Person by Id
app.delete("/people/:id", async(req, res)=>{
  const {id} = req.params;
  const deleted = await deletePerson(id);
  deleted?._id ? res.json({
    message: "DELETED"
  }) : res.json({
    message: "ERROR"
  })
})


app.listen(PORT, (error)=>{
  error
  ? console.log("Error: ", error) : console.log("Connected to port: " + PORT)
});
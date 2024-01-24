import peopleSchema from "../schema/peopleSchema.js"

export const viewAllPeople = ()=>{
 return peopleSchema.find();
}

//Show people by ID
export const showPeopleById = (id)=>{
  return peopleSchema.findById(id);
}

// Create
export const createPerson = (personObj) =>{
  return peopleSchema(personObj).save();
}

// Update
export const updatePerson = (id, updatedData)=>{
  return peopleSchema.findByIdAndUpdate(id, updatedData);
}

// Delete
export const deletePerson = (id) =>{
  return peopleSchema.findByIdAndDelete(id)
}
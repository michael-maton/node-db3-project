// scheme-model
const db = require("../../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};

function find() {
  return db("schemes");
}
function findById(id) {
  const schemeObject = db("schemes").where("schemes.id", id);
  // return (schemeObject ? schemeObject : "id does not exist")
  if (!schemeObject) {
    return Promise.resolve(null);
  } else {
    return schemeObject;
  }
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "steps.scheme_id", "schemes.id")
    .where("steps.scheme_id", id)
    .select("scheme_name", "instructions", "step_number")
    .orderBy("step_number");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(([id]) => {
      return findById(id);
    });
}

function addStep(stepData, schemeID) {
  return db("steps")
    .where("steps.scheme_id", schemeID)
    .insert(stepData)
    .then(([id]) => {
      findSteps(id);
    });
}

function update(changes, id) {
  return db("schemes")
    .where("schemes.id", id)
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
function remove(id) {
  const deleted = findById(id);
  if (!deleted) {
    return Promise.resolve(null);
  } else {
    return db("schemes").delete().where("schemes.id", id);
  }
}

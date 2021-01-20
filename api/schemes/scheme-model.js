// scheme-model
const db = require("../../data/db-config.js")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove,
}

function find() {
    return db("schemes")
}
function findById(id) {
    const schemeObject = db("schemes").where("schemes.id", id);
    // return (schemeObject ? schemeObject : "id does not exist")
    if (!schemeObject) {
        return Promise.resolve(null)
    } else {
        return schemeObject;
    }
}

function findSteps(id) {
    return db("steps")
        .join("schemes", "steps.scheme_id", "schemes.id")
        .where("steps.scheme_id", id)
        .select("scheme_name", "instructions", "step_number")
        .orderBy("step_number")
}

function add() {

}
function addStep() {

}
function update() {

}
function remove() {

}
const Companies = require('../models/companies')

// .: Bring all the companies
async function getAllCompanies() {
    return Companies.find()
}
// .: Search companie by ID
async function getCompanieById(id) {
    return Companies.findById(id)
}
// .: Add a new Companie in the DB
async function addCompanie(newCompanie) {
    try {
        const {name} = newCompanie
        let companieExist = await Companies.findOne({name: name})
        if(companieExist) throw new Error('The companie already exist')
        const createCompanie = await Companies.create(newCompanie)
        return createCompanie
    } catch(error) {error.message}
}

module.exports = {
    getAllCompanies: getAllCompanies,
    getCompanieById: getCompanieById,
    addCompanie: addCompanie
}
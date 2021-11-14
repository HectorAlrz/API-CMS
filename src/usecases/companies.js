const Companies = require('../models/companies')

// .: Bring all the companies
async function getAllCompanies() {
    return Companies.find()
}

// .: Search companie by ID
async function getCompanyById(id) {
    return Companies.findById(id)
}

// .: Add a new Companie in the DB
async function addCompany(newCompany) {
    try {
        const {name} = newCompany

        let companyExist = await Companies.findOne({name: name})
        if(companyExist) throw new Error('The company already exist')

        const createCompany = await Companies.create(newCompany)
        return createCompany
    } catch(error) {error.message}
}

// .: Update Company
async function updateCompany(id, newCompanyData){
    try {
        const idExist = Companies.findById(id)
        if(!idExist) throw new Error('Company does not exist')
        return Companies.findByIdAndUpdate(id, newCompanyData, {new: true})
    }
    catch(error){console.log(error.message)}
}

// .: Delete company
async function deleteCompanyById(id){
    const company = await Companies.findByIdAndRemove(id)
    return company
}

module.exports = {
    getAllCompanies: getAllCompanies,
    getCompanyById: getCompanyById,
    addCompany: addCompany,
    updateCompany: updateCompany,
    deleteCompanyById: deleteCompanyById
}
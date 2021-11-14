const express = require('express')
const router = express.Router()

const Companies = require('../usecases/companies')

// .: Get all Companies
router.get('/', async (request, response) =>{
    try {
    const allCompanies = await Companies.getAllCompanies()
    response.status(200)
    response.json({
        success: true,
        message: 'Companies List',
        data: {
            companies: allCompanies
        }
    })
  } catch (error) {
      response.status(400)
      response.json({
          success: false,
          error: error.message,
          message: 'Recovering Companies went wrong, try again'
      })
  }
})

// .: Get a company by ID
router.get('/:id', async (request, response)=> {
    try {
        const {id} = request.params
        const companyFound = await Companies.getCompanyById(id)
        if(companyFound) {
            response.status(200)
            response.json({
                success: true,
                message: 'Company found',
                data: {
                    companie: companyFound
                }
            })
        } else {
            response.status(204)
            response.json({
                success: false,
                message: 'Company does not exist'
            })
        }
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Company does not exist',
            error: error.message,
        })
    }
})


// .: Post a companie
router.post('/addCompany', async (request, response)=>{
    try {
        const newCompany = request.body
        console.log(newCompany)
        const addNewCompany = await Companies.addCompany(newCompany)
        if(addNewCompany) {
            response.status(201)
            response.json({
                success: true,
                message: "Company added",
                data: {
                    companie: addNewCompany
                }
            });
        } else {
            response.json({
                success: false,
                message: 'Something went wrong...',
            });
        }
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message,
            message: "Something went wrong at creating a new Company, try again...",
        })
    }
})

router.patch('/update/:id', async (request,response)=>{
    try {
        const { id } = request.params
        console.log('id', id)
        const newCompanyData = request.body
        const companyUpdated = await Companies.updateCompany(id, newCompanyData)
        if (companyUpdated) {
            response.status(200)
            response.json({
                success: true,
                message: "Company updated",
                data: {
                    companie: {
                        companyUpdated
                    }
                }
            })
        }
        else {
            response.json({
                success: false,
                message: "The company you're trying to update doesn't exist"
            })
        }
    }
    catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message,
            message: "Something went wrong updating the company... try again"
        })
    }
})

router.delete('/:id',async (request,response)=>{
    try{
        const {id} = request.params
        const company = await Companies.deleteCompanytById(id)
        if(company){
            response.json({
                success:true,
                message:"company deleted succesfully",
                data:{
                    company: company
                }
            })
        }
        else{
            response.json({
                success:true,
                message:"The company you are trying to delete does not exists",
            })
        }
    }
    catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error deleting company',
            error: error.message
        })
    }
})


module.exports = router
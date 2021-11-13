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

router.get('/:id', async (request, response)=> {
    try {
        const {id} = request.params
        const companieFound = await Companies.getCompanieById(id)
        if(companieFound) {
            response.status(200)
            response.json({
                success: true,
                message: 'Companie found',
                data: {
                    companie: companieFound
                }
            })
        } else {
            response.status(204)
            response.json({
                success: false,
                message: 'Companie does not exist'
            })
        }
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Companie does not exist',
            error: error.message,
        })
    }
})

router.post('/addCompanie', async (request, response)=>{
    try {
        const newCompanie = request.body
        const addNewCompanie = await Companies.addCompanie(newCompanie)
        if(addNewCompanie) {
            response.status(201)
            response.json({
                success: true,
                message: "Companie added",
                data: {
                    companie: addNewCompanie
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
            message: "Something went wrong at creating a new Companie, try again...",
        })
    }
})

module.exports = router
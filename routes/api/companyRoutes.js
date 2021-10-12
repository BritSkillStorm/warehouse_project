const router = require('express').Router();
const {getAllCompanies, addCompany} = require('../../controllers/company');




// get all companies
router.get('', getAllCompanies);


// get one company
router.post('', addCompany);

module.exports = router;
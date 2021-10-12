const router = require('express').Router();
const {getAllCompanies, addCompany, getCompanyById} = require('../../controllers/company');




// get all companies
router.get('', getAllCompanies);

// get company by id

router.get('/:companyId', getCompanyById)

// get one company
router.post('', addCompany);

module.exports = router;
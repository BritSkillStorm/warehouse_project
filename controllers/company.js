const Company =require('../models/company');
const mongoose = require('mongoose');


// getting companies

const getAllCompanies = async(req, res) =>{
    try {
      
        console.log("testing");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        const companies = await Company.find();
        console.log('finding companies');
        if(companies.length ===0) throw {status: 500, error: 'Could not find any companies.'};
        mongoose.connection.close();
        res.status(200).json(companies);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}


// adding new item, returning _id console id.
const addCompany = async(req, res) =>{

    try {
                
        await mongoose.connect(process.env.MONGO_URI);
        const company = new Company({name: req.body.name});
        const newCompany = await company.save();
        mongoose.connection.close();
        res.status(200).json(newCompany);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}

const getCompanyById = async(req, res) =>{
    try {
      
        console.log("testing inside get company by id");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        // searching by mongoose ID ******
        const company = await Company.findById(req.params.companyId);
        console.log('finding company by id');
        if(company == null) throw {status: 404, error: 'Could not find company'};
        mongoose.connection.close();
        res.status(200).json(company);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}


module.exports = {
    addCompany,
    getAllCompanies,
    getCompanyById
}
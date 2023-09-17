const db = require('../config/db.manager');
exports.getAllCustomers = function (req, res) {
const customers = db.getCustomers().then(results=>{
console.log(results);
res.status(200).json({
status: 'successfull',
data: results.recordsets[0]
}); // send all the data
});
}

exports.getCustomerByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}

exports.createNewCustomer = async function( req, res){ // must select the body to beraw->JSON in Postman
try{
const saved = await db.saveCustomer(req.body);

 if (saved) {
    res.status(200).json({
         status: 'successful',
         message: 'Customer data saved successfully',});
         } else {
            res.status(500).json({
                status: 'error',
                message: 'Failed to save customer data',
            });
        }
    }
catch(error){
    res.status(500).json({
        status: 'error',
        message: error.message,
    });
}

}

exports.patchCustomerById = function( req, res){ // must select the body to beraw->JSON in Postman
const {body} = req;// req.body (attribute)

const {id} = req.params;// get id (attribute)
res.status(200).json({
status: 'no implemented'
});
}

exports.deleteCustomerByID = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id
res.status(200).json({
status: 'no implemented'
});
}
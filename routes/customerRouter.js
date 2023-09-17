const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');
router
.route('/')
.get(customerController.getAllCustomers)
.post(customerController.createNewCustomer);
router
.route('/:id')
.get(customerController.getCustomerByID)
.patch(customerController.patchCustomerById)
.delete(customerController.deleteCustomerByID);
module.exports = router;
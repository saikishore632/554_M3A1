const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);

async function getCustomers(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT * From 
    salesLT.Customer
    `);
    console.log(`Returned SQL results`);
    return results;
}

async function saveCustomer(customerData) {
    try {
        console.log('Connecting to SQL....... Cloud Server');
        let dbContext = await sql.connect(dbConnection);
        console.log('The Database connection was Successful');
        console.log('Inserting customer data');
        let request =  dbContext.request()

        // Assuming customerData is an object with properties like FirstName, LastName, etc.
        request.input('Title', sql.NVarChar, customerData.Title);
        request.input('FirstName', sql.NVarChar, customerData.FirstName);
        request.input('MiddleName', sql.NVarChar, customerData.MiddleName);
        request.input('LastName', sql.NVarChar, customerData.LastName);
        // Add more input parameters as needed.

        let query = `
            INSERT INTO salesLT.Customer (Title, FirstName, MiddleName,LastName)
            VALUES (@Title,@FirstName,@MiddleName,@LastName);
        `;

        await request.query(query);

        console.log('Customer data saved successfully');

        return request; // Or you can return any specific success indicator you prefer.
    } catch (error) {
        console.error('Error saving customer:', error);
        throw error; // Rethrow the error for handling further up the call stack.
    }
}



//Export
module.exports = {getCustomers : getCustomers,saveCustomer:saveCustomer};
const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
   pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
   }); 
};  

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const { name, email, age } = req.body;
    
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }
        pool.query(queries.addStudent, [name, email, age], (error, results) => {
            if (error) throw error;
            res.status(201).send(`Student successfully created under email ${email}`);
        });
    });
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(queries.checkStudentExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.send(`Student with ID ${req.params.id} not found`);
        }
        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send(`Student with id ${req.params.id} successfully deleted`);
        });
    });
};

const updateStudentName = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.checkStudentExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.send(`Student with ID ${req.params.id} not found`);
        } 
        pool.query(queries.updateStudentName, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send(`student with id ${id} name changed to ${name}}`);
        });
    });
};

const updateStudentEmail = (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;

    pool.query(queries.checkStudentExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.send(`Student with ID ${req.params.id} not found`);
        } 
        pool.query(queries.updateStudentEmail, [email, id], (error, results) => {
            if (error) throw error;
            res.status(200).send(`student with id ${id} email changed to ${email}}`);
        });
    });
};

const updateStudentAge = (req, res) => {
    const id = parseInt(req.params.id);
    const { age } = req.body;

    pool.query(queries.checkStudentExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.send(`Student with ID ${req.params.id} not found`);
        } 
        pool.query(queries.updateStudentAge, [age, id], (error, results) => {
            if (error) throw error;
            res.status(200).send(`student with id ${id} age changed to ${age}}`);
        });
    });
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudentName,
    updateStudentEmail,
    updateStudentAge,
};
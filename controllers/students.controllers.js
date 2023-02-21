const students = require("../models/students.model");
const sequelize = require("../database.js");
const Course = require("../models/course.model");

exports.create = async (req, res) => {
    try {
        await sequelize.sync();
        const student = await students.create({
            surname: req.body.surname,
            firstName: req.body.firstName,
            DOB: req.body.DOB,
            LGA: req.body.LGA,
            state: req.body.state,
            nameOfParent: req.body.nameOfParent,
            phoneNumber: req.body.phoneNumber,
            yearOfAdmission: req.body.yearOfAdmission,
            email: req.body.email,
            previousClass: req.body.previousClass,
            className: req.body.className,
            teacher_id: req.body.teacher_id
        });

        res.status(201).json({
            status: "success",
            data: student,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error,
        });
    }
};

exports.getAll = async (req, res) => {
    try {
        await sequelize.sync();

        const student = await students.findAll();
        res.status(200).json({
            status: "success",
            data: student,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error,
        });
    }
};

exports.getOneById = async (req, res) => {
    const id = req.params.id;
    try {
        await sequelize.sync();
        const student = await students.findOne({
            where: {
                id: id,
            },
        });
        res.status(200).json({
            status: "success",
            data: student,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error,
        });
    }
};

exports.updateOneById = async (req, res) => {
    const id = req.params.id; 
    try {
        await sequelize.sync();
        const student = await students.update(
            {
                surName: req.body.surName,
                firstName: req.body.firstName,
                DOB: req.body.DOB,
                LGA: req.body.LGA,
                state: req.body.state,
                nameOfParent: req.body.nameOfParent,
                phoneNumber: req.body.phoneNumber,
                yearOfAdmission: req.body.yearOfAdmission,
                previousClass: req.body.previousClass,
            },
            {
                where: {
                    id: id,
                },
            }
        );
        res.status(200).json({
            status: "success",
            data: student,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error,
        });
    }
};

exports.deleteOneById = async (req, res) => {
    const id = req.params.id;
    try {
        await sequelize.sync();

        await students.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json({
            status: "success",
            data: null,
        });
    } catch (error) {
        res.status(200).json({
            status: "failed",
            data: error,
        });
    }
};

exports.getStudentReport = async(req,res) => {
  try {
    const student = await students.findOne({
        where: {
            email: req.body.email
        }
    })

    if(student) {
        const data = await students.findAll({
            include: [{
                model: Course,
                as: 'report'
            }],
            where: {
                id: req.body.id
            }
        })
    
        res.status(200).json({
            status: "success",
            data: data
        })
    }else {
        res.status(400).json({
            status: "failed",
            message: "no student found"
        })
    }
  } catch (error) {
    res.status(400).json({
        status: "failed",
        data: error
    })
  }
}


exports.getStudentCourses = async(req,res) => {
try {
    const data = await students.findAll({
        include: [{
            model: Course,
            as: 'report'
        }],
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({
        status: "success",
        data: data
    })
} catch (error) {
    res.status(200).json({
        status: "success",
        data: error
    })
}
}
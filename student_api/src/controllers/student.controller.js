const prisma = require("../prisma");

exports.getAllstudents = async (req, res) => {
    try {
        const search = req.query.search || "";
        const students = await prisma.student.findMany({
            where: { name: { contains: search } },
            orderBy: { id: "asc" },
        });
        res.json(students);
    } catch (error) {   
        res.status(500).json({ message: "Error"});
    }
}

exports.getStudentById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const student = await prisma.student.findUnique({
            where: {id}
        });
        if (!student) {
            return res.status(404).json({ message : 'Student not found' });
        }
        res.json(student);
    } catch {
        res.status(500).json({ message : 'Internal Server Error' });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { name, age, major } = req.body;
        if (!name || !age || !major) {
            return res.status(400).json({ message : 'Please field information' });
        };
        const newStudent = await prisma.student.create({
            data: { name, age: Number(age), major },
        });
        res.status(201).json(newStudent)
    } catch (error) {
        res.error(500).json({ message: 'Fail' });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: 'Invalid student id' });
        }
        const { name, age, major } = req.body;
        if (name === undefined && age === undefined && major === undefined) {
            return res.status(400).json({ message: 'No data provided for update' });
        }
        const existingStudent = await prisma.student.findUnique({
            where: { id },
        });
        if (!existingStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        const data = {};
        if (name !== undefined) data.name = name;
        if (age !== undefined) data.age = Number(age);
        if (major !== undefined) data.major = major;

        const updatedStudent = await prisma.student.update({
            where: { id },
            data,
        });
        res.json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: 'Invalid student id' });
        }
        const existingStudent = await prisma.student.findUnique({
            where: { id },
        });
        if (!existingStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        await prisma.student.delete({
            where: { id },
        });
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

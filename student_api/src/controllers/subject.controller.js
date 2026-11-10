const prisma = require("../prisma");

exports.getAllSubjects = async (req, res) => {
    try {
        const search = req.query.search || "";
        const subjects = await prisma.subject.findMany({
            where: { name: { contains: search } },
            orderBy: { id: "asc" },
        });
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getSubjectById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: 'Invalid subject id' });
        }
        const subject = await prisma.subject.findUnique({
            where: { id },
        }); 
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        res.json(subject);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createSubject = async (req, res) => {
    try {
        const { name, objective, description, teacher, credit } = req.body;
        if (!name || !objective || !description || !teacher || credit === undefined || credit === null) {
            return res.status(400).json({ message: 'Please fill in all information' });
        }
        if (Number.isNaN(Number(credit))) {
            return res.status(400).json({ message: 'Credit must be a number' });
        }
        const newSubject = await prisma.subject.create({
            data: {
                name,
                objective,
                description,
                teacher,
                credit: Number(credit),
            },
        });
        res.status(201).json(newSubject);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateSubject = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: 'Invalid subject id' });
        }
        const { name, objective, description, teacher, credit } = req.body;
        if (
            name === undefined &&
            objective === undefined &&
            description === undefined &&
            teacher === undefined &&
            credit === undefined
        ) {
            return res.status(400).json({ message: 'No data provided for update' });
        }
        if (credit !== undefined && Number.isNaN(Number(credit))) {
            return res.status(400).json({ message: 'Credit must be a number' });
        }
        const existingSubject = await prisma.subject.findUnique({
            where: { id },
        });
        if (!existingSubject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        const data = {};
        if (name !== undefined) data.name = name;
        if (objective !== undefined) data.objective = objective;
        if (description !== undefined) data.description = description;
        if (teacher !== undefined) data.teacher = teacher;
        if (credit !== undefined) data.credit = Number(credit);
        const updatedSubject = await prisma.subject.update({
            where: { id },
            data,
        });
        res.json(updatedSubject);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteSubject = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: 'Invalid subject id' });
        }
        const existingSubject = await prisma.subject.findUnique({
            where: { id },
        });
        if (!existingSubject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        await prisma.subject.delete({
            where: { id },
        });
        res.json({ message: 'Subject deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

app.get('/student/:id', (req, res) => {
    Student
    .findOne({id: req.params.id})
    .then(result => res.json(result))
    .catch(e => res.status(400).json('Not Found'));
});

app.post('/student', (req, res) => {
    const student = new Student(req.body);
    student.save((err, data) => {
        if(data) {
            res.json(data);
        }
        else {
          res.status(422).send(err);
        }
    });
});
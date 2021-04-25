const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({body},res) => {

    Workout.create(body)
    
    .then(workoutDB => {
        res.json(workoutDB);
    })

    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({body,params},res) => {
    console.log(body)

    Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true})

    .then(workoutDB => {
        res.json(workoutDB);
    })

    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {

    Workout.find({})
        .then(workoutDB => {
            res.json(workoutDB);
        })

        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {

    Workout.find({})
        
        .limit(10)

        .then(workoutDB => {
            res.json(workoutDB);
        })

        .catch(err => {
            res.status(400).json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {

    Workout.findByIdAndRemove(body.id)

        .then(() => {
            res.json(true);
        })

        .catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;
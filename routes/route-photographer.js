const express = require('express');
const router = express.Router();
const { Sequelize, sequelize } = require('../db');
const { Photographer } = require('../model/photographer');

// get all
router.get('/photographers', (req, res) => {
    Photographer.findAll().then(photographers => {
        res.json(photographers);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//route get by id
router.get('/photographers/:id', (req, res) => {
    Photographer.findByPk(req.params.id).then(photographer => {
        if (!photographer) {
            res.status(404).send('photographer not found');
        } else {
            res.json(photographer);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to create new
router.post('/photographers', (req, res) => {
    Photographer.create(req.body).then(photographer => {
        res.send(photographer);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//update
router.put('/photographers/:id', (req, res) => {
    Photographer.findByPk(req.params.id).then(photographer => {
        if (!photographer) {
            res.status(404).send('photographer not found');
        } else {
            photographer.update(req.body).then(() => {
                res.send(photographer);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//delete
// router.delete('/photographers/:id', (req, res) => {
//     Photographer.findByPk(req.params.id).then(photographer => {
//         if (!photographer) {
//             res.status(404).send('photographer not found');
//         } else {
//             photographer.destroy().then(() => {
//                 res.send("delete id :", req.params.id)
//             }).catch(err => {
//                 res.status(500).send(err);
//             });
//         }
//     }).catch(err => {
//         res.status(500).send(err);
//     });
// });

router.delete('/photographers/:id', (req, res) => {
    Photographer.findByPk(req.params.id).then(photographer => {
        if (!photographer) {
            return res.status(404).send('photographer not found');
        } else {
            photographer.destroy().then(() => {
                return res.send(`Deleted photographer with id: ${req.params.id}`);
            }).catch(err => {
                if (err.name === 'SequelizeForeignKeyConstraintError') {
                    return res.status(400).send('Cannot delete photographer because it is being referenced by another table');
                }
                return res.status(500).send(err.message);
            });
        }
    }).catch(err => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;
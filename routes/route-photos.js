const express = require('express');
const router = express.Router();
const { Sequelize, sequelize } = require('../db');
const { Photo } = require('../model/photos');
// require('../model/associations')();

// get all
router.get('/photos', (req, res) => {
    Photo.findAll().then(photos => {
        res.json(photos);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//route get by id
router.get('/photos/:id', (req, res) => {
    Photo.findByPk(req.params.id).then(photo => {
        if (!photo) {
            res.status(404).send('photo not found');
        } else {
            res.json(photo);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to create new
router.post('/photos', (req, res) => {
    Photo.create(req.body).then(photo => {
        res.status(201).send(photo);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//update
router.put('/photos/:id', (req, res) => {
    Photo.findByPk(req.params.id).then(photo => {
        if (!photo) {
            res.status(404).send('photo not found');
        } else {
            photo.update(req.body).then(() => {
                res.send(photo);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//delete
// router.delete('/photos/:id', (req, res) => {
//     Photo.findByPk(req.params.id).then(photo => {
//         if (!photo) {
//             res.status(404).send('photo not found');
//         } else {
//             photo.destroy().then(() => {
//                 res.send("delete id :", req.params.id)
//             }).catch(err => {
//                 res.status(500).send(err);
//             });
//         }
//     }).catch(err => {
//         res.status(500).send(err);
//     });
// });


router.delete('/photos/:id', (req, res) => {
    Photo.findByPk(req.params.id).then(photo => {
        if (!photo) {
            return res.status(404).send('photo not found');
        } else {
            photo.destroy().then(() => {
                return res.send(`Deleted photo with id: ${req.params.id}`);
            }).catch(err => {
                if (err.name === 'SequelizeForeignKeyConstraintError') {
                    return res.status(400).send('Cannot delete photo because it is being referenced by another table');
                }
                return res.status(500).send(err.message);
            });
        }
    }).catch(err => {
        return res.status(500).send(err.message);
    });
});
module.exports = router;
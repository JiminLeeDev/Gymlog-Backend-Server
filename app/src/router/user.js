import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    if (!req.query.error_test) {
        res.send({ msg: "The bird flies everytime." });
    } else {
        res.status(400).send({ msg: "The bird doesn't fly anymore." });
    }
});

router.post('/', (req, res) => {
    if (!req.query.error_test) {
        res.send({ msg: "The bird flies everytime." });
    } else {
        res.status(400).send({ msg: "The bird doesn't fly anymore." });
    }
});

router.put('/', (req, res) => {
    if (!req.query.error_test) {
        res.send({ msg: "The bird flies everytime." });
    } else {
        res.status(400).send({ msg: "The bird doesn't fly anymore." });
    }
});

router.delete('/', (req, res) => {
    if (!req.query.error_test) {
        res.send({ msg: "The bird flies everytime." });
    } else {
        res.status(400).send({ msg: "The bird doesn't fly anymore." });
    }
});


export default router;
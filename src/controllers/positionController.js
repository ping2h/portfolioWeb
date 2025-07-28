import positionService from '../services/positionService.js';

export const getAll = async (req, res) => {
    try {
        const all = await positionService.getAll();
        res.status(200).json(all);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getPositionByType = async (req, res) => {
    try {
        if (req.params.type == 0) {
            const stock = await positionService.getStock();
            res.status(200).json(stock);
        } else if (req.params.type == 1) {
            const bond = await positionService.getBond();
            res.status(200).json(bond);
        } else if (req.params.type == 2) {
            const crypto = await positionService.getCrypto();
            res.status(200).json(crypto);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
};


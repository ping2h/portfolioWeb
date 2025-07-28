import assetListService from "../services/assetListService";

const getAssetList = async (req, res) => {
    try {
        const all = assetListService.getAssetList;
        res.status(200).json(all);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default {
    getAssetList,
};

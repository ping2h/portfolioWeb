import assetListService from "../services/assetListService.js";

const getAssetList = async (req, res) => {
    try {
        // dev
        
        const all = await assetListService.getAssetList();
        
        res.status(200).json(all);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default {
    getAssetList,
};

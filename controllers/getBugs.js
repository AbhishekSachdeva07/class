import dbmodel from "../models/dbmodel.js";

const getBugs = async (req, res) => {
    try{
        const bugsdata = await dbmodel.find();
        if(!bugsdata || bugsdata.length === 0){
            return res.status(404).json({ message: 'No bugs found' });
        }
        return res.status(200).json({'bug':bugsdata});
    }
    catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export default getBugs;
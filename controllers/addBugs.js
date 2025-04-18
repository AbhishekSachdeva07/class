import dbmodel from "../models/dbmodel.js";

const addBugs = async (req, res) => {
    const bugdata = req.body;
    console.log(bugdata);
    try{
        if(!bugdata || Object.keys(bugdata).length === 0){
            return res.status(400).json({message: 'No data provided'});
        }
        const newbug = new dbmodel(bugdata);
        await newbug.save();
        return res.status(200).json({message: 'Bug added successfully', bug: newbug});
    }
    catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export default addBugs;
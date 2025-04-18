import dbmodel from "../models/dbmodel.js";

const addBugs = async (req, res) => {
    const bugdata = req.body;
    console.log(bugdata);
    try{
        if(!bugdata || Object.keys(bugdata).length != 3){
            return res.status(400).json({message: 'No data provided'});
        }
        if(Object.keys(bugdata)==='priorty' &&bugdata.priorty < 1 && bugdata.priorty > 5){
            return res.status(400).json({message: 'Priorty should be between 1 and 5'});
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
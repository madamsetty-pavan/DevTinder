const User = require('../models/user');

const postPutProfile = async (req, res) => {
    try {
        const APIparams = req.query;
        const APIBody = req.body;
        const dbDocument = await User.findOneAndUpdate(
            {emailId:APIparams.emailId},
            {$set: APIBody},
            {new: true}
        );

        if (!dbDocument) {
            return res.status(404).send("User not found");
        }

        res.status(200).send({ 
            message:"Successfully updated", 
            dbDocument
        });

    } catch(err) {
        console.error(err);
        res.status(500).send("Could not update");
    }
    
};

const getProfile = async (req, res) => {
    try {
        const emailId = req.query.emailId;
        const allProfiles = await User.find({emailId: emailId});
        res.send(allProfiles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

const deleteProfile = async (req, res, next) => {
    try {
        const query = req.query;
        const deleteTest = await User.deleteOne({emailId : query.emailId});
        if(deleteTest.deletedCount > 0) {
            res.send("Successfull deleted");
        } else {
            throw new Error("User Not found");
        }
    } catch(err) {
        next(err);
    }
}

module.exports = {postPutProfile, getProfile, deleteProfile};
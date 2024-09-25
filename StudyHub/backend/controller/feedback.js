const Feedback=require('../model/feedback')

exports.feedback = async (req, res, next) => {
    const {email,feedback}=req.body;
    if(!email || !feedback){
        return next("Fill the form")
    }
    try {
        await Feedback.create({email,feedback})
        res.status(200).alert({ message: 'Feedback received!' });
    } catch (error) {
        next(error); // Pass errors to the error handling middleware
    }
};

const router = require("express").Router();
const Message = require("../models/Message");



// add message

router.post("/",async(req,res)=>{
    try {
        const newMessage = await Message(req.body);
        const savedmessage = await newMessage.save();
        res.status(200).json(savedmessage);
    } catch (error) {
        res.status(500).json(error)
    }
})

// get
router.get("/:conversationId",async(req,res)=>{
    try {
        const messages  = await Message.find({
            conversationId:req.params.conversationId
        });
        res.status(200).json(messages);
        
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
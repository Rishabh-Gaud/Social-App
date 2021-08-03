const router = require("express").Router();
const Conversation = require("../models/Conversation");

// new Conversation

router.post("/", async(req,res)=>{
    const newConversation = new Conversation({
        members:[req.body.senderId,req.body.receiverId],
    });
    try {
        const saveConversation = await newConversation.save();
        res.status(200).json(saveConversation);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get conversation of a user 

router.get("/:userId", async(req,res)=>{
    try {
        const getConversation = await Conversation.find(
           {members : {$in:[req.params.userId]},
           });
           res.status(200).json(getConversation);
    } catch (error) {
        res.status(500).json(error)
    }
})

// get conversation includes two userId

router.get("/find/:firstUserId/:secondUserId",async(req,res)=>{
    try {
        const conversation = await conversation.findOne({
            members : {$all:[req.params.firstUserId,req.params.secondUserId]},

        });
        res.status(200).json(conversation)

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
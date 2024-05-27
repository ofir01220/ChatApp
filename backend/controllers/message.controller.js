import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import useConversation from "../../frontend/src/zustand/useConversation.js";

export const sendMessage = async (req, res) =>{
    try {
        const {message} = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            particepants : { $all: [senderId, receiverId] },
        });

        if(!conversation){
            conversation = await Conversation.create({
                particepants : [senderId,receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        //socket.io functionality goes here.
        const receiverSocketID = getReceiverSocketId(receiverId);
        if(receiverSocketID){
            io.to(receiverSocketID).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: " , error.message);
        res.status(500).json({error: "Internal server error"});
    }
};


export const getMessages = async (req, res)=>
{
    try {

        const receiverId = req.params.id;
        const senderId = req.user._id;

       
        let conversation = await Conversation.findOne({
            particepants : { $all: [senderId, receiverId] },
        }).populate("messages"); 

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller: " , error.message);
        res.status(500).json({error: "Internal server error"});
    }
};
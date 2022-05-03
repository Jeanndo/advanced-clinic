const {Vital}  = require('./../models')

const createVital = async(req,res)=>{
    try {
        const {name,description} = req.body;

         console.log("parameters",name,description)

        if(!name||!description){
            return res.status(400).json({message:"Please provide valid information"})
        }

        const newVital = await Vital.create({
          name,
          description
        })
        
        res.status(201).json({
            status:"success",
            data:{
                vitals: newVital
            }
        })

    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:"Error while creating a new vital sign",
            err:error
        })
    }
}

const getVital = async(req,res)=>{
    try {
        const uuid = req.params.uuid;
         
        const vital = await Vital.findOne({where: {uuid:uuid}})
        
        res.status(200).json({
            status:"success",
            data:{
                vitals:vital
            }
        })

    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:"Error while getting a vital sign"
        })
    }
}

const getAllVitals = async(req,res)=>{
    try {
        
        const vitals = await Vital.findAndCountAll()
        
        res.status(200).json({
            status:"success",
            data:{
                vitals
            }
        })

    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:"Error while getting vital signs"
        })
    }
}



const updateVital = async(req,res)=>{
    try {
        const {name,description} = req.body;
        const uuid = req.params.uuid;
         
        if(!name||!description){
            return res.status(400).json({message:"Please provide valid information"})
        }

        const vital = await Vital.findOne({where:{uuid}})

        if(!vital){
            return res.status(404).json({message:"No vital sign found with that ID"})
        }
        
        vital.name = name;
        vital.description =  description;
        await vital.save()

        res.status(200).json({
            status:"success",
            message: "Vital Sign updated successfully !!👍🏾"
        })

    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:"Error while updating a vital sign"
        })
    }
}


const deleteVital = async(req,res)=>{
    try {
        const uuid =  req.params.uuid
        
        const vital = await Vital.findOne({where:{uuid}})

        if(!vital){
            return res.status(404).json({message:"No vital sign found with that ID"})
        }
        
        res.status(200).json({
            status:"success",
            message:"Vital Sign deleted successfully !!👍🏾"
        })

    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:"Error while deleting a vital sign"
        })
    }
}


module.exports =  {createVital,getVital,getAllVitals,updateVital,deleteVital}
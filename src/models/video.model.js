 import mongoose,{Schema} from "mongoose";
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
 const videSchema=new Schema(
    {
       videoFile:{
            type:String,
            required:true
       },
       thumbnail:{
        type:String,
        required:true
       },
       title:{
        type:String,
        required:true
       },
       description:{
           type:String,
           required:true
       },
       duration:{
        type:Number,
        required:true
       },
       views:{
          type:Number,
          dafault:0
       },
       isPublisehd:{
         type:Boolean,
         default:true
       },
       owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
       }

    },
    {
        timestamps:true
    }
 )
 videSchema.plugin(mongooseAggregatePaginate)
 
 export const Video=mongoose.model("Video",videoSchema);
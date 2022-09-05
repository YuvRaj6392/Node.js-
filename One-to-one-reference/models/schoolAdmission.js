const mongoose=require('mongoose');
// const childModel=require('./child');
const schoolAdmissionSchema=mongoose.Schema({
    enrollmentCode:{type:String}
  
    
})


module.exports=mongoose.model('schoolAdmission',schoolAdmissionSchema);
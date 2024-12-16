
import Jwt  from "jsonwebtoken";


 export const generarJWT=(uid:any)=>{

    return new Promise((resolve,reject)=>{
     const payolad = {uid};
   Jwt.sign(payolad,process.env.SECRETORPRIVATEKEY!,{
        expiresIn:'4h',
     },(err,token)=>{
        if(err){
          reject(err);
        }else{
            resolve(token);
        }
     });
    });
};





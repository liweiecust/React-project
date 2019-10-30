import axios from 'axios';
import store from './store/store';
const server="http://hqqaeblade710.qae.aspentech.com:3000";
class VisionApi{
    static loadTestCases(blueprintName){
        return new Promise((resolve,reject)=>{
               axios.get(server+"/api/registry/vision/Template/project/"+blueprintName+"/task/Plan_Generation/key/Record")
               .then(response=>{
                   console.log(response);
                   resolve(JSON.parse(response.data.result));
                  
               })
               .catch(err=>{
                   resolve([]);
               })
    
        })
     
    }
    static loadVision(visionName){
        return new Promise((resolve,reject)=>{
            axios.get(server+"/api/registry/vision/"+visionName)
            .then(res=>{
                console.log(res);
                resolve(JSON.parse(res.data));
            })
            .catch(err=>{
                console.log(err);
            })
        })
    }

}
export default VisionApi

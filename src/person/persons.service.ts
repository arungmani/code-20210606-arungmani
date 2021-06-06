
 import { BMICATEGORY,HEALTH_DATA } from "../constants/bmiInfo";

 export const getBMIResult =  (personData:any)=> {
        let res = (personData.WeightKg/(personData.HeightCm/100));
        if(res<=BMICATEGORY.UNDER_WEIGHT){
          typeof(parseFloat(res.toString()).toFixed(2));
          HEALTH_DATA.UNDER_WEIGHT.bmi =parseFloat(res.toString()).toFixed(2);
          return {...HEALTH_DATA.UNDER_WEIGHT, ...personData};
        }
        else if(BMICATEGORY.UNDER_WEIGHT< res && res <=BMICATEGORY.NORMAL_WEIGHT){
          HEALTH_DATA.NORMAL_WEIGHT.bmi = parseFloat(res.toString()).toFixed(2);
          return {...HEALTH_DATA.NORMAL_WEIGHT, ...personData};
        }
        else if(BMICATEGORY.NORMAL_WEIGHT< res && res <=BMICATEGORY.OVER_WEIGHT){
          HEALTH_DATA.OVER_WEIGHT.bmi = parseFloat(res.toString()).toFixed(2);
          return {...HEALTH_DATA.OVER_WEIGHT, ...personData};
        }
        else if(BMICATEGORY.OVER_WEIGHT< res && res <=BMICATEGORY.MODERATELY_OBESE){
          HEALTH_DATA.MODERATELY_OBESE.bmi = parseFloat(res.toString()).toFixed(2);
          return {...HEALTH_DATA.MODERATELY_OBESE, ...personData};
        }
        else if(BMICATEGORY.MODERATELY_OBESE< res && res <=BMICATEGORY.SEVERELY_OBESE){
           HEALTH_DATA.SEVERELY_OBESE.bmi = parseFloat(res.toString()).toFixed(2);
          return {...HEALTH_DATA.SEVERELY_OBESE, ...personData};
        }
        else{
          HEALTH_DATA.VERY_SEVERELY_OBESE.bmi = parseFloat(res.toString()).toFixed(2);
          return {...HEALTH_DATA.VERY_SEVERELY_OBESE, ...personData};
        }
 }


import { BMI_CATEGORY, HEALTH_DATA } from "../constants/bmiInfo";

export const getBMIResult = (personData: any) => {
  let res = personData.WeightKg / (personData.HeightCm / 100); 

  if (res <= BMI_CATEGORY.UNDER_WEIGHT) 
   {
    HEALTH_DATA.UNDER_WEIGHT.bmi = parseFloat(res.toString()).toFixed(2);
    return { ...HEALTH_DATA.UNDER_WEIGHT, ...personData };
   } 
  
  else if (BMI_CATEGORY.UNDER_WEIGHT < res && res <=  BMI_CATEGORY.NORMAL_WEIGHT )
   {
    HEALTH_DATA.NORMAL_WEIGHT.bmi = parseFloat(res.toString()).toFixed(2);
    return { ...HEALTH_DATA.NORMAL_WEIGHT, ...personData };
   } 
  
  else if (BMI_CATEGORY.NORMAL_WEIGHT < res && res <= BMI_CATEGORY.OVER_WEIGHT) 
   {
    HEALTH_DATA.OVER_WEIGHT.bmi = parseFloat(res.toString()).toFixed(2);
    return { ...HEALTH_DATA.OVER_WEIGHT, ...personData };
   } 
  
  else if (BMI_CATEGORY.OVER_WEIGHT < res && res <= BMI_CATEGORY.MODERATELY_OBESE) 
   {
    HEALTH_DATA.MODERATELY_OBESE.bmi = parseFloat(res.toString()).toFixed(2);
    return { ...HEALTH_DATA.MODERATELY_OBESE, ...personData };
   } 
  
  else if (BMI_CATEGORY.MODERATELY_OBESE < res && res <= BMI_CATEGORY.SEVERELY_OBESE )
   {
    HEALTH_DATA.SEVERELY_OBESE.bmi = parseFloat(res.toString()).toFixed(2);
    return { ...HEALTH_DATA.SEVERELY_OBESE, ...personData };
   } 
  
  else 
   {
    HEALTH_DATA.VERY_SEVERELY_OBESE.bmi = parseFloat(res.toString()).toFixed(2); 
    return { ...HEALTH_DATA.VERY_SEVERELY_OBESE, ...personData };
   }
};

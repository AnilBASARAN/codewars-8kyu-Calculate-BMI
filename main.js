function bmi(weight, height) {
    let bmi = weight/height**2
    
    console.log(weight)
    console.log(height)
    console.log(bmi)
    if(bmi <= 18.5){
      return "Underweight"
    }else if(bmi<=25){
      return "Normal"
    }else if(bmi <= 30){
      return  "Overweight"
    }else {
      return "Obese"
    }
    
  }



/*

8kyu Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

FUNDAMENTALS

https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript
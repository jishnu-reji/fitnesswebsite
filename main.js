if(localStorage.getItem("user")){
    disname.innerHTML = localStorage.getItem("user")
}
else{
    alert("Please login")
    window.location = "index.html"
}
  
const logout=()=>{
    localStorage.removeItem("user")
    window.location="index.html"
}

const idealWeight = ()=>{
    h=eval(heightIw.value)
    g=document.getElementsByName('flexRadioDefault')
    val=0
    g.forEach(el=>{
        if(el.checked){
            val=el.value
        }
    })
    if(val==0){
        iw=50+(0.91*(h-152.4))
    }
    else{
        iw=45.5+(0.91*(h-152.4))
    }
    iwResult.innerHTML = `Your Ideal weight is ${Math.floor(iw)} Kg`
}

const bmi = ()=>{
    w=eval(weightIn.value)
    h=eval(heightIn.value)
    bm=w/(h/100)**2
    console.log(bm);
    bmiResult.innerHTML = `Your BMI is ${Math.floor(bm)}`
    if(bm<=18.4){
        bmres.innerHTML = "Under Weight"
    }
    else if(bm>=18.5&&bm<=24.9){
        bmres.innerHTML = "Normal Weight"
    }
    else if(bm>=25&&bm<=39.9){
        bmres.innerHTML = "Over Weight"
    }
    else{
        bmres.innerHTML = "Extream Obesity"
    }
}
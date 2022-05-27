function calcular(){

    var mat = parseInt(document.getElementById("math").value)  
    var por = parseInt(document.getElementById("por").value)  
    var ing = parseInt(document.getElementById("ing").value)  
    
    var notamsoma = parseInt(mat + por + ing)
    var notam = (10*notamsoma)/48

    document.getElementById("result").innerHTML = notam

}



function calcular2(){

    var mat = parseInt(document.getElementById("math").value)  
    var por = parseInt(document.getElementById("por").value)  
    var ing = parseInt(document.getElementById("ing").value)  
    var reda = parseInt(document.getElementById("red").value)

    var notafsoma = parseInt(mat + por + ing + reda)
    var notaf = (10*notafsoma)/58

    document.getElementById("result").innerHTML = notaf

}

function calcularmath(){

    var mat = parseInt(document.getElementById("math").value) 

    var notamath = (10*mat)/16
    document.getElementById("mathp").innerHTML = notamath
}



function calcularport(){

    var por = parseInt(document.getElementById("por").value) 

    var notapor = (10*por)/16
    document.getElementById("porp").innerHTML = notapor
}



function calcularing(){

    var ing = parseInt(document.getElementById("ing").value) 

    var notaing = (10*ing)/16
    document.getElementById("ingp").innerHTML = notaing
}
    




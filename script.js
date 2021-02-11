function selecionar(classe) {
    retirar()
    let valor = document.getElementsByClassName(classe)
        for(i = 0 ; i < valor.length; i++){
            valor[i].style.display="block"
        }
       
}
function retirar(){
    let valor = document.getElementsByClassName("pessoa")
    let valor2 = document.getElementsByClassName("grupo")
    let valor3 = document.getElementsByClassName("pagina")
        for(i = 0; i < valor.length; i++){
            valor[i].style.display ="none"
        }

        for(i = 0; i < valor2.length; i++){
            valor2[i].style.display ="none"
        }
        for(i = 0; i < valor3.length; i++){
            valor3[i].style.display ="none"
        }

}
window.onload = function(){
    alert("Seja bem vindo a Velah! É um prazer tê-lo conosco")
}

//mudança de cor quando o usuário passar o mouse
const titulo = document.getElementById("titulo");
console.log(document.getElementById("titulo"));

titulo.addEventListener("mouseover", function(){
    titulo.style.textShadow = "1px 1px grey";
})

titulo.addEventListener("mouseout", function(){
    titulo.style.textShadow = "none";
})


// troca das imagens dos produtos
let imagem1 = document.querySelector("#imagem1");

imagem1.addEventListener("mouseover", function(){
    imagem1.style.cursor = 'pointer';})

    imagem1.addEventListener("mouseout", function(){
        imagem1.style.cursor = "defaut";
    })

imagem1.addEventListener("click", function(){
    let meuSrc1 = imagem1.getAttribute("Src");

    if(meuSrc1 === "/images/mare-livre2.PNG"){
        imagem1.setAttribute("src", "/images/mare-livre.PNG")
    }else{
        imagem1.setAttribute("src", "/images/mare-livre2.PNG")
    }
})


let imagem2 = document.querySelector("#imagem2");

imagem2.addEventListener("mouseover", function(){
    imagem2.style.cursor = 'pointer';})

    imagem2.addEventListener("mouseout", function(){
        imagem2.style.cursor = "defaut";
    })

imagem2.addEventListener("click", function(){
    let meuSrc2 = imagem2.getAttribute("Src");

    if(meuSrc2 === "/images/sensacao-tropical2.PNG"){
        imagem2.setAttribute("src", "/images/sensacao-tropical.PNG")
    }else{
        imagem2.setAttribute("src", "/images/sensacao-tropical2.PNG")
    }
    
})

let imagem3 = document.querySelector("#imagem3");

imagem3.addEventListener("mouseover", function(){
    imagem3.style.cursor = 'pointer';})

    imagem3.addEventListener("mouseout", function(){
        imagem3.style.cursor = "defaut";
    })

imagem3.addEventListener("click", function(){
    let meuSrc3 = imagem3.getAttribute("Src");

    if(meuSrc3 === "/images/eterno-outono.PNG"){
        imagem3.setAttribute("src", "/images/eterno-outono2.PNG")
    }else{
        imagem3.setAttribute("src", "/images/eterno-outono.PNG")
    }
})


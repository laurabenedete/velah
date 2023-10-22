// mudar a imagem

let imagem = document.querySelector("#foto-perfil");

imagem.addEventListener("click", function(){
    let meuSrc = imagem.getAttribute("Src");

    if(meuSrc === "/images/laura-perfil.jpeg"){
        imagem.setAttribute("src", "/images/perfil-2.jpeg")
    }else{
        imagem.setAttribute("src", "/images/laura-perfil.jpeg")
    }

})
function toggleMode(){
    const html = document.documentElement /*document é a representacao do documento(pagina) em formato de objeto JS*/ 
    html.classList.toggle("light")

    /*if (html.classList.contains("light")){ /*if é uma condicional, se essa condiçao for verdadeira ele entra no cod. true x false */
    /*       html.classList.remove("light")
    } else{
        html.classList.add("light")
    } */

    /* simplificando a funçao do Button */

        //pegar a tag img
    const img = document.querySelector("#profile img")

        //substituir a imagem
        if 
        (html.classList.contains("light")) {
            //se tiver light mode, add a imagem "perfil-light"
        img.setAttribute("src","./assets/perfil-on.png")
        } 
        
            //se tiver sem light mode, manter a foto "perfil"
        else{ 
        img.setAttribute("src","./assets/perfil-off.png")

        }
        
        
    } 

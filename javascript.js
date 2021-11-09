
        var rta = 0;
        

        
        if(document.getElementById("frases").value == 3){
            var insertar = document.getElementById("ok-err1");
            insertar.innerHTML = '<img src="img/ok.png" alt="rta" class="mostrar-img1">';
        } else {
            var insertar = document.getElementById("ok-err1");
            insertar.innerHTML = '<img src="img/error.png" alt="rta" class="mostrar-img1">';
        }


        document.getElementById("fin").onclick = function (){
            
            if(document.getElementById("a3").checked){
                rta += 1;
            }
            if(document.getElementById("b4").checked){
                rta += 1;
            }
            if(document.getElementById("c3").checked){
                rta += 1;
            }
            if(document.getElementById("frases").value == 3){
                rta += 1;
            }
            var text2 = document.getElementById("child").value;
            
            if(text2.toLowerCase() == "pam" || text2.toLowerCase() == "pam beesley"){
                rta +=1 ;
            }
            if(document.getElementById("d1").checked){
                rta += 1;
            }
            var rtaFinal = document.getElementById("resultado-final");
            rtaFinal.innerHTML = rta + "/6 Respuestas correctas"; 
            document.getElementById("rdo").style.cssText = 'display: block;';

            var quote = document.getElementById("quote");
            if(rta<3){
                quote.innerHTML = '<img src="img/quote1.gif" alt="quote the office">';
                console.log("1 o 2");
            }   else if( rta > 2 && rta <5) {
                quote.innerHTML = '<img src="img/medium.jpg" alt="quote the office">';
                console.log("3 o 4");
            }   else if(rta > 4){
                quote.innerHTML = '<img src="img/quote.jpg" alt="quote the office">';
                console.log("5 o 6");
            }

        }
        document.getElementById("ver-rtas").onclick = function(){
            document.getElementById("rdo").style.cssText = 'display: none;';
            var greenContainer = document.querySelectorAll('div.rta');
            //console.log(greenContainer.length);
            for(i=0; i<greenContainer.length;i++){
                greenContainer[i].style.cssText = 'display: block';
            }
            var imgRta = document.querySelectorAll('img.mostrar-img');
            for(i=0; i < imgRta.length; i++){
                imgRta[i].style.cssText = 'display: block;';
            }

        }
        document.getElementById("rewind").onclick = function(){
            rta =0;
            var resultado = document.getElementById("rdo");
            resultado.style.cssText = 'display: none;';
        }
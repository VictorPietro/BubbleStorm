$('#buttonEntrar').click(function() {
     if($('#radiouser').is(':checked')) { alert("user checked"); }
     else if($('#radiodist').is(':checked')) { alert("distribuidor checked"); }
     else { alert("none checked"); }
});


function verificar(){
  
      tipo = $('input[name=tipo]:radio:checked').val()
      if (tipo == 'usuario'){
        alert("Usuario!");
        //this.router.navigateByUrl('/store');
        //this.router.navigate(['/store']);
        //botao = document.getElementById("buttonEntrar");
        //$("buttonEntrar").attr("routerLink", "/store");
        //<a routerLink = "store"></a>
        //document.getElementById("buttonCadastrar").routerLink="registeruser"
      } else {
        alert("Distributor!");
        //document.getElementById("buttonEntrar").routerLink="distributor"
        //document.getElementById("buttonCadastrar").routerLink="registeruser"

      }
    }

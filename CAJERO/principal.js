let cuenta = localStorage.getItem("cuenta");
        cuenta = JSON.parse(cuenta);
        document.getElementById("c1").value = cuenta.saldo;
                                       
                             
        function TransferenciaDeCuenta1() {
            let CantidadT = parseInt(document.getElementById('Cant').value);
            let Cantidad1 = parseInt(document.getElementById('c1').value);
             
             
             document.getElementById('c1').value = (Cantidad1 - CantidadT);
             

         }
         function depositarAcuenta() {
            let CantidadT = parseInt(document.getElementById('Cant').value);
            let Cantidad1 = parseInt(document.getElementById('c1').value);
            if (Cantidad1  > 990){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Estimado usuario su cuenta no puede exceder los $990",
                    footer: '<a href="">Atención</a>'
                    })
             }
            
            document.getElementById('c1').value = (Cantidad1 + CantidadT);           

        }
         
        function retirarDeCuenta() {
            let CantidadT = parseInt(document.getElementById('Cant').value);
            let Cantidad1 = parseInt(document.getElementById('c1').value);
            if (Cantidad1 < 10 ) {
                 Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: "Estimado usuario su cuenta no puede tener menos de $10!",
                            footer: '<a href="">Atención</a>'
                            })
                 return;
             }
            
            document.getElementById('c1').value = (Cantidad1 - CantidadT);

        }
        

        
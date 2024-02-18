// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {

    nombre:'kk',
    ciudad:'yy',
    departamentos:{
        ventas:{
                nombre:'dto vtas',
                empleados:[ 
                    {nombre:'juan', antig:33},
                    {nombre:'jpedro', antig:31},
                      ]
                },
         compras:{
            nombre:'com',
            empleados:[ 
                {nombre:'maria', antig:33},
                {nombre:'juana', antig:31},
                  ]
            },

                }  
         }       
module.exports = objetoAnidado;
              
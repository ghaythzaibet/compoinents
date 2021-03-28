
import react from 'react'

const cards = () => {

    let persons =[ 
        {firstname : "ghayth" ,
        lastname : "zaibet",
        adress: "nefta" ,
        image:"https://fr-fr.facebook.com/login/?cuid=AYjducLu2ahtRQRMFg4y6lx24TFTDVKA6l32A1wYGTyVVN_6lIDjJbJvZoyuaZHRVIy11ZLmYPsAJ1uQvPJnq-B6QxISE4B3Ie3KhTk8AZ-gXaJyLytUlpiGkbq2HRXsf38hPu9zrDsb0R1QnNBS795X&next&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE2OTMxODUyLCJjYWxsc2l0ZV9pZCI6MzQzNjE1NzkwMjAxNjQ0fQ%3D%3D"



        }
        {firstname : "kroos",
        lastname : "toni",
        adress: "madrid" ,
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.realmadrid.com%2Ffr%2Ffootball%2Feffectif%2Ftoni-kroos&psig=AOvVaw2fxx7vNfUuY8Zzkzi0w7Jj&ust=1617020470003000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD_l7Tv0u8CFQAAAAAdAAAAABAD"



        }
        {firstname : "modric",
        lastname : "lucas",
        adress: "madrid" ,
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.realmadrid.com%2Ffr%2Ffootball%2Feffectif%2Fluka-modric&psig=AOvVaw1vFrxWfyIm3qwNzp4lGZBZ&ust=1617020551609000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMii6Nrv0u8CFQAAAAAdAAAAABAD"



        }
    ]


      return (
        <div> style={{display:'flex' , justifycountent:'space-between'}}
{ persons.map(el => (
   <div class="card" style={{width: "18rem"}}>
   <img src="{el.image}" class="card-img-top" alt="..."/>
   <div class="card-body">
     <h5 class="card-title">{el.firstname} {el.lastname}</h5>
     <p class="card-text">{el.adress</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
 


))





     }

</div>















    )
}
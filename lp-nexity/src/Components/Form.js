import {React,useState,useEffect} from 'react'
import axios from "axios"
import './Form.css'
import arrow_btn from '../images/arrow_carousel.svg'


function Form(props) {
  
  const {showform,toggleform} = props;
  const [sendCall,setSendCall] = useState(false)
  

  function isCPValid(input) {
    return /((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}/.test(input);
  }

  function isTelephoneValid(input) {
    return /(((0|(00|\+)33[-. ]?)[1-9]([-. ]?[0-9]{2}){4})|((00|\+)(?!33|0)([-. ]?[0-9])+)+)/.test(input);
  }

  function isEmailValid(input) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(input);
  }

  function isTextValid(input) {
      return /^[a-zA-Z0-9]*$/.test(input)
  }
  function hideError(id){
    document.getElementById(id).style.display = "none"
    console.log(document.getElementById(id))
  }
  function showError(id){
     document.getElementById(id).style.display = "block"
  }


  function validate(e) {
    e.preventDefault();
    const last = document.getElementById("lastname").value
    const first = document.getElementById("firstname").value
    const tel = document.getElementById("tel").value
    const mail = document.getElementById("mail").value
    const postal = document.getElementById("postal").value
    const nexity1 = document.getElementById("offre_nexity1")
    const nexity2 = document.getElementById("offre_nexity2")
    const partenaire1 = document.getElementById("offre_partenaire1")
    const partenaire2 = document.getElementById("offre_partenaire2")
    let formisvalid = true;
    
    if (!isTextValid(first) || first.length <= 2)
    {
        showError("firstErr")
        formisvalid = false
    }
    else hideError("firstErr")

    if (!isTextValid(last) || last.length <= 2)
    {
        showError("lastErr")
        formisvalid = false
    }
    else hideError("lastErr")

    if (!isTelephoneValid(tel))
    {
        showError("telErr")
        formisvalid = false
    }
    else hideError("telErr")

    if (!isEmailValid(mail))
    {
        showError("mailErr")
        formisvalid = false
    }
    else hideError("mailErr")

    if (!isCPValid(postal))
    {
        showError("postalErr")
        formisvalid = false
    }
    else hideError("postalErr")

    if (!nexity1.checked && !nexity2.checked)
    {
        showError("nexityErr")
        formisvalid = false
    }
    else hideError("nexityErr")

    if (!partenaire1.checked && !partenaire2.checked)
    {
        showError("partenaireErr")
        formisvalid = false
    }
    else hideError("partenaireErr")

    if(formisvalid)
    {
        setSendCall(true)
    }
  }

  useEffect(() => {
    
    axios.post("https://preprod.nexity.fr/ws-rest/contact.json",{
       nom:"Michel",
       prenom:"Albert",
       codepostal:"75200",
       telephone:"0623456754",
       email:"test@diginfr.fr" ,
       Optin_nexity:"0",
       Optin_partenaire:"0",
       Optin_autorisation:"1",
       objet_mail:"TTES FILIALES CNAT FIN PINEL 0522 XXXXXXXXXXXXXXXX",
       ctcsrc:""

    },
    {
        auth : {
            username : "nexityWSDoc",
            password : "cW22)\\TJ/QPaOb2LR6"
        }
    }
    )
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=> {
        console.log(error)
    })
   
    
  }, [sendCall])
  
  return (
    <>
    {
    showform &&
    <section id='form' className=''>
        <p onClick={toggleform} className='close_form'>X</p>
        <div className='form_header'>
            <h1>Vous souhaitez profiter du Pinel actuel et du Pack Sérénité Investisseur ? </h1>
            <p>Nous vous remercions de bien vouloir renseigner vos coordonnées, un conseiller vous accompagnera.</p>
        </div>

        <form onSubmit={validate}>
            <div>
                <div className='form_part1'>
                    <div>
                        <input id='lastname' type="text" name='lastname'  placeholder='   Nom*'/> <br/>
                        <p className='error_style' id='lastErr'>Veuillez entrer un nom valide</p>  
                    </div>
                    <div>
                        <input id='firstname' type="text" placeholder='   Prénom*'/> <br/>
                        <p className='error_style' id='firstErr'>Veuillez entrer un prénom valide</p>  
                    </div>
                    <div>
                        <input id='tel' type="number" placeholder='   Téléphone*'/> <br/>
                        <p className='error_style' id='telErr'>Veuillez entrer un numéro valide</p>  
                    </div>
                    <div>
                        <input id='mail' type="mail" placeholder='   Adresse mail*'/> <br/>
                        <p className='error_style' id='mailErr'>Veuillez entrer un mail valide</p> 
                    </div>
                    <div>
                        <input id='postal' type="number" placeholder='   Code postal de la ville désirée*'/> <br/>
                        <p className='error_style' id='postalErr'>Veuillez entrer un code postal valide</p> 
                    </div>
                    
                </div>
                

                <div className='form_part2'>
                    <div>
                        <fieldset>
                            <legend><p>Je souhaite recevoir les offres personnalisées du groupe Nexity*</p></legend>
                            <div>
                                <input type="radio" id="offre_nexity1" name="offre_nexity" value="oui" />                        
                                <label for="offre_nexity1">Oui</label>
                                <input type="radio" id="offre_nexity2" name="offre_nexity" value="non"  />                        
                                <label for="offre_nexity2">Non</label>
                            </div>
                        </fieldset>
                        <span className='error_style' id='nexityErr'>Veuillez cocher au moins une case</span>
                    </div>
                    
                    <div>
                        <fieldset>
                            <legend><p>Je souhaite recevoir les offres personnalisées des partenaires du groupe Nexity*</p></legend>
                            <div>
                               <input type="radio" id="offre_partenaire1" name="offre_partenaire" value="oui" />                        
                                <label for="offre_partenaire1">Oui</label>
                            
                                <input type="radio" id="offre_partenaire2" name="offre_partenaire" value="non"  />                        
                                <label for="offre_partenaire2">Non</label> 
                            </div>
                        </fieldset>
                        <p className='error_style' id='partenaireErr'>Veuillez cocher au moins une case</p>
                    </div>
                    <div className='coord_container'>
                        <input id='coord' type="checkbox"  />
                        <label   label for='coord'>J’accepte que mes coordonnées soient traitées par Nexity, et/ou ses partenaires dans le cadre de ma demande et de  la relation commerciale qui pourrait en découler</label>
                    </div>
                    <p>*Champs obligatoires</p>
                </div>
            </div>
            <button className='submit_btn' > Être contacté <img src={arrow_btn}/></button>
        </form>
    </section>
    
    }
    </>
    
  )
}

export default Form
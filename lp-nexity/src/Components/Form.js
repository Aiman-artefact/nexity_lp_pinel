import {React,useState,useEffect} from 'react'
import axios from "axios"
import './Form.css'
import arrow_btn from '../images/arrow_carousel.svg'
import $ from 'jquery'

function Form(props) {
  
  const {showform,toggleform} = props;
  const [sendCall,setSendCall] = useState(false)
  const [optinNexity,setOptinNexity] = useState("0")
  const [optinPartenaire,setOptinPartenaire] = useState("0")
  const [optinAuto,setOptinAuto] = useState("0")
  const [greetings,setGreetings] = useState(false) 
  const [objet,setObjet] = useState("")
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
  }
  function showError(id){
     document.getElementById(id).style.display = "block"
  }

  function hideform(){
      toggleform();
      setGreetings(false)
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
    const coord = document.getElementById("coord")

    let formisvalid = true;
    
    if (first.length <= 2)
    {
        showError("firstErr")
        formisvalid = false
    }
    else hideError("firstErr")

    if (last.length <= 2)
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
    else
    {
      hideError("nexityErr") 
      if(nexity1.checked)
      {
          setOptinNexity("1")
      } 
    } 
    

    if (!partenaire1.checked && !partenaire2.checked)
    {
        showError("partenaireErr")
        formisvalid = false
    }
    else
    {
       hideError("partenaireErr")
       if(partenaire1.checked)
       {
           setOptinPartenaire("1")
       } 
    }

    if(!coord.checked)
    {
        showError("coordErr")
        formisvalid = false
    }
    else
    {
        hideError("coordErr")
        setOptinAuto("1")
    }
    if(formisvalid)
    {
        setSendCall(true)
        console.log({
            nom: document.getElementById("lastname").value,
            prenom: document.getElementById("firstname").value,
            codepostal: document.getElementById("postal").value,
            telephone: document.getElementById("tel").value,
            email: document.getElementById("mail").value,
            optin_nexity: optinNexity,
            optin_partenaire: optinPartenaire,
            optin_autorisation: optinAuto,
            objet_mail:objet,
            ctcsrc:""
         })
    }
  }

  function ctcsrc(){
    let params = new URLSearchParams(document.location.search);
    let ctc = params.get("ctcsrc")
    if (ctc == "ctc_emell201aa")
    {
        setObjet("VAL DE SEINE BAGNEUX 2201 ELIXIS EMELL201AA")
    }
    if (ctc == "ctc_baten205bj")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 TEADS BATEN205BJ")
    }
    if (ctc == "ctc_baten205bk")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 REACHCAST TEADS BATEN205BK")
    }
    if (ctc == "ctc_badzn205bl")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 NATIVE ADS DIGITALISME BADZN205BL")
    }
    if (ctc == "ctc_emdzn205bm")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 EMAILING DIGITALISME EMDZN205BM")
    }
    if (ctc == "ctc_bapwn205bn")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 NATIVE ADS POWERSPACE BAPWN205BN")
    }
    if (ctc == "ctc_emdkn205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 DIGITAL_KEYS EMA")
    }
    if (ctc == "ctc_bapln205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 PLANET NL")
    }
    if (ctc == "ctc_bapln206gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 PLANET NATIVE ADS")
    }
    if (ctc == "ctc_empln205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 PLANET EMA")
    }
    if (ctc == "ctc_emwrn205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 WEBREFLEX EMA")
    }
    if (ctc == "ctc_emvon205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 VISITE ONLINE EMA")
    }
    if (ctc == "ctc_ssedn205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 EDILEAD SMS")
    }
    if (ctc == "ctc_emnfn205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 NFR EMA TRAF")
    }
    if (ctc == "ctc_emnfn206gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 NFR EMA PERF")
    }
    if (ctc == "ctc_ssnfn205gb")
    {
        setObjet("TTES FILIALES CNAT FIN PINEL 0522 NFR SMS")
    }
    if (ctc == "ctc_bafbn205gx")
    {
        setObjet("DOMAINES CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205gy")
    {
        setObjet("ATLANTIQUE CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205gz")
    {
        setObjet("NORMANDIE CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205ha")
    {
        setObjet("PARIS VAL DE SEINE CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205hb")
    {
        setObjet("BRETAGNE CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205hc")
    {
        setObjet("RBA CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205hd")
    {
        setObjet("RBA CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205he")
    {
        setObjet("RBA CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205hf")
    {
        setObjet("RBA CNAT FIN PINEL 0522 FACEBOOK")
    }
    if (ctc == "ctc_bafbn205hg")
    {
        setObjet("RBA CNAT FIN PINEL 0522 FACEBOOK")
    }
    
  }
  useEffect(() => {
    ctcsrc()
    if(sendCall == true)
    {
      $.post("https://investissement-immobilier.nexity.fr/gateway.php",{
       nom: document.getElementById("lastname").value,
       prenom: document.getElementById("firstname").value,
       codepostal: document.getElementById("postal").value,
       telephone: document.getElementById("tel").value,
       email: document.getElementById("mail").value,
       optin_nexity: optinNexity,
       optin_partenaire: optinPartenaire,
       optin_autorisation: optinAuto,
       objet_mail:objet,
       ctcsrc:""
    },
    function(res) {
        if(res.status === "ok")
        {
          let layernexity = optinNexity
          let layerpartenaire = optinPartenaire  
          console.log(res)
          document.getElementById("formulaire").reset()
          setGreetings(true)
          setSendCall(false)
          document.getElementById("formulaire").style.display = "none"
          
          if(layernexity == "1")
          {
              layernexity = "oui"
          }
          else
          {
              layernexity = "non"
          }

          if(layerpartenaire == "1")
          {
              layerpartenaire = "oui"
          }
          else
          {
              layerpartenaire = "non"
          }
          window.dataLayer.push({
            cookie_statut: "oui",
            categorie_page: "formulaire",
            env_site: "web",
            env_working: "prod",
            event: "virtualpage",
            form_optin_partenaire: layerpartenaire,
            form_optin_pub: layernexity,
            langue: "fr",
            nom_page: "FORM_cok_pinel",
            univers: "b2c",
            univers_nexity: "nfr",
            form_numero_de_dossier : res.id_unique,
            objet_cc :res.objet_mail,
            virtualpage_url: "/virtual/formulaire/FORM_cok_pinel",
            virtualpagetitle: "formulaire_pinel"
          })
        }
       else
       {
           console.log("ERREUR")
       }
    }
    )  
    }
    
  }, [sendCall])
  
  return (
    <>
    {
    showform &&
    <>
    <section id='form' className=''>
        <div>
            <p onClick={hideform} className='close_form'>X</p>
            <div className='form_header'>
                <h1>Vous souhaitez profiter du Pinel actuel et du Pack Sérénité Investisseur ? </h1>
                <p>Nous vous remercions de bien vouloir renseigner vos coordonnées, un conseiller vous accompagnera.</p>
            </div>

            <form id='formulaire' onSubmit={validate}>
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
                            <label label for='coord'>J’accepte que mes coordonnées soient traitées par Nexity, et/ou ses partenaires dans le cadre de ma demande et de  la relation commerciale qui pourrait en découler</label>
                        </div>
                        <p className='error_style' id='coordErr'>Veuillez cocher la case des coordonnées</p> 
                        <p>*Champs obligatoires</p>
                    </div>
                </div>
                <button className='submit_btn' > Être contacté <img src={arrow_btn}/></button>
            </form>
        </div>
    </section>
    {greetings && <div className='greetings'>Merci, un conseiller Nexity va vous contacter dans les plus brefs délais.<p onClick={hideform} className='close_form'>X</p></div>}
    </>
    }
    </>
    
  )
}

export default Form
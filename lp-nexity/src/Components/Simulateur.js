import {React,useState,useEffect} from 'react'
import './Simulateur.css'
import euro from '../images/euro.svg'
import arrow from '../images/arrow_black.svg'
import retry from '../images/retry.svg'


function Simulateur(props) {

  const [budget,setBudget] = useState(0)
  const [defiscal1,setDefiscal1] = useState(0)
  const [defiscal2,setDefiscal2] = useState(0)
  const [economy,setEconomy] = useState(0)
  const [hiddencomp, setHiddencomp] = useState(false)
  const [error_compa, setError_compa] = useState(false)

  function toggle_simu(){
    if(hiddencomp)
    {
      setHiddencomp(false)
      const elem = document.getElementById("container_simulateur");
      window.scrollTo(0, elem.offsetTop);
    }
    else
    {
      if (error_compa === false && document.getElementById("budget").value.length > 0)
      {
        setHiddencomp(true)
        const elem = document.getElementById("container_simulateur");
        window.scrollTo(0, elem.offsetTop);
      }
      else
      {
        focus_simu();
      }
    }
  }

  function numStr(a, b) {
    a = '' + a;
    b = b || ' ';
    var c = '',
        d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length-1; i >= 0; i--) {
      c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }

  function focus_simu() {
    const input_budget =  document.getElementById("budget")
    input_budget.focus();
  }

  function defiscalisation() {
    const input_budget = document.getElementById("budget").value
    setBudget(input_budget)
  }
  useEffect(() => {
    if (hiddencomp === true)
    {
      document.getElementById("budget_start").value = budget 
      setDefiscal1(Math.round(budget*0.21))
      setDefiscal2(Math.round(budget*0.175))
      setEconomy(defiscal1-defiscal2)
    }
    else
    {
      if(budget < 100000 && budget > 0)
      {
        setError_compa(true)
      }
      else
      {
        setError_compa(false)
      }
    }
  }, [budget,defiscal1,hiddencomp,error_compa])
  
  
  return (
    <section id='container_simulateur'>
      {
        hiddencomp ?
        <></>
        :
      <div className='simulateur_home'>
        <div className='simulateur_header'>
          <div> <h1>COMPARATEUR</h1> <h1 className='simulateur_header-pinel'><span className='pinel_style'>PINEL</span></h1> </div>
          <p>Découvrez les avantages à investir aujourd'hui plutôt qu'en 2023 grâce au Pinel.</p>
          <button onClick={focus_simu} className='btn_simulation'><img src={arrow} alt="arrow right"/> Commencer la simulation</button>
        </div>

        <div className='simulateur_action'>
          <div>
            <p>Quel est votre budget ?</p>
            <div>
              <label for='budget'>Budget</label><br/>
              <input onInput={defiscalisation} type="number" id='budget' name='budget' min="0" placeholder='Votre montant'/>
              <img src={euro} alt='euro logo'/>
              {
                error_compa ? <p id='error_compa'>Veuillez entrer un montant valide (>100 000€)</p> : <></>
              }
              
            </div>
            
          </div>

          <button onClick={toggle_simu} className='grow_spin cta_simulateur'>Je valide</button>
        </div>
      </div>
      }


      {
        hiddencomp ?
        <div className='simulateur_start '>
          <div className='container_fields'>
            <div className='calcul_field'>
              <p><strong>Comparateur Pinel :</strong></p>
              <div className='budget_start'>
                <label for='budget'>Budget</label><br/>
                <input type="number" id='budget_start' name='budget' min="0" placeholder='Votre montant' disabled/>
                <img src={euro} alt='euro logo'/>
              </div>
            </div>

            <div className='calcul_field'>
              <p>Défiscalisation sur 12 ans au taux de 2022*</p>
              <div className='defiscal'>
                <p>{numStr(defiscal1)} €</p>
              </div>
            </div>

            <div className='calcul_field'>
              <p>Défiscalisation sur 12 ans au taux de 2023*</p>
              <div className='defiscal'>
                <p>{numStr(defiscal2)} €</p>
              </div>
            </div>

            <div className='calcul_field'>
              <p>En investissant aujourd’hui, j’économise*</p>
              <div className='total_economy'>
                <p>+ {numStr(economy)} €</p>
              </div>
            </div>
          </div>

          <div>
            <button onClick={toggle_simu} className='btn_retry'><img src={retry} /> Recommencer</button>
            <button onClick={props.toggleform}  className='grow_spin cta_simulateur-start'>Je prends rendez-vous</button>
          </div>
        </div>

      :
      <></>
      }
      
    </section>
  )
}

export default Simulateur
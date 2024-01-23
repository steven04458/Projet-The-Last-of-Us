import { useState } from 'react'
import compteLogo from '../../assets/images/compte.png'
import LDEN from '../../assets/images/Le-dernier-d-entre-nous.jpg'
import Chap2Logo from "../../assets/images/Chapitre_zone_de_quarantaine.png"
import Chap3Logo from "../../assets/images/La_P3Frie.png"
import Chap4Logo from "../../assets/images/L3Fglise_de_Bill.png"
import Chap5Logo from "../../assets/images/Pittsburgh.png"
import './Home.css'
import "../../index.css"
import HeaderPage from "../../components/header/header"

function Home() {
    const [activeForm, setActiveForm] = useState('chap1');
    const switchForm = (form) => {
        setActiveForm(form);
      };

  return (
    <>
        <HeaderPage></HeaderPage>
        <main className='home rowContainer alignCenter'>
            <div>
                <div className='header-content'>
                    <h2><span>Table</span> of content</h2>
                </div>
                <section>
                    <div className='indexes'>
                        <button type='button' onClick={() => switchForm('chap1')}>01</button>
                        <button type='button' onClick={() => switchForm('chap2')}>02</button>
                        <button type='button' onClick={() => switchForm('chap3')}>03</button>
                        <button type='button' onClick={() => switchForm('chap4')}>04</button>
                        <button type='button' onClick={() => switchForm('chap5')}>05</button>
                    </div>
                    <div className='tabs'>
                        <div className={`form ${activeForm === 'chap1' ? 'is-active' : ''}`}>
                            <div className='tab'>
                                <article className='tab-content'>
                                    <h3>Ville natale</h3>
                                    <p>En 2013, Joel avec sa fille Sarah, 
                                        aidé de son frère Tommy quitte sa maison à Austin pour fuir 
                                        la pandémie d'Infection Cérébrale par Cordyceps qui frappe la ville.</p>
                                    <button>Confirmer</button>
                                </article>
                                <div className='tab-image'>
                                    <img src={LDEN}></img>
                                </div>
                            </div>
                        </div>
                        <div className={`form ${activeForm === 'chap2' ? 'is-active' : ''}`}>
                            <div className='tab'>
                                <article className='tab-content'>
                                    <h3>Zone de quarantaine</h3>
                                    <p>20 ans plus tard, Joel devenu un contrebandier intrépide fait la connaissance d'Ellie, 
                                        une petite fille qu'il va devoir escorter avec sa coéquipière Tess hors de la zone de quarantaine de Boston où il vit.</p>
                                    <button>Confirmer</button>
                                </article>
                                <div className='tab-image'>
                                    <img src={Chap2Logo}></img>
                                </div>
                            </div>
                        </div>
                        <div className={`form ${activeForm === 'chap3' ? 'is-active' : ''}`}>
                            <div className='tab'>
                                <article className='tab-content'>
                                    <h3>La périphérie</h3>
                                    <p>Joel, Tess et Ellie traversent les ruines de Boston pour rejoindre le Capitol où une faction, 
                                        les Lucioles, doivent récupérer Ellie car, 
                                        bien que mordue par un infecté, 
                                        elle ne s'est pas transformé et ce serait la clé pour trouver un vaccin.</p>
                                    <button>Confirmer</button>
                                </article>
                                <div className='tab-image'>
                                    <img src={Chap3Logo}></img>
                                </div>
                            </div>
                        </div>
                        <div className={`form ${activeForm === 'chap4' ? 'is-active' : ''}`}>
                            <div className='tab'>
                                <article className='tab-content'>
                                    <h3>La ville de Bill</h3>
                                    <p>Joel et Ellie partent à la rencontre de Bill, un vieil ami de Joel, 
                                        pour que celui-ci leur répare une voiture qui leur permettrait de rejoindre 
                                        Tommy dans le Wyoming qui fit autrefois partie des Lucioles..</p>
                                    <button>Confirmer</button>
                                </article>
                                <div className='tab-image'>
                                    <img src={Chap4Logo}></img>
                                </div>
                            </div>
                        </div>
                        <div className={`form ${activeForm === 'chap5' ? 'is-active' : ''}`}>
                            <div className='tab'>
                                <article className='tab-content'>
                                    <h3>Pittsburgh</h3>
                                    <p> Joel et Ellie traversent Pittsburgh, se confrontant aux Chasseurs, 
                                        d'anciens résident de la zone de quarantaine ayant évincé l'armée. 
                                        Ils font également la rencontre d'Henry et Sam, deux frères, 
                                        avec qui ils parviendront à fuir de la ville.</p>
                                    <button>Confirmer</button>
                                </article>
                                <div className='tab-image'>
                                    <img src={Chap5Logo}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>
  )
}

export default Home;

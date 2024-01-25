import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Button , Toast, ToastHeader, ToastBody} from 'reactstrap'
import DevisButton from './DevisButton'

function Dashboard() {

  const user=useSelector((state)=>state.auth.user)
  let[isOpen,setIsOpen]=useState(false)

  return (
    <div>
      <section className='Myspace'>
      <h1>MON PROFIL</h1>
      <h1>Bonjour {user && user.name} { user && user.lastName}</h1>
      <h3>Adresse e-mail : {user && user.email}</h3>
      <hr/>
      <h5>Découvrez comment nous pouvons transformer vos espaces avec notre approche passionnée du nettoyage. Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et laissez SHINE MASTERS faire briller votre environnement.</h5>
      </section>
      <br/>
      <h5>Alors {user && user.name}, voici nos offres avec des prix indicatifs imbattables, cependant vous pouvez toujours demander un devis personnalisé en ligne ou par téléphone.</h5>
      <section className='Toasts'>
            <Toast isOpen={true}>
                <ToastHeader >Nettoyage Résidentiel</ToastHeader>
              <ToastBody>
              Offrez-vous le luxe d'une maison impeccable sans lever le petit doigt. Notre service de nettoyage résidentiel comprend le dépoussiérage, le nettoyage des sols, le lavage des vitres, et bien plus encore.
              <br/>
              Prix indicatif: À partir de 90DT par session, en fonction de la taille de la maison et de la fréquence des services.
              </ToastBody>
            </Toast>
            <Toast isOpen={true}>
                <ToastHeader >Nettoyage Commercial</ToastHeader>
              <ToastBody>
              Créez un environnement de travail propre et accueillant avec notre service de nettoyage commercial. Nous nous occupons de l'entretien des bureaux, des espaces communs et des sanitaires.
              <br/>
              Prix indicatif: À partir de 980DT par mois, tarification personnalisée en fonction de la taille de l'espace et de la fréquence des services.
              </ToastBody>
            </Toast>
            <Toast isOpen={true}>
                <ToastHeader >Nettoyage Après Travaux ou Déménagement</ToastHeader>
              <ToastBody>
              Libérez-vous du stress après des travaux ou un déménagement. Nous prenons en charge le nettoyage en profondeur pour éliminer toute trace de poussière, de débris ou de résidus de construction.
              <br/>
              Prix indicatif: À partir de 150DT par session, tarification basée sur l'étendue des travaux effectués.
              </ToastBody>
            </Toast>
            <Toast isOpen={true}>
                <ToastHeader >Entretien Préventif</ToastHeader>
              <ToastBody>
              Évitez l'accumulation de saleté avec notre service d'entretien préventif. Nous établirons un calendrier de nettoyage régulier pour maintenir votre espace toujours impeccable.
              <br/>
              Prix indicatif: Forfaits mensuels à partir de 75DT par session, adaptés à la fréquence des visites.
              </ToastBody>
            </Toast>
      </section>
      <hr/>
      <h4>{user && user.name},vous avez peut-être besoin d'une offre personnalisée ? Cliquez ici pour passer votre demande maintenant !</h4>
      <hr/>
      <DevisButton/>
      <hr/>
    </div>
  )
}

export default Dashboard

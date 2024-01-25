import React from 'react'
import { Toast, ToastHeader, ToastBody} from 'reactstrap'
import Alert from 'react-bootstrap/Alert';
import DevisButton from './DevisButton';


function NosServices() {
  return (
    <div>
        <section>
            <Alert variant='danger'>
      <h2>NOTRE MISSION</h2>
      <hr/>
      <h4>Notre mission chez SHINE MASTERS est de créer des espaces propres qui inspirent le bien-être et la sérénité. Nous comprenons que chaque client a des besoins uniques, c'est pourquoi nous personnalisons nos services pour répondre à ces exigences spécifiques.</h4> 
       <h4> En choisissant SHINE MASTERS, vous choisissez une équipe dévouée à l'excellence, à la fiabilité et à la satisfaction client.</h4>
       </Alert>
      </section>
   <hr/>
      <section>
      <h2>NOS VALEURS</h2> 
      <Alert variant="success">
      <h3>Intégrité</h3>
      </Alert>
      <h4>Nous agissons avec honnêteté et transparence dans toutes nos interactions, que ce soit avec nos clients, notre équipe ou nos partenaires</h4>
      <Alert>
      <h3>Responsabilité</h3>
      </Alert>
      <h4>Nous nous engageons à respecter l'environnement en utilisant des pratiques de nettoyage éco-responsables et des produits respectueux de l'écosystème.</h4>
    <Alert variant='warning'>
    <h3>Relation Client</h3>
    </Alert>
    <h4>La satisfaction de nos clients est notre priorité. Nous établissons des relations durables basées sur la confiance et la communication.</h4>
    <Alert variant="info">
    <h3>Innovation</h3>
    </Alert>
    <h4>Nous restons à la pointe de l'industrie en adoptant des technologies et des méthodes de nettoyage modernes pour garantir des résultats exceptionnels.</h4>
    </section>
    <hr/>
    <section className='Services'>
    <Alert variant='danger'>
        <h2>NOS SERVICES</h2>
        </Alert>
        <hr/>
        <h3>Entretien de Bureaux et Locaux Professionnels:</h3>
        <h6> Un environnement de travail propre favorise la productivité et le bien-être. Nous sommes là pour maintenir vos bureaux dans un état impeccable</h6>
        <hr/>
        <h3>Nettoyage Résidentiel et Commercial: </h3>
        <h6>Que vous ayez besoin d'une intervention ponctuelle ou d'un partenariat à long terme, notre équipe qualifiée est là pour assurer la propreté de vos espaces résidentiels ou commerciaux.</h6>
        <hr/>
        <h3>Nettoyage de Maisons et Appartements: </h3>
        <h6>Faites confiance à nos professionnels pour redonner à votre domicile son éclat d'origine. Nous nous occupons de chaque coin avec soin et attention.</h6>
        <hr/>
        <h3>Nettoyage Après Travaux ou Déménagement: </h3>
        <h6>Laissez-nous prendre en charge le nettoyage après vos projets de construction ou de déménagement. Nous nous occupons des détails pour que vous puissiez profiter pleinement de vos nouveaux espaces.</h6>
      </section>
      <br/>
      <h5> Voici ci-dessous nos offres avec des prix indicatifs imbattables, cependant vous pouvez toujours demander un devis personnalisé en ligne ou par téléphone.</h5>
      <hr/>
      <section className='Toasts'>
          <br />
            <Toast isOpen={true}>
                <ToastHeader >Nettoyage Résidentiel</ToastHeader>
              <ToastBody>
              Offrez-vous le luxe d'une maison impeccable sans lever le petit doigt. Notre service de nettoyage résidentiel comprend le dépoussiérage, le nettoyage des sols, le lavage des vitres, et bien plus encore.
              Prix indicatif: À partir de 90DT par session, en fonction de la taille de la maison et de la fréquence des services.
              </ToastBody>
            </Toast>
            <Toast isOpen={true}>
                <ToastHeader >Nettoyage Commercial</ToastHeader>
              <ToastBody>
              Créez un environnement de travail propre et accueillant avec notre service de nettoyage commercial. Nous nous occupons de l'entretien des bureaux, des espaces communs et des sanitaires.
              Prix indicatif: À partir de 980DT par mois, tarification personnalisée en fonction de la taille de l'espace et de la fréquence des services.
              </ToastBody>
            </Toast>
            <Toast isOpen={true}>
                <ToastHeader >Nettoyage Après Travaux ou Déménagement</ToastHeader>
              <ToastBody>
              Libérez-vous du stress après des travaux ou un déménagement. Nous prenons en charge le nettoyage en profondeur pour éliminer toute trace de poussière, de débris ou de résidus de construction.
              Prix indicatif: À partir de 150DT par session, tarification basée sur l'étendue des travaux effectués.
              </ToastBody>
            </Toast>
            <Toast isOpen={true}>
                <ToastHeader >Entretien Préventif</ToastHeader>
              <ToastBody>
              Évitez l'accumulation de saleté avec notre service d'entretien préventif. Nous établirons un calendrier de nettoyage régulier pour maintenir votre espace toujours impeccable.
              Prix indicatif: Forfaits mensuels à partir de 75DT par session, adaptés à la fréquence des visites.
              </ToastBody>
            </Toast>
      </section>
      <hr/>
      <h4>Vous avez peut-être besoin d'une offre personnalisée ? Cliquez ici pour passer votre demande maintenant !</h4>
      <hr/>
      <DevisButton/>
      <hr/>
    </div>
  )
}

export default NosServices

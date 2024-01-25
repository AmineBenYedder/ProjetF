import React from 'react'
import ParticlesBg from 'particles-bg'
import Contact from './Contact'
import Alert from 'react-bootstrap/Alert';


function Home() {

  return (
    <div>
      <div>
      <section className='Welcome'>
      <ParticlesBg type="square" bg={true} />
            <h1 id='Mytitle'>BIENVENUE</h1>
      <h2 id='Mytitle'>Bienvenue chez SHINE MASTERS - Votre partenaire de confiance pour des espaces impeccables ! </h2>
      <h2>Laissez-nous être le partenaire qui redonne à votre domicile ou votre lieu de travail son éclat d'origine.</h2>
      </section>
      </div>
      <div>
        <section className='SommeNous'>
          <Alert variant='success'>
      <h2> NOTRE HISTOIRE</h2>
      </Alert>
      <h3>Créée en 2005, l’entreprise SHINE MASTERS est spécialisée en nettoyage professionnel.</h3>
      <h5>Chez SHINE MASTERS, nous sommes bien plus qu'une entreprise de nettoyage. Nous sommes une équipe dévouée et passionnée, engagée à créer des environnements impeccables pour nos clients. Notre histoire est ancrée dans la conviction que la propreté va au-delà de l'apparence extérieure : c'est un élément essentiel du bien-être et du confort.</h5>
      <h5>À SHINE MASTERS, nous comprenons l'importance d'un environnement propre et bien entretenu. Nous sommes fiers de vous offrir des services de nettoyage exceptionnels, adaptés à vos besoins spécifiques</h5>
      <Alert variant='success'>
      <h3>Notre engagement </h3>
      </Alert>
      <h5>À chaque mission de nettoyage, nous apportons un engagement inébranlable envers la qualité et l'excellence. Notre équipe expérimentée est composée de professionnels du nettoyage dévoués, formés pour traiter chaque espace avec le plus grand soin. Nous croyons que la propreté crée un environnement propice au bonheur et à la productivité.</h5>
      </section>
      </div>
      <div>
      <section className='Services'>
      <Alert variant='warning'>
        <h2>NOS SERVICES</h2>
        </Alert>
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
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import Alert from 'react-bootstrap/Alert';


function Contact() {
  return (
 <div>
      <section className='Info'>
      <Alert variant='warning'>
         <h2>CONTACTEZ NOUS </h2>
         </Alert>
         <h3>Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons vous offrir des services de nettoyage exceptionnels. À SHINE MASTERS, la propreté est notre engagement !</h3>
        <hr/>
         <h4>INFORMATIONS:</h4>
         <h6>TEL : +216 99 340 137</h6>
         <h6>FAX : +216 71 143 900</h6>
        <h6>15 Avenue de Carthage (0,72 km) 1000 Tunis</h6>
        <h6>contact@shinemasters.tn</h6>
      </section>
      <section className='Mylocation'>
        <h2></h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505.4979040568512!2d10.181203294628716!3d36.796615268203325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd346d5860d47b%3A0x3d4cda51ba641560!2sLe15!5e0!3m2!1sfr!2stn!4v1705528706662!5m2!1sfr!2stn" width="1400" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
     <section>
     <h4>Mention légales :</h4>
         <hr/>
         <h6>© 2024 par Amine BEN YEDDER/GoMyCode 2023-2024.</h6>
        <h6>Nos Sites et Applications sont hébergés sur les serveurs localisés en Europe de Amazon Web Services Inc, PO Box 81226, Seattle, WA 981808-1226 – USA. https://aws.amazon.com/fr/compliance/eu-data-protection/. Les informations concernant la collecte et le traitement des données personnelles (politique et déclaration) sont fournies dans la charte de données personnelles du site.
                    Tous droits réservés - © 2024 par SHINE-MASTERS.</h6>  
    </section>
</div>
  )
}

export default Contact

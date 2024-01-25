import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,InputGroup } from 'reactstrap';

function DevisButton() {
    const [modal, setModal] = useState(false);
    const [prénom,setPrénom]=useState("");
    const [téléphone,setTéléphone]=useState("");
    const [message,setMessage]=useState("");

    const toggle = () => {setModal(!modal)};


  return (
    <div>
      <Button color="success" onClick={toggle}>
        DEMANDER UN DEVIS
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>DEMANDEZ UN DEVIS-SHINE MASTERS</ModalHeader>
        <p className='P-devis'>
        À SHINE MASTERS, nous comprenons que chaque espace est unique, et c'est pourquoi nous vous proposons des devis personnalisés pour répondre spécifiquement à vos besoins. 
        Laissez-nous être le partenaire qui redonne à votre domicile ou votre lieu de travail son éclat d'origine.
        <br/>
        C'est simple ! Remplissez notre formulaire de demande de devis en ligne ou contactez-nous directement par téléphone. Notre équipe réactive est prête à répondre à toutes vos questions et à comprendre vos besoins spécifiques.
        <br/>
        Offre Spéciale: En demandant un devis dès maintenant, bénéficiez d'une remise de 10% sur votre premier service !
        </p>
        <ModalBody>
        Obtenez Votre Devis Personnalisé - Transformez Votre Espace Aujourd'hui !          
        <InputGroup>
            <Input placeholder="Prénom" onChange={(event)=>setPrénom(event.target.value)} />
          </InputGroup>
          <InputGroup>
            <Input placeholder="Téléphone" onChange={(event)=>setTéléphone(event.target.value)} />
          </InputGroup>
          <InputGroup>
            <Input placeholder="Message" type="textarea" onChange={(event)=>setMessage(event.target.value)} />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Envoyer
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default DevisButton

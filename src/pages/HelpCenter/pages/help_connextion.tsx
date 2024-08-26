import React from 'react'
import { Text,Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Heading ,Image,UnorderedList,ListItem} from '@chakra-ui/react'
import access from '../Assets/sign/1.png';
import connect from '../Assets/sign/2.png';

function help_connextion() {
  return (
    <div>
      <Box>
        <Text className="BigTitle">Gestion de compte</Text>
      </Box>

      <Heading size='lg'> Comment se connecter à votre compte sur Temacina.com ?</Heading>

      <Box  className="tab-content-box">
          <Heading size='md' mb="20px" > Etape 1 :  Accéder à la page de connexion/inscription</Heading>
          <UnorderedList padding="20px">
              <ListItem className='liste_item'>Accédez à la page d’accueil Temacina.com.</ListItem>
              <ListItem className='liste_item'>Cliquez sur l'icône "Comptes" en haut à droite de la page d'accueil.</ListItem>
          </UnorderedList>
          <Image src={access} alt='Image'/>
      </Box>
    
      <Box   className="tab-content-box">
          <Heading size='md' mb="20px" > Etape 2 : Choisir l'option de connexion </Heading>
          <UnorderedList padding="20px">
              <ListItem className='liste_item'>Entrez votre email et votre mot de passe, puis cliquez sur "SE CONNECTER".</ListItem>
          </UnorderedList>
          <Image src={connect} alt='Image'/>          
      </Box>
    
      <Box   className="tab-content-box">
          <Heading size='md' mb="20px" > Tutoriel : Comment se connecter à votre compte sur Temacina.com ? </Heading>
          <Image src="https://via.placeholder.com/900x400" alt='Image'/>
      </Box>
                        
    </div>
  )
}

export default help_connextion
import React from 'react'
import {Text, Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Heading ,Image,UnorderedList,ListItem} from '@chakra-ui/react'
import a from '../Assets/majAch/a.png';
import b from '../Assets/majAch/b.png';
import c from '../Assets/majAch/c.png';
function help_maj_ach() {
  return (
    <div>
       < Box  >
        <Text className="BigTitle">Gestion de compte</Text>
      </Box>

      <Heading size='lg'> Comment mettre à jour vos informations personnelles ? (Acheteur)</Heading>

      <Box   className="tab-content-box">
          <Heading size='md' mb="20px" > Etape 1 : Accéder au profile Acheteur</Heading>
          <UnorderedList padding="20px">
              <ListItem className='liste_item'>Cliquez sur votre photo de profil au niveau de la barre de navigation et choisissez Profile Acheteur</ListItem>
          </UnorderedList>
          <Image src={a} alt='Image'/>          
      </Box>                      
      <Box   className="tab-content-box">
          <Heading size='md' mb="20px" > Etape 2 : Activer le mode d'édition </Heading>
          <UnorderedList padding="20px">
              <ListItem className='liste_item'> Cliquez sur l'icône de modification qui se trouve à droite.</ListItem>
          </UnorderedList>
          <Image src={b} alt='Image'/>          
      </Box>                      
      <Box   className="tab-content-box">
          <Heading size='md' mb="20px" > Etape 3 : Mettez à jour les informations </Heading>
          <UnorderedList padding="20px">
              <ListItem className='liste_item'>Écrivez les nouvelles informations que vous souhaitez ajouter dans les champs qui apparaissent.</ListItem>
              <ListItem className='liste_item'>Cliquez sur "Modifier" pour confirmer votre modification</ListItem>
          </UnorderedList>
          <Image src={c} alt='Image'/>          
      </Box>                      
      <Box   className="tab-content-box">
          <Heading size='md' mb="20px" > Tutoriel : Comment mettre à jour vos informations personnelles (Acheteur) </Heading>
          <Image src="https://via.placeholder.com/900x400" alt='Image'/>
      </Box>                        
    </div>
  )
}

export default help_maj_ach
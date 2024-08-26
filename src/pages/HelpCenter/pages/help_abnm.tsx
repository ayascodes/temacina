import React from 'react'
import { Text,Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Heading ,Image,UnorderedList,ListItem} from '@chakra-ui/react'
function help_abnm() {
  return (
    <div>
        < Box  >
           <Text className="BigTitle">Abonnement au pack</Text>
        </Box>

        <Heading size='lg'>Comment choisir un abonnement ?</Heading>

        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 1 : Accédez à la page d’accueil. </Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Accédez à la page d’accueil Temacina.com.</ListItem>
                <ListItem className='liste_item'>Cliquez sur Abonnement qui se trouve en dessous de la barre de recherche .</ListItem>
            </UnorderedList>
            <Image src="https://via.placeholder.com/900x400" alt='Image'/>
        </Box>

        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 2 : Choisissez les options que vous souhaitez.  </Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'> Choisissez la durée d'abonnement qui vous convient.</ListItem>
                <ListItem className='liste_item'> Choisissez la nature de votre entreprise (algérienne / étrangère).</ListItem>
            </UnorderedList>
            <Image src="https://via.placeholder.com/900x400" alt='Image'/>
        </Box>

        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 3 : Sélectionnez un forfait. </Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Lisez bien les avantages de chaque forfait ainsi que son prix, puis sélectionnez-en un.</ListItem>
            </UnorderedList>
            <Image src="https://via.placeholder.com/900x400" alt='Image'/>
        </Box>

        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 4 :  Remplissez vos informations. </Heading>
            <Image src="https://via.placeholder.com/900x400" alt='Image'/>
        </Box>

        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Tutoriel : Comment choisir un abonnement ?</Heading>
            <Image src="https://via.placeholder.com/900x400" alt='Image'/>
        </Box>

                    </div>
  )
}

export default help_abnm
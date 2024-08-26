import React from 'react'
import {Text, Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Heading ,Image,UnorderedList,ListItem} from '@chakra-ui/react'
import a from '../Assets/pwd/a.png';
import b from '../Assets/pwd/b.png';
import c from '../Assets/pwd/c.png';
import d from '../Assets/pwd/d.png';
import e from '../Assets/pwd/e.png';
import f from '../Assets/pwd/f.png';
import g from '../Assets/pwd/g.png';
function help_mdp() {
  return (
    <div>
        < Box  >
            <Text className="BigTitle">Gestion de compte</Text>
        </Box>

        <Heading size='lg'>Comment réinitialiser votre mot de passe sur Temacina.com ?</Heading>

        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" > Etape 1 : Accéder à la page de connexion.</Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Accédez à la page d’accueil Temacina.com</ListItem>
                <ListItem className='liste_item'>Cliquez sur l'icône "Comptes" en haut à droite de la page d'accueil.</ListItem>
            </UnorderedList>
            <Image src={a} alt='Image'/>
        </Box>                    
        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" > Etape 2 : Cliquez sur "Mot de passe oublié" </Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'> Allez sur la page de connexion.</ListItem>
                <ListItem className='liste_item'> Cliquez sur "Mot de passe oublié".</ListItem>
            </UnorderedList>
            <Image src={b} alt='Image'/>
        </Box>                    
        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" > Etape 3 : Entrez votre email </Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Entrez l'adresse email associée à votre compte.</ListItem>
                <ListItem className='liste_item'>Cliquez sur "Vérifier".</ListItem>
            </UnorderedList>
            <Image src={c} alt='Image'/>
        </Box>                    
        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" > Etape 4 :  Entrez le code de vérification </Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Vérifiez votre email pour un message de la part de algeriadigitalmarketadm@gmail.com contenant un code de vérification de 6 chiffres.</ListItem>
                <Image src={d} alt='Image'/>
                <ListItem className='liste_item'>Entrez le code dans le champ fourni.Attention ! Il faut entrer le code dans un délai maximum de 3 minutes sinon il ne sera pas accepté .</ListItem>
                <ListItem className='liste_item'>Si vous n'entrez pas le code dans les 3 minutes, cliquez sur "Renvoyer le code" et vérifiez à nouveau votre email</ListItem>
                <Image src={e} alt='Image' mb={2}/>
                <Image src={f} alt='Image'/>
            </UnorderedList>
        </Box>                    
        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" > Etape 5 : Créez un nouveau mot de passe</Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Entrez puis confirmez le nouveau mot de passe. </ListItem>
                <ListItem className='liste_item'>Cliquez sur "Vérifier" pour compléter le processus.</ListItem>
            </UnorderedList>
            <Image src={g} alt='Image'/>
        </Box>                    
        <Box   className="tab-content-box">
            <Heading size='md' mb="20px" > Tutoriel : Comment réinitialiser votre mot de passe sur Temacina.com</Heading>
            <Image src="https://via.placeholder.com/900x400" alt='Image'/>
        </Box>
                        
    </div>
  )
}

export default help_mdp
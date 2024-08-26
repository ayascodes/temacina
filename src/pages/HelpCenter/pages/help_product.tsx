import React from 'react'
import { Text,Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Heading ,Image,OrderedList,UnorderedList,ListItem} from '@chakra-ui/react'
import a from '../Assets/pdct/a.png';
import b from '../Assets/pdct/b.png';
import c from '../Assets/pdct/c.png';
import d from '../Assets/pdct/d.png';
import e from '../Assets/pdct/e.png';
import f from '../Assets/pdct/f.png';
import g from '../Assets/pdct/g.png';
import h from '../Assets/pdct/h.png';
import i from '../Assets/pdct/i.png';
import j from '../Assets/pdct/j.png';

function help_product() {
  return (
    <div>
        <Box>
            <Text className="BigTitle">Gestion des produits</Text>
        </Box>

        <Heading size='lg'>Comment ajouter un produit sur Temacina.com ?</Heading> 
         
        <Box  className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 1 : Cliquez sur votre photo de profil au niveau de la barre de navigation et choisissez “Pofile vendeur”.</Heading>
            <Image src={a} alt='Image'/>
        </Box>                    
        <Box  className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 2 : Sur la barre de navigation à gauche, cliquez sur "Produits".</Heading>
            <Image src={b} alt='Image'/>
        </Box>                    
        <Box  className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 3 :Cliquez sur le bouton "Poster un produit" qui se trouve à gauche.</Heading>
            <Image src={c} alt='Image'/>

        </Box>                    
        <Box  className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 4 : Choisissez le secteur et la catégorie du produit.</Heading>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Choisissez le secteur d'activité.</ListItem>
                <ListItem className='liste_item'>Sélectionnez le marché visé.</ListItem>
                <ListItem className='liste_item'>Cliquez sur le champ "Catégorie", Une liste déroulante apparaîtra contenant les catégories possibles, choisissez-en une. </ListItem>
            </UnorderedList>
            <Image src={d} alt='Image'mb={2}/>
            <Image src={e} alt='Image'/>
            <UnorderedList padding="20px">
                <ListItem className='liste_item'>Choisissez la sous-catégorie de la même manière que vous avez choisi la catégorie.</ListItem>
                <ListItem className='liste_item'>Donnez le nom de votre produit..</ListItem>
                <ListItem className='liste_item'>Cliquez sur "Suivant" pour passer à l'étape suivante. </ListItem>
            </UnorderedList>
            
        </Box>                    
        <Box  className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Etape 5 : Remplissez les informations.</Heading>
            <OrderedList padding="20px">
                <ListItem className='liste_item'>Informations du produit :
                <OrderedList padding="20px">
                    <ListItem className='liste_item'>Ajoutez les mots-clés en rapport avec votre produit. </ListItem>
                    <ListItem className='liste_item'>Introduisez la marque, la date de fabrication, le pays d'origine, le modèle, le groupe et la certification.</ListItem>
                    <ListItem className='liste_item'>Cliquez sur "Suivant".</ListItem>
                </OrderedList>
                </ListItem>
                <Image src={f} alt='Image'/>
                <ListItem className='liste_item'>Description :
                <OrderedList padding="20px">
                    <ListItem className='liste_item'>Ajoutez au moins une photo claire de votre produit (obligatoire), Vous pouvez ajouter jusqu’à 3 photos gratuitement, ou payer pour en ajouter davantage.</ListItem>
                    <ListItem className='liste_item'>Ajoutez une vidéo de votre produit pour mieux le présenter (facultatif).</ListItem>
                    <ListItem className='liste_item'>Ajoutez une description de votre produit pour fournir plus de détails.</ListItem>
                    <ListItem className='liste_item'>Cliquez sur "Suivant".</ListItem>
                </OrderedList>
                <Image src={g} alt='Image'/>
                </ListItem>
                <ListItem className='liste_item'>Échange :
                <OrderedList padding="20px">
                    <ListItem className='liste_item'>Choisissez la fixation du prix.</ListItem>
                    <ListItem className='liste_item'>Introduisez la quantité minimale de commande.</ListItem>
                    <ListItem className='liste_item'>Introduisez le prix par quantité ; vous pouvez ajouter plusieurs prix en cliquant sur le bouton "+".</ListItem>
                    <Image src={h} alt='Image' mb={2}/>
                    <Image src={i} alt='Image'/>
                    <ListItem className='liste_item'>Cliquez sur le champ "Modalités de paiement". Une liste déroulante apparaîtra ; choisissez tous les modes de paiement disponibles.</ListItem>
                </OrderedList>
                
                </ListItem>
                <ListItem className='liste_item'>Logistique :
                <OrderedList padding="20px">
                    <ListItem className='liste_item'>Introduisez le délai de livraison selon la quantité du produit,vous pouvez ajouter plusieurs délais selon la quantité en cliquant sur “+”.</ListItem>
                    <ListItem className='liste_item'>Choisissez le mode logistique.</ListItem>
                    <ListItem className='liste_item'>Introduisez le port.</ListItem>
                    <ListItem className='liste_item'>Ajoutez une description de l'emballage ainsi qu'une photo de l'emballage.</ListItem>
                    <ListItem className='liste_item'>Assurez-vous que vous acceptez les conditions et la politique du marché.</ListItem>
                    <ListItem className='liste_item'>Cliquez sur "Suivant".</ListItem>
                </OrderedList>
                <Image src={j} alt='Image'/>
                </ListItem>
            </OrderedList>
        </Box>                    
        <Box  className="tab-content-box">
            <Heading size='md' mb="20px" paddingTop="20px"> Tutoriel : Comment ajouter un produit sur Temacina.com</Heading>
            <Image src="https://via.placeholder.com/900x400" alt='Image'/>
        </Box>                        
                    </div>
  )
}

export default help_product
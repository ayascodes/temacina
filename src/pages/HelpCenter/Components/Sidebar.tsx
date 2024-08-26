import React, { useState } from 'react';
import {
  List,
  ListItem,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsBoxSeam } from "react-icons/bs";
import { CgCreditCard } from "react-icons/cg";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Box textAlign="center" width="100%" className="sideBarHeader">
        <NavLink to="/">    
          Centre d'aide
        </NavLink>
      </Box>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton fontSize="lg" fontWeight="bold">
              <Icon as={VscAccount} boxSize={6} mr="20px" color="#FF561C" className='sidebarItemIcon' /> 
              <Box as='span' flex='1' textAlign='left' className="sidebarItem">
                Gestion de compte
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List fontSize="md" spacing={4}> 
              <ListItem>
                <NavLink 
                  to="help_inscription" 
                  className={`sidebarItem ${selectedItem === 'help_inscription' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('help_inscription')}
                >
                  Inscription 
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink 
                  to="help_connextion" 
                  className={`sidebarItem ${selectedItem === 'help_connextion' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('help_connextion')}
                >                      
                  Connexion à votre compte 
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink 
                  to="help_maj_ach" 
                  className={`sidebarItem ${selectedItem === 'help_maj_ach' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('help_maj_ach')}
                >                        
                  Mise à jour des informations personnelles (Acheteur)
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink 
                  to="help_maj_vend" 
                  className={`sidebarItem ${selectedItem === 'help_maj_vend' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('help_maj_vend')}
                >                        
                  Mise à jour des informations personnelles (Vendeur)
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink 
                  to="help_mdp" 
                  className={`sidebarItem ${selectedItem === 'help_mdp' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('help_mdp')}
                >                        
                  Réinitialisation du mot de passe 
                </NavLink>
              </ListItem>
            </List>  
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton fontSize="lg" fontWeight="bold">
              <Icon as={BsBoxSeam} boxSize={6} mr="20px" color="#FF561C" className='sidebarItemIcon' />
              <Box as='span' flex='1' textAlign='left' className="sidebarItem">
                Gestion des produits
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List fontSize="md">
              <ListItem>
                <NavLink 
                  to="help_product" 
                  className={`sidebarItem ${selectedItem === 'help_product' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('help_product')}
                >                        
                  Ajout d'un produit
                </NavLink>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton fontSize="lg" fontWeight="bold">
              <Icon as={CgCreditCard} boxSize={6} mr="20px" color="#FF561C" className='sidebarItemIcon' />
              <Box as='span' flex='1' textAlign='left' className="sidebarItem">
                Abonnement au pack
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List fontSize="md">
              <ListItem>
                <NavLink 
                  to="help_abnm"  
                  className={`sidebarItem ${selectedItem === 'help_abnm' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('help_abnm')}
                >                        
                  Choix d'un abonnement
                </NavLink>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Sidebar;

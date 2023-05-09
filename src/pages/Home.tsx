import React, { useRef } from 'react'
import AboutCard from '../components/AboutCard'
import CLients from '../components/CLients'
import ActualiteCard from '../components/ActualiteCard'
import TeamMembers from '../components/TeamMembers'
import Produits from './Produits'
// @ts-ignore
import WOW from 'wowjs';

function Home() {

    React.useEffect(() => {
        const wow = new WOW.WOW({
            offset: 100,
            mobile: false,
            live: true,
        });
        wow.init();
    }, []);

    const containerRef = useRef<any>(null);
    const handleScroll = () => {
      const scrollTop = containerRef?.current?.scrollTop;
      console.log('Scroll position:', scrollTop);
    };
    return (
        <div onScroll={() => handleScroll()}>
            <ActualiteCard />
            {/* A propos de nous */}
            <AboutCard
                paragraphe1='Nous avons pour objectif de proposer aux établissements 
                scolaires un système de gestion et de collecte de données
                 facile à utiliser et rapide, afin de simplifier leurs tâches quotidiennes.'
            />
            {/* Nos produits */}
            <Produits />
            {/* Nos clients */}
            <CLients />
            {/* Our team */}
            <TeamMembers />
        </div>
    )
}

export default Home
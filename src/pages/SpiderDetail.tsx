import React from 'react'
import Accordion from '../components/Accordion'
// @ts-ignore
import WOW from 'wowjs';
import { useSelector } from 'react-redux';
import { IReduxState } from '../store';
import { SERVER_BASE_URL } from '../helpers/apiClient';
import { handleDownload } from '../helpers/functions';

interface IData {
    id: number;
    title: string;
    content: JSX.Element;
}

const Data = [
    {
        id: 1,
        title: "Module Pédagogique",
        content: <div >
            <p className="mb-2">
                Ce module permet de gérer les effectifs, les personnels,les résultats
                scolaires,
                les pièces périodiques etc…
            </p>
            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>
                    Gestion des effectifs
                </h6>
            </div>
            <p>
                L'inscription de l'élève se fait avec son matricule et son extrait de
                naissance.
                Cette étape anticipe sur certaines taches administratives:
                La production des liste de classNamees.; La production des différents bordereaux
                liés aux examens,etc...
            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>
                    Gestion du personnel
                </h6>
            </div>
            <p>
                L'enregistrement du personnel enseignant et administratif permet de produire
                les documents tels que l'attestation de présence, l'état nominatif des
                enseignants
                avec le volume horaire, l'état statistique du personnel enseignant et
                administratif,
                la liste et la répartition des Professeurs par classNamee,etc...
            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>
                    Gestion des emplois du temps
                </h6>
            </div>
            <p>
                SPIDER intègre un assistant pour la confession des emplois du temps.
                Il aide à concevoir l'emploi du temps des classNamees et des enseignants.
            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>
                    Gestion des notes
                </h6>
            </div>
            <p>
                La saisie des notes permet de générer les documents et statistiques
                suivants:Procès verbal du conseil de classNameeLes bulletins de notesListe
                par ordre de mériteListe des majors de classNamee, etc...

            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>
                    DSPS (Envoi des données en ligne)
                </h6>
            </div>
            <p>
                Ce sous-module traite les données suivantes:

                La liste des élève
                préinscrits en ligne;
                La liste des élève non préinscrits en ligne;
                La liste des élèves sans matriculeL'envoi des fichiers actu moyenneSPIDER
                permet d'extraire aussi les photos des retardataires au format DSPS pour les
                contentieux CIS.


            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>

                    Traitement des fichiers d'orientation
                </h6>
            </div>
            <p>
                Ce sous-module permet de produire les documents et fichiers
                sollicités par la DOB(recueil de moyennes des élèves de troisième,
                fichiers Excel pour le suivi du cursus scolaire...)

            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">

                    <i className="fa fa-check  me-2"></i>
                    Top Jury
                </h6>
            </div>
            <p>
                Top Jury vous permettra de gérer les examens blancs aussi bien qu’au
                sein de votre Etablissement qu’en région.
            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>
                    Edition des rapports périodiques
                </h6>
            </div>
            <p>
                En fin de trimestre et en fin d'année, le logiciel génère automatiquement
                tous les documents relatifs au rapport en format Word.Listes nominatives et
                résultats scolaires ; Statistiques des résultats ; Répartitions des élèves
                par
                année de naissance ; Etat du personnel, etc...

            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>
                    Edition des rapports périodiques
                </h6>
            </div>
            <p>
                En fin de trimestre et en fin d'année, le logiciel génère automatiquement
                tous les documents relatifs au rapport en format Word.Listes nominatives et
                résultats scolairesStatistiques des résultatsRépartitions des élèves par
                année de naissanceEtat du personnel, etc...

            </p>

            <div className=" mb-1 pb-2">
                <h6 className="text-green position-relative ps-4">
                    <i className="fa fa-check  me-2"></i>

                    Travaux de fin d'année(Décisions de fin d'année, liste provisoires année
                    n+1)
                </h6>
            </div>
            <p>
                Après les conseils de fin d'année, l'établissement peut générer à partir de
                SPIDER les listes provisoires de la prochaine année scolaire.

            </p>
        </div>
    },
    {
        id: 2,
        title: "Module Régistres Numériques",
        content: <div >
            <p>
                Pour un meilleur suivi de l’évaluation des élèves par l’administration, ce
                module dispose d'un
                <span className="text-green"> cahier de note</span> et d'un
                <span className="text-green"> cahier d'appel</span>.

            </p>
            <p>
                Nous avons aussi le logiciel <span className="text-green">PROF-EXPERT</span> applicatif pour les professeurs. Ce
                logiciel facilite la tâche aux professeurs pour l’édition de leur liste de
                classNamee et la saisie des notes après chaque évaluation.
            </p>
        </div>
    },
    {
        id: 3,
        title: "Module Messagerie",
        content: <div >
            <p>
                Ce module messagerie est un véritable outil de communication avec les parents sur la vie scolaire de leurs enfants.
            </p>

            <div >
                <p className=" position-relative ps-4">
                    <i className="fa fa-check  me-2 text-green"></i>
                    Résultats scolaires
                </p>
            </div>
            <div >
                <p className=" position-relative ps-4">
                    <i className="fa fa-check  me-2 text-green"></i>
                    Informations / Convocations
                </p>
            </div>
            <div >
                <p className=" position-relative ps-4">
                    <i className="fa fa-check  me-2 text-green"></i>
                    Absences et retards…
                </p>
            </div>
        </div>
    },
    {
        id: 4,
        title: "Module Finance (Privé)",
        content: <p>
            Dédié au privé, ce module permet d’enregistrer les entrées et
            les sorties de caisse, d’éditer les reçus, les liste de contrôle,
            les lettres de relances, les bulletins de paie du personnel ainsi
            que les documents relatifs à la CNPS et aux impôt
        </p>
    },
    {
        id: 5,
        title: "Module Boite à Suggestion",
        content: <p>
            Pour mieux vous servir, ce module vous donne la possibilité de
            faire des suggestions et de signaler des anomalies en vue de
            l’amélioration du logiciel. Vous avez la possibilité de
            sauvegarder votre base Spider-data sur le serveur de
            Spider Technologies.

        </p>
    },
]

function SpiderDetail() {

    const [active, setActive] = React.useState("")

    const { allSpiderVersions } = useSelector((state: IReduxState) => state.spiderVersion);


    React.useEffect(() => {
        const wow = new WOW.WOW({
            offset: 100,
            mobile: false,
            live: true,
        });
        wow.init();
    }, []);
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-8 wow fadeInUp order-last order-lg-first" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="text-green position-relative ps-4">Présentation Du Logiciel Spider</h6>
                            <h2 className="mt-2">Spider : Système de Collecte et d'Analyse</h2>
                        </div>
                        <p className="mb-4">Le logiciel SPIDER est un outil destiné à la gestion,
                            la collecte et la transmission de données numériques entre les
                            établissements scolaires (primaire, secondaire général, technique, professionnel et
                            supérieur)
                            et les Ministères en charge de l'Education
                            et de la Formation.
                        </p>
                        <p className="mb-4">
                            Il s'approprie les politiques centrales pour mieux
                            les répercuter aux établissements et permettre la remontée rapide
                            des données nécessaires à leur mise en œuvre. SPIDER vise à permettre
                            aux établissements scolaires de répondre avec efficacité aux demandes
                            des structures hiérarchiques du système éducatif en matière de remontée
                            de fichiers et de documents divers.
                        </p>

                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="text-green position-relative ps-4">Présentation Des Modules du logiciel</h6>
                        </div>
                        <div>
                            {
                                Data.map((item: IData, index: number) => (
                                    <Accordion key={index} title={item.title} content={item.content} active={active} setActive={setActive} />
                                ))
                            }
                        </div>

                    </div>
                    <div className="col-lg-4 wow fadeInUp order-first order-lg-last" data-wow-delay="0.1s" >
                        <div style={{ flexDirection: "column" }}
                            className="download-spider mb-4 d-flex align-items-center justify-content-center ">
                            <div className="mb-2">{`Spider : version ${allSpiderVersions[0]?.versionNumber} | Date ${allSpiderVersions[0]?.versionDate}`}</div>
                            <div
                                className="cont btn bt text-light rounded py-2 px-4 ms-3"
                                onClick={() => handleDownload(`${SERVER_BASE_URL}/downloadSpider/${allSpiderVersions[0]?.versionFileLocation}`, `${allSpiderVersions[0]?.versionFileLocation}`)}
                            >
                                Téléchargez <i className="fa fa-download px-2" ></i>
                            </div>
                        </div>
                        <div className="categorie-spider " >
                            <div className='d-flex justify-content-center py-3 ' style={{ color: 'black', fontSize: "1.2em" }}>
                                Nouvautés de la mise à jour
                            </div>
                            <div>
                                {
                                    allSpiderVersions.length &&
                                    JSON.parse(allSpiderVersions[0]?.VersionDescriptionArray).map((item: any, index: number) => (
                                        <p key={index} className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green" ></i>
                                            {item}
                                        </p>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SpiderDetail


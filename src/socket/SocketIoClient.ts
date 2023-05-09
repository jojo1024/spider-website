import io from "socket.io-client";
import { getServerUrl } from "../helpers/functions";
import store from "../store";
import { IActualite, IActualiteState, setAllActualite, updateAllActualite } from "../store/actualiteSlice";
import { IBanner, IBannerState, setAllBanner } from "../store/bannerSlice";
import { IAgent, IAgentState, setAllAgent, updateAllAgent } from "../store/agentSlice";
import { IFalshInfoState, IInfo, setAllFlashInfo } from "../store/flashInfoSlice";
import { ISpiderVersion, ISpiderVersionState, setAllSpiderVersions, updateAllSpiderVersions } from "../store/spiderVersionSlice";
import { updateAllDossier } from "../store/galerieSlice";
import { ISpiderApp, ISpiderAppState, setAllSpiderApp, updateAllApplication } from "../store/spiderAppSlice";
import { IEtablissement, IEtablissementState, setAllEtablissement } from "../store/etablissementSlice";
import { IContact, IContactState, setAllContact } from "../store/contactSlice";

export const svrUrl = getServerUrl();

const socketIO = {
    initialize: () => {
        const query = {
            type: "webClient",
        };

        // @ts-ignore
        const socket = io(svrUrl, { transports: ["websocket"], query: query });

        // à la connexion
        socket.on("connected", () => {
        });


        /**FLASH INFO */
        socket.on("ajouter_flash_info", async (res: any) => {
            const flashInfo = store?.getState()?.flashInfo as IFalshInfoState
            const { allFlashInfo } = flashInfo
            const newInfo = [res, ...allFlashInfo]
            store.dispatch(setAllFlashInfo(newInfo));
        });

        socket.on("modifier_flash_info", async (res: any) => {
            const flashInfo = store?.getState()?.flashInfo as IFalshInfoState
            const { allFlashInfo } = flashInfo
            const copyFlashInfo = [...allFlashInfo]
            const index: number = copyFlashInfo?.findIndex((item: IInfo) => item.idInfo === res?.idInfo)
            if (index > -1) {
                const newFlashInfo = [...allFlashInfo.slice(0, index), res, ...allFlashInfo.slice(index + 1),]
                store.dispatch(setAllFlashInfo(newFlashInfo));
            }
        });

        socket.on("changer_flash_info_status", async (res: any) => {
            const flashInfo = store?.getState()?.flashInfo as IFalshInfoState
            const { allFlashInfo } = flashInfo
            const copyFlashInfo = [...allFlashInfo]
            const index: number = copyFlashInfo?.findIndex((item: IInfo) => item.idInfo === res?.idInfo)
            if (index > -1) {
                const newPayload = {
                    ...res,
                    active: allFlashInfo[index].active === 0 ? 1 : 0
                }
                const newInfo = [...allFlashInfo.slice(0, index), newPayload, ...allFlashInfo.slice(index + 1)]
                store.dispatch(setAllFlashInfo(newInfo));
            }
        });

        socket.on("supprimer_flash_info", async (res: any) => {
            const flashInfo = store?.getState()?.flashInfo as IFalshInfoState
            const { allFlashInfo } = flashInfo
            const copyFlashInfo = [...allFlashInfo]
            const index: number = copyFlashInfo?.findIndex((item: IInfo) => item.idInfo === res?.idInfo)
            if (index > -1) {
                const newInfo = [...allFlashInfo.slice(0, index), ...allFlashInfo.slice(index + 1),]
                store.dispatch(setAllFlashInfo(newInfo));
            }
        });

        /**ETABLISSEMENT */
        socket.on("ajouter_etablissement", async (res: any) => {
            const etablissement = store?.getState()?.etablissement as IEtablissementState
            const { allEtablissement } = etablissement
            const newAllEtab = [res, ...allEtablissement]
            store.dispatch(setAllEtablissement(newAllEtab));
        });

        socket.on("modifier_etablissement", async (res: any) => {
            const etablissement = store?.getState()?.etablissement as IEtablissementState
            const { allEtablissement } = etablissement
            const copyEtab = [...allEtablissement]
            const index: number = copyEtab?.findIndex((item: IEtablissement) => item.idEtab === res?.idEtab)
            if (index > -1) {
                const newEtab = [...allEtablissement.slice(0, index), res, ...allEtablissement.slice(index + 1),]
                store.dispatch(setAllEtablissement(newEtab));
            }
        });

        socket.on("supprimer_etablissement", async (res: any) => {
            const etablissement = store?.getState()?.etablissement as IEtablissementState
            const { allEtablissement } = etablissement
            const copyEtab = [...allEtablissement]
            const index: number = copyEtab?.findIndex((item: IEtablissement) => item.idEtab === res?.idEtab)
            if (index > -1) {
                const newEtab = [...allEtablissement.slice(0, index), ...allEtablissement.slice(index + 1),]
                store.dispatch(setAllEtablissement(newEtab));
            }

        });

        /**CONTACT */
        socket.on("ajouter_contact", async (res: any) => {
            const contact = store?.getState()?.contact as IContactState
            const { allContact } = contact
            const newAllContact = [res, ...allContact]
            console.log("🚀 ~ file: SocketIoClient.ts:111 ~ socket.on ~ newAllContact:", newAllContact)
            store.dispatch(setAllContact(newAllContact));
        });

        socket.on("modifier_contact", async (res: any) => {
            const contact = store?.getState()?.contact as IContactState
            const { allContact } = contact
            const copyContact = [...allContact]
            const index: number = copyContact?.findIndex((item: IContact) => item?.idContact === res?.idContact)
            if (index > -1) {
                const newContact = [...allContact.slice(0, index), res, ...allContact.slice(index + 1),]
                store.dispatch(setAllContact(newContact));
            }
        });

        socket.on("supprimer_contact", async (res: any) => {
            const contact = store?.getState()?.contact as IContactState
            const { allContact } = contact
            const copyContact = [...allContact]
            const index: number = copyContact?.findIndex((item: IContact) => item?.idContact === res?.idContact)
            if (index > -1) {
                const newContact = [...allContact.slice(0, index), ...allContact.slice(index + 1),]
                store.dispatch(setAllContact(newContact));
            }
        });

        /**ACTUALITE */

        socket.on("mettre_actualite_a_la_une", async (res: any) => {
            const actualite = store?.getState()?.actualite as IActualiteState
            const { allActualite } = actualite
            const copyActualite = [...allActualite]
            const index: number = copyActualite?.findIndex((item: IActualite) => item.idActualite === res?.idActualite)
            if (index > -1) {
                const newAllActualite = [res, ...allActualite.slice(0, index), ...allActualite.slice(index + 1)]
                store.dispatch(setAllActualite(newAllActualite));
            }
        });

        socket.on("changer_actualite_status", async (res: any) => {
            console.log("🚀 ~ file: SocketIoClient.ts:151 ~ socket.on ~ res:", res)
            const actualite = store?.getState()?.actualite as IActualiteState
            const { allActualite } = actualite
            const copyActualite = [...allActualite]
            const index: number = copyActualite?.findIndex((item: IActualite) => item.idActualite === res?.idActualite)

            if (index > -1) {
                const newPayload = {
                    ...res,
                    active: allActualite[index].active === 0 ? 1 : 0
                }
                const newAllActualite = [...allActualite.slice(0, index), newPayload, ...allActualite.slice(index + 1)]
                store.dispatch(setAllActualite(newAllActualite));
            }
        });

        socket.on("modifier_actualite", async (res: any) => {
            const actualite = store?.getState()?.actualite as IActualiteState
            const { allActualite } = actualite
            const copyActualite = [...allActualite]
            const index: number = copyActualite?.findIndex((item: IActualite) => item.idActualite === res?.idActualite)
            if (index > -1) {
                const newAllActualite = [...allActualite.slice(0, index), res, ...allActualite.slice(index + 1),]
                store.dispatch(setAllActualite(newAllActualite));
            }
        });

        socket.on("ajouter_actualite", async (res: any) => {
            store.dispatch(updateAllActualite(res?.actualite));

            res?.imagesDuDossierAjoute?.map((item: any) => {
                store.dispatch(updateAllDossier(item))
            })
        });

        socket.on("supprimer_actualite", async (res: any) => {
            const actualite = store?.getState()?.actualite as IActualiteState
            const { allActualite } = actualite
            const copyActualite = [...allActualite]
            const index: number = copyActualite?.findIndex((item: IActualite) => item.idActualite === res?.idActualite)
            if (index > -1) {
                const newAllActualite = [...allActualite.slice(0, index), ...allActualite.slice(index + 1),]
                store.dispatch(setAllActualite(newAllActualite));
            }
        });

        /**BANNIERE */
        socket.on("ajouter_banniere", async (res: any) => {
            const banner = store?.getState()?.banner as IBannerState
            console.log("🚀 ~ file: SocketIoClient.ts:134 ~ socket.on ~ banner:", banner)
            const { allBanner } = banner
            const newBanner = [...res, ...allBanner]
            store.dispatch(setAllBanner(newBanner));
        });

        socket.on("supprimer_banniere", async (res: any) => {
            const banner = store?.getState()?.banner as IBannerState
            const { allBanner } = banner
            const copyBanner = [...allBanner]
            const index: number = copyBanner?.findIndex((item: IBanner) => item.idBanniere === res?.idBanniere)
            if (index > -1) {
                const newAllBanner = [...allBanner.slice(0, index), ...allBanner.slice(index + 1)]
                store.dispatch(setAllBanner(newAllBanner));
            }
        });

        socket.on("change_banniere_status", async (res: any) => {
            const banner = store?.getState()?.banner as IBannerState
            const { allBanner } = banner
            const copyBanner = [...allBanner]
            const index: number = copyBanner?.findIndex((item: IBanner) => item.idBanniere === res?.idBanniere)
            if (index > -1) {
                const newPayload = {
                    ...res,
                    active: allBanner[index].active === 0 ? 1 : 0
                }
                const newAllBanner = [...allBanner.slice(0, index), newPayload, ...allBanner.slice(index + 1)]
                store.dispatch(setAllBanner(newAllBanner));
            }
        });

        /**AGENT */

        socket.on("ajouter_agent", async (res: any) => {
            store.dispatch(updateAllAgent(res));
        });

        socket.on("supprimer_agent", async (res: any) => {
            const agent = store?.getState()?.agent as IAgentState
            const { allAgent } = agent
            const copyAgent = [...allAgent]
            const index: number = copyAgent?.findIndex((item: IAgent) => item.idAgent === res?.idAgent)
            if (index > -1) {
                const newAllAgent = [...allAgent.slice(0, index), ...allAgent.slice(index + 1),]
                store.dispatch(setAllAgent(newAllAgent));
            }
        });

        socket.on("modifier_agent", async (res: any) => {
            const agent = store?.getState()?.agent as IAgentState
            const { allAgent } = agent
            const copyAgent = [...allAgent]
            const index: number = copyAgent?.findIndex((item: IAgent) => item.idAgent === res?.idAgent)
            if (index > -1) {
                const newAllAgent = [...allAgent.slice(0, index), res, ...allAgent.slice(index + 1)]
                store.dispatch(setAllAgent(newAllAgent));
            }
        });

        /**APPLICATION */
        socket.on("ajouter_application", async (res: any) => {
            res.map((item: any) => {
                store.dispatch(updateAllApplication(item))
            })

        });

        socket.on("supprimer_application", async (res: any) => {
            const app = store?.getState()?.spiderApp as ISpiderAppState
            const { allSpiderApp } = app
            const copyApp = [...allSpiderApp]
            const index: number = copyApp?.findIndex((item: ISpiderApp) => item?.idApp === res?.idApp)
            if (index > -1) {
                const newAllApp = [...allSpiderApp.slice(0, index), ...allSpiderApp.slice(index + 1)]
                store.dispatch(setAllSpiderApp(newAllApp));
            }

        });

        socket.on("modifier_application", async (res: any) => {
            const app = store?.getState()?.spiderApp as ISpiderAppState
            const { allSpiderApp } = app
            const copyApp = [...allSpiderApp]
            const index: number = copyApp?.findIndex((item: ISpiderApp) => item?.idApp === res?.idApp)
            if (index > -1) {
                const newAllApp = [...allSpiderApp.slice(0, index), res, ...allSpiderApp.slice(index + 1)]
                store.dispatch(setAllSpiderApp(newAllApp));
            }
        });

        /**SPIDER MISE A JOUR */

        socket.on("modifier_spider_version", async (res: any) => {
            const spiderVersion = store?.getState()?.spiderVersion as ISpiderVersionState
            const { allSpiderVersions } = spiderVersion
            const copyspiderVersion = [...allSpiderVersions]
            const index: number = copyspiderVersion?.findIndex((item: ISpiderVersion) => item?.idSpiderVersion === res?.idSpiderVersion)
            if (index > -1) {
                const newData = {
                    ...res,
                    versionDate: new Date(res?.versionDate).toLocaleDateString()
                }
                const newAllSpiderVersion = [...allSpiderVersions.slice(0, index), newData, ...allSpiderVersions.slice(index + 1)]
                store.dispatch(setAllSpiderVersions(newAllSpiderVersion));
            }
        });

        socket.on("ajouter_spider_new_version", async (res: any) => {
            const newData = {
                ...res,
                versionDate: new Date(res?.versionDate).toLocaleDateString()
            }
            store.dispatch(updateAllSpiderVersions(newData));
        });

        socket.on("supprimer_spider_version", async (res: any) => {
            const spiderVersion = store?.getState()?.spiderVersion as ISpiderVersionState
            const { allSpiderVersions } = spiderVersion
            const copyspiderVersion = [...allSpiderVersions]
            const index: number = copyspiderVersion?.findIndex((item: ISpiderVersion) => item?.idSpiderVersion === res?.idSpiderVersion)
            if (index > -1) {
                const newAllSpiderVersion = [...allSpiderVersions.slice(0, index), ...allSpiderVersions.slice(index + 1)]
                store.dispatch(setAllSpiderVersions(newAllSpiderVersion));
            }
        });
    }
}

export default socketIO;

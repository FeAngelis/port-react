import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpeg";import Curriculo from "../pdf/Fernanda.pdf";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return (<aside id='sidebar'>
        <img src={Avatar} alt="Fernanda de Angelis" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
            Download currículo
        </a>

    </aside>
    )
}

export default Sidebar
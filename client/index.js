
// VIEWS
import "./views/intranet/intranet.js"
import "./views/news/news.js"
import "./views/contact/contact.js"
import "./views/remoteDesktop/remoteDesktop.js"
import "./views/staffIntranet/staff-intranet.js"
import "./views/qr/qr.js"

// COMPONENTS 
import "./components/header-elem/header-elem.js";
import "./components/main-navigation/main-navigation.js";
import "./components/sub-navigation/sub-navigation.js";

// COMPONENTS VIEW SPECIFIC (move later?)
import "./components/staff-card-container-elem/staff-card-container-elem.js"
import "./views/about/about.js"



/*
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('myNav').buttons = [
        { title: 'Start', href: '/' },
        { title: 'Våra tjänster' }
    ]});

*/

import { ClientRouter } from "./router.js";
window.addEventListener("load", () =>   ClientRouter.handleRoute());
window.addEventListener("popstate", () => ClientRouter.handleRoute());
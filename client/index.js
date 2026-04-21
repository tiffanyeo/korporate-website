
// COMPONENTS 
import "./components/header-elem/header-elem.js";
import "./components/main-navigation/main-navigation.js";
import "./components/sub-navigation/sub-navigation.js";


window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('myNav').buttons = [
        { title: 'Start', href: '/' },
        { title: 'Våra tjänster' }
    ]});
require('../css/style.css')

import Home from "./pages/home.js";
import Posts from "./pages/posts.js";
import Header from "./pages/header.js";
import makeMoveButton from "./pages/btn.js";
import Chatting from "./pages/chat.js";
import Login from "./pages/login.js";

const state={
    state:'main',
};
const root=document.querySelector('#root');

Header(header);
makeMoveButton(root, state, 'login');

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/home", view: Chatting },
        { path:"/자유", view:Posts},
        { path: "/비밀", view: Posts },
        { path: "/정보", view: Posts },
        { path: "/홍보", view: Posts },
        { path: "/SW", view: Posts },
        { path: "/Chat", view: Chatting },
        { path: "/login", view: Login },
    ];

    const pageMatches = routes.map((route) => {
        return {
            route, // route: route
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#root").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector("#root").innerHTML = await page.getHtml();
    }
};

window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });

    router();
});
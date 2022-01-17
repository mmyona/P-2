import Home from "./pages/home.js";
import Posts from "./pages/posts.js";
import Header from "./pages/header.js";
import Header from "./pages/nav.js";
import makeMoveButton from "./pages/btn.js";

const state={
    state:'main',
};
const root=document.querySelector('#root');

Header(header);
makeMoveButton(root, state, 'login');
makeMoveButton(root, state, 'menu');

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path:"/menu", view:Nav},
        { path: "/board1", view: Posts },
        { path: "/board2", view: Posts },
        { path: "/board3", view: Posts },
        { path: "/board4", view: Posts },
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
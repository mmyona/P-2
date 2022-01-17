export default function Header(root) {
    root.innerHTML=`
        <div class="burger" onclick="openNav()">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul id="main-menu">
            <li><span class="history" route="/home">AJOU Memo</span></li>
            <li><span class="history" route="/login">Log in</span></li>
        </ul>
    `
}

export function openNav() {
    document.getElementById("nav").style.width = "178px";
}

export function closeNav() {
    document.getElementById("nav").style.width = "0";
}
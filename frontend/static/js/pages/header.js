export default function Header(root) {
    root.innerHTML=`
    <nav id="menu">
    <ul id="main-menu">
        <li><p>menu</p>
            <ul id="sub-menu">
                <li><a href="/자유" class="history" data-link>자유 게시판</span></li>
                <li><a href="/비밀" class="history"  data-link>비밀 게시판</span></li>
                <li><a href="/정보" class="history"  data-link>정보 게시판</span></li>
                <li><a href="/홍보" class="history"  data-link>홍보 게시판</span></li>
                <li><a href="/SW" class="history"  data-link>SW 게시판</span></li>
            </ul>
        </li>
        <li><a href="/home"  class="history"  data-link>AJOU Memo</span></li>
        <li><a href="/login"  class="history"  data-link>Log in</span></li>
     </ul>
    </nav>
    `
}

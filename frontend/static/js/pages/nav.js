export default function Nav(root) {
    root.innerHTML=`
    <li><p>menu</p>
    <ul id="sub-menu">
        <li><span class="history" a href="/" data-link>자유 게시판</span></li>
        <li><span class="history" a href="/board1" data-link>비밀 게시판</span></li>
        <li><span class="history" a href="/board2" data-link>정보 게시판</span></li>
        <li><span class="history" a href="/board3" data-link>홍보 게시판</span></li>
        <li><span class="history" a href="/board4" data-link>SW 게시판</span></li>
    </ul>
    </li> 
    `
 }
 export function movePage(root, title){
     const button=document.createElement('div')
     button.innerHTML=title;
     button.addEventListener('click',()=>moveTitle(title))
     root.innerHTML=button
 }
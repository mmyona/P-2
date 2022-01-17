export default function makeMoveButton(root, state, title){
    const button=document.createElement('div')
    button.innerHTML=title;
    button.addEventListener('click',()=>moveToTitle(title, state))
    //console.log("makemovebutton")
    root.appendChild(button)
}

function moveToTitle(title, state){
    console.log("movetotitle")
    state.state = title;
    history.pushState(null,null,`/${title}`)
}
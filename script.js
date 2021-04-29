const text=document.getElementById('text')
const textarr=text.innerText.split('')

const newEl=document.createElement('h1')
newEl.innerHTML=`${textarr.map(letter=>`<span style="${randomVisibility()}">${letter}</span>`
      ).join('')}`;

newEl.classList.add('overlay')

    document.body.appendChild(newEl);

function randomVisibility(){
    return Math.random() < 0.5 ? `visiblity:hidden`
    :`visiblity:visible`;
}
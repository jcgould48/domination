function idAndUrl(id, url){
const findImage= document.querySelector(id);
      findImage.src=url
}

idAndUrl('#image-1', 'https://media.giphy.com/media/W80Y9y1XwiL84/giphy.gif')
idAndUrl('#image-2', 'https://media.giphy.com/media/W80Y9y1XwiL84/giphy.gif')
idAndUrl('#image-3', 'https://media.giphy.com/media/W80Y9y1XwiL84/giphy.gif')

function strikeThroughLi (){
const findUl = document.querySelector('#arguments > li')
findUl.style.textDecoration  = "line-through"
}

strikeThroughLi();


function liRemover () {
const findUl2 = document.querySelector('#arguments')
findUl2.removeChild(findUl2.lastElementChild)
}

liRemover()
liRemover()

function ulAppender (element){
const findUl = document.querySelector('#arguments')
findUl.appendChild(element)   
}
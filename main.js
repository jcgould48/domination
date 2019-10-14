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
const findUl2 = document.querySelector('#arguments');
findUl2.appendChild(element); 
}
const img = document.createElement('img');
ulAppender(img);

function imageSize(element){
const findImg = document.querySelector(element); 
    findImg.style.height = '30px'
}

imageSize('#image-1');

function elementClasser(element){
    const findElement = document.querySelector(element); 
        findElement.className = 'invisible';
    }
    
    elementClasser('#heading')

    function idFonter (fontSize1, id){
        const findId = document.querySelector(id);
        findId.style.fontSize = fontSize1;
        return findId;
     }
     
        idFonter('100px' ,'#thing-1'); 
     

    function liTexter (text){
        const li = document.createElement('li');
        li.innerText = text

       return li; 
    }

    ulAppender(liTexter('hello'));

    
    function headerTexter(headerSize, someText){
    const newHeader = document.createElement('h' + headerSize);
    newHeader.innerText = someText;
    return newHeader;
    }

ulAppender(headerTexter('3', 'herros'));
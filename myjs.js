var myTop = 200,
    myLeft = 150,
    myHeight = 40,
    myWidth = 30,
    controlStatus = 'unseen',
    myDisplay = document.getElementById('display'),
    myControls = document.getElementById('controls'),
    myImage = document.getElementById('image'),
    myUrl = document.getElementById('url');

document.getElementById('left').addEventListener('click', function(){
    myLeft = myLeft - 5;
    myDisplay.style.left = myLeft+'px';
});

document.getElementById('right').addEventListener('click', function(){
    myLeft = myLeft + 5;
    myDisplay.style.left = myLeft+'px';
});

document.getElementById('up').addEventListener('click', function(){
    myTop = myTop - 5;
    myDisplay.style.top = myTop+'px';
});

document.getElementById('down').addEventListener('click', function(){
    myTop = myTop + 5;
    myDisplay.style.top = myTop+'px';
});

document.getElementById('plus').addEventListener('click', function(){
    myHeight = myHeight + 1;
    myDisplay.style.height = myHeight+'%';
    
    myWidth = myWidth + 1;
    myDisplay.style.width = myWidth+'%';
});

document.getElementById('minus').addEventListener('click', function(){
    myHeight = myHeight - 1;
    myDisplay.style.height = myHeight+'%';
    
    myWidth = myWidth - 1;
    myDisplay.style.width = myWidth+'%';
});


document.addEventListener('keydown', function(ev){
    console.log(ev.keyCode);
    if (ev.keyCode == 37) {
        myLeft = myLeft - 5;
        myDisplay.style.left = myLeft+'px';
    }
    else if (ev.keyCode == 39) {
        myLeft = myLeft + 5;
        myDisplay.style.left = myLeft+'px';
    }
    else if (ev.keyCode == 38) {
        myTop = myTop - 5;
        myDisplay.style.top = myTop+'px';
    }
    else if (ev.keyCode == 40) {
        myTop = myTop + 5;
        myDisplay.style.top = myTop+'px';
    }
    else if (ev.keyCode == 187) {
        myHeight = myHeight + 1;
        myDisplay.style.height = myHeight+'%';
    
        myWidth = myWidth + 1;
        myDisplay.style.width = myWidth+'%';
    }
    else if (ev.keyCode == 189) {
        myHeight = myHeight - 1;
        myDisplay.style.height = myHeight+'%';
    
        myWidth = myWidth - 1;
        myDisplay.style.width = myWidth+'%';
    }
});

document.addEventListener('keyup', function(ev){
    
    if(ev.keyCode == 13){
        if (myUrl.value.endsWith('jpg') || myUrl.value.endsWith('gif') || myUrl.value.endsWith('png')){
            myImage.src = myUrl.value;
        }
        else {
            alert('Not a valid image')
        }
    }
})

document.getElementById('dropdown').addEventListener('click', function(){
    
    if (controlStatus == 'seen'){
        myControls.style.top = '-63px';
        controlStatus = 'unseen';
    }
    else if (controlStatus == 'unseen'){
        myControls.style.top = '0px';
        controlStatus = 'seen';
    }
})

document.getElementById('title').addEventListener('input',function(){
    
    document.getElementById('displayTitle').innerHTML = document.getElementById('title').value;
})

document.getElementById('newimage').addEventListener('click', function(){
    
    var ndiv = document.createElement('div');
    ndiv.innerHTML = 
    document.getElementById('display').appendChild(ndiv);
})
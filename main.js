var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
blockimg = "";

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', function(img){
blockimg = img;
blockimg.scaleToWidth(700);
blockimg.scaleToHeight(510);
blockimg.set({
    top:0, left:0
});
canvas.add(blockimg);
});




	


}

function playSound(){
x.play();
}

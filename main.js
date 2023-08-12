Webcam.set({
    width:300,height:230,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_photo(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="cool_pic"   src="'+data_uri+'"/>';
})
};
console.log('ml5 version',ml5.version); 
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vnPwTyIyR/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

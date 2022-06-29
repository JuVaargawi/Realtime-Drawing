nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(400,400);

    canvas=createCanvas(400,400);
    canvas.position(500,200);
     
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;

    console.log("nosex="+nosex,"nosey="+nosey);

    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);

    console.log("leftwristx="+leftwristx,"rightwristx="+rightwristx,"difference="+difference);
    
}
}

function draw(){
    background("lightcoral");
    document.getElementById("square").innerHTML="length of the square is "+difference+ " px ";
    fill("cornsilk");
    stroke("lightpink");
    square(nosex,nosey,difference);
}
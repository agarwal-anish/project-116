mustacheX = 0;
mustacheY = 0;

function preload() {
    mustache = loadimage("m.png")
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    
}

function modelLoaded() { 
    console.log('PoseNet Is Inistialized');
}

function gotPoses(results){
if( results.length > 0){
    console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
 console.log("nose y = " + results[0].pose.nose.y);
}
}

function take_snapshot(){
    save('myFilterImage.png');
}
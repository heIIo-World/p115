function preload() {

}
function setup() {
    canvas = createCanvas(960, 720);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(960, 720);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
     image(video, 0, 100, 960, 720);
}

function take_snapshot() {
    save('student_name.png');
}

function modelLoaded() {
    console.log("posenet initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}

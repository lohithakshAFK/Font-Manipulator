right_wristX = 0;
left_wristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses)
}

function gotPoses(results){
    right_wristX = results[0].pose.rightWrist.x;    
    left_wristX = results[0].pose.leftWrist.x;
    difference = floor(left_wristX - right_wristX);
    console.log("Right Wrist X = " + right_wristX + " Left Wrist X = " + left_wristX + " Difference is " + difference);
}

function draw(){
}

function modelLoaded(){
    console.log("PoseNet is loaded")
}


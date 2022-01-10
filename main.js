function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    var classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YvkvmSJvL/', modelReady());
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
}
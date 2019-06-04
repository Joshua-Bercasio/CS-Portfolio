var gnome = document.getElementById("gnome");
var fnal = document.getElementById("fnal");
var music = document.getElementById("music");
var pews = document.getElementById("pews");
var kill = false
gnome.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/EaqJgQOVZ9k/hqdefault.jpg')";
    document.body.style.backgroundSize = "1366px 625px";
    document.getElementById("display").style.color = "black";
    }
    
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.kym-cdn.com/photos/images/newsfeed/001/023/007/f29.png')";
    document.getElementById("display").style.color = "white";
    }
});

music.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://support.apple.com/content/dam/edam/applecare/images/en_US/music/featured-section-support-for-itunes_2x.png')";
    document.body.style.backgroundSize = "1366px 625px";
    document.getElementById("display").style.color = "black";
    }
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://tshop.r10s.com/0a7/df4/b238/d1a2/5078/90ba/2992/11c7e8b15854ab3a294904.jpg')";
    document.getElementById("display").style.color = "black";
    }

});

pews.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/Screen_Shot_2018_11_30_at_9.47.55_AM.0_0.png?ewaB3olMB0gigscq5IEH3PX51GstcRAf')";
    document.body.style.backgroundSize = "1366px 625px";
    document.getElementById("display").style.color = "white";
    }
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2018/09/12/t-series.jpg')";
    document.getElementById("display").style.color = "white";
    }
    });

    
    fnal.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://cdn2.unrealengine.com/Fortnite%2Fbattle-royale%2FBR08_Web_BPLanding_Hero-3840x2160-654d400e12d58c3a97d6e75dc560df6ac46d3ea3.jpg')";
    document.body.style.backgroundSize = "1366px 625px";
    document.getElementById("display").style.color = "white";
    }
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://s3.dexerto.com/thumbnails/_thumbnailLarge/Dlive-Apex-Thumb-Generic.jpg')";
    document.getElementById("display").style.color = "black";
    }
    });

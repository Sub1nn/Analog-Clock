setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + (mtime/2);
    mrotation =6*mtime;
    srotation =6*stime;

    //look for transform origin property and include it in CSS to rotate the hands from bottom other wise it rotates from its center.

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
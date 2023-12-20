document.addEventListener("DOMContentLoaded", function ()
{
    const trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);

    document.addEventListener("mousemove", function (e)
    {
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
    });
});

// This took me ages to get right. Lots of issues with index overlays, animations, trailing, colors, etc etc etc. 

# Simple script to get transcript of any video

While you could use playwright/selenium to do this, I thought it would just be easier to paste into the developer console. 

1. Navigate to any video on YouTube (make sure you are signed in)
2. Open developer console, and copy the following into your console.
3. Wait a few seconds for the transcript window to load/ope.
4. The transcript is copied onto your keyboard automatically. It is also outputted onto the developer console as text.

```javascript
document.getElementById("expand").click();const intervalId=setInterval(()=>{let e=document.querySelector('button[aria-label="Show transcript"]');if(e){e.click(),clearInterval(intervalId);let t=setInterval(()=>{let e=document.querySelectorAll(".segment-text");if(e.length>0){clearInterval(t);let l=Array.from(e).map(e=>e.innerText).join(" ");console.log(l);let o=document.createElement("textarea");o.value=l,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),alert("Text copied to clipboard!")}},500)}},500);
```
# Simple script to get transcript of any video

While you could use playwright/selenium to do this, I thought it would just be easier to paste into the developer console. 

Just copy this script into your console and you will have your transcript. 

```javascript
document.getElementById("expand").click();const intervalId=setInterval(()=>{let e=document.querySelector('button[aria-label="Show transcript"]');if(e){e.click(),clearInterval(intervalId);let t=setInterval(()=>{let e=document.querySelectorAll(".segment-text");if(e.length>0){clearInterval(t);let l=Array.from(e).map(e=>e.innerText).join(" "),a=document.createElement("textarea");a.value=l,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),alert("Text copied to clipboard!")}},500)}},500);
```
function myFunction() {
   let output = document.getElementById("output");
   let links = document.querySelector("#inputlinks").value;
   output.innerHTML = "";
   const regextwitter = /\bhttps?:\/\/twitter\.com\/\w+\/status\/\d+\b/g;
   const regexinstagram =
      /\bhttps?:\/\/(?:www\.)?instagram\.com\/(?:p|reel)\/([\w-]+)\/?\b/g;
   let matchtwitter = links.match(regextwitter);
   let matchinstagram = links.match(regexinstagram);
   if (matchtwitter) {
      for (let i = 0; i < matchtwitter.length; i++) {
         output.innerHTML += `<div class="outbox box${i}">
      <p>${matchtwitter[i]}</p> 
      <button onclick="letscopy('${matchtwitter[i]}','${i}')">کپی کردن</button> </div>`;
      }
   }
   if (matchinstagram) {
      for (let i = 0; i < matchinstagram.length; i++) {
         output.innerHTML += `<div class="outbox ins box${i}">
    <p>${matchinstagram[i]}</p> 
    <button onclick="letscopy('${matchinstagram[i]}','${i}')">کپی کردن</button> </div>`;
      }
   }
}
function letscopy(text, number) {
   var copyText = text;
   navigator.clipboard.writeText(copyText);
   var target = document.getElementsByClassName(`box${number}`);
   target[0].remove();
}

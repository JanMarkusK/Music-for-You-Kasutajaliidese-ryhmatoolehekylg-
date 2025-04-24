//Siis kui leht on laetud laseb teha seda "kasti avamise" animatsiooni
document.addEventListener('DOMContentLoaded', () => {
const box = document.getElementById('box');
   if (box) {
      box.addEventListener('click', () => {
         box.classList.toggle('open');
      });
   }
});
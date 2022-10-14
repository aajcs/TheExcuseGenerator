/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien = ["el perro", "mi abuela", "su tortuga", "mi pájaro"];
let que = ["comer", "enojado", "aplastado", "roto"];
let cuando = [
  "antes de la clase",
  "justo a tiempo",
  "cuando terminé",
  "durante mi almuerzo",
  "mientras estaba orando"
];
function excuseFunction(quien, que, cuando) {
  var lengthQuien = Math.floor(Math.random() * quien.length);
  var lengthQue = Math.floor(Math.random() * que.length);
  var lengthCuando = Math.floor(Math.random() * cuando.length);
  return `${quien[lengthQuien]} ${que[lengthQue]} ${cuando[lengthCuando]}`;
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseFunction(quien, que, cuando);
};

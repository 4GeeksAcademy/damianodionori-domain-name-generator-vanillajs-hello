/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["our", "my", "your"];
let adjective = ["black", "brown", "yellow", "red"];
let noun = ["cat", "kangaroo", "cow", "turtle"];
let extension = [".it", ".com", ".eu", ".fr", ".de", ".es"];
let domainNamesArray = [];
let checker, extLen;

for (let i = 0; i < pronoun.length; i++) {
  // Creating nested arrays
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        domainNamesArray.push(
          pronoun[i] + adjective[j] + noun[k] + extension[l]
        ); // If they are not the same, we create a regular domain only
      }
    }
  }
}
document.getElementById("list-of-domains").innerHTML = domainNamesArray.join(
  "<br>"
); // Sending data to index.html and printing an array line-by-line

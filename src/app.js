/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = domainName();
  });
};

let domainName = () => {
  let pronoun = ["our", "my", "your"];
  let adj = ["black", "brown", "yellow", "red"];
  let noun = ["funny", "shy", "happy", "moody", "kind"];

  let names = [
    "cat",
    "kangaroo",
    "cow",
    "turtle",
    "alligator",
    "dog",
    "hamster",
    "wildboar"
  ];
  let domains = [".it", ".com", ".eu", ".fr", ".de", ".es"];

  function domainNameGenerator(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  let pronounIndex = domainNameGenerator(pronoun);
  let adjIndex = domainNameGenerator(adj);
  let nounIndex = domainNameGenerator(noun);
  let namesIndex = domainNameGenerator(names);
  let domainsIndex = domainNameGenerator(domains);

  return (
    pronoun[pronounIndex] +
    adj[adjIndex] +
    noun[nounIndex] +
    names[namesIndex] +
    domains[domainsIndex]
  );
};

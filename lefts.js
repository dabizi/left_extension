                /* Made by Janin Grandne */
         /* Inspired by jshint version for Brexit */
/* I find this version better than the one of 9to5google */

var elements = [...document.body.getElementsByTagName('*')];


function find(){
  elements.forEach(element =>{
    element.childNodes.forEach( child =>{
      if (child.nodeType === 3){
        replace(child);
      }
    });

  ]);
}

function replace (node) {
  let value = node.nodeValue;
  value = value.replace(/droits/gi, 'gauches');
  value = value.replace(/Droits/gi, 'Gauches');
  value = value.replace(/rights/gi, 'lefts');
  value = value.replace(/Rights/gi, 'Lefts');
  node.nodeValue = value;
}

window.onload = find();

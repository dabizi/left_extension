             /* Made by Janin Grandne */
        /* Inspired by jshint version for Brexit */
    /* Updated with panicsteve's cloud-to-butt      */
/* I find this version better than the one of 9to5google */

var elements = [...document.body.getElementsByTagName('*')];


function find(){
  elements.forEach(element =>{
    element.childNodes.forEach(child =>{
      if (child.nodeType === 3){
        replace(child);
      }
    });

  });
}

function replace(node) {
  let value = node.nodeValue;
  value = value.replace(/\bDroits\b/g, 'Gauches');
  value = value.replace(/\bdroits\b/g, 'gauches');
  value = value.replace(/\bDroit\b/g, 'Gauche');
  value = value.replace(/\bdroit\b/g, 'gauche');
  value = value.replace(/\bCopyrights\b/g, 'Copylefts');
  value = value.replace(/\bCopyright\b/g, 'Copyleft');
  value = value.replace(/\bcopyrights\b/g, 'copylefts');
  value = value.replace(/\bcopyright\b/g, 'copyleft');
  value = value.replace(/\bRights\b/g, 'Lefts');
  value = value.replace(/\brights\b/g, 'lefts');
  node.nodeValue = value;
}

window.onload = find();

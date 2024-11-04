const getChildren = (el, includeTextNodes = false) =>
  includeTextNodes ? [...el.childNodes] : [...el.children];

getChildren(document.querySelector('ul'));
// [li, li, li]

getChildren(document.querySelector('ul'), true);
// [li, #text, li, #text, li, #text]


const getSiblings = el =>
  [...el.parentNode.childNodes].filter(node => node !== el);

getSiblings(document.querySelector('head'));
// ['body']


const getAncestors = el => {
    let ancestors = [];
  
    while (el) {
      ancestors.unshift(el);
      el = el.parentNode;
    }
  
    return ancestors;
  };
  
  getAncestors(document.querySelector('nav'));
  // [document, html, body, header, nav]



  const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

elementContains(
  document.querySelector('head'),
  document.querySelector('title')
);
// true

elementContains(
  document.querySelector('body'),
  document.querySelector('body')
);
// false



const findClosestMatchingNode = (node, selector) => {
    for (let n = node; n.parentNode; n = n.parentNode)
      if (n.matches && n.matches(selector)) return n;
  
    return null;
  };
  
  findClosestMatchingNode(
    document.querySelector('a'), 'body'
  );
  // body



  const getParentsUntil = (el, selector) => {
    let parents = [], _el = el.parentNode;
  
    while (_el && typeof _el.matches === 'function') {
      parents.unshift(_el);
  
      if (_el.matches(selector)) return parents;
      else _el = _el.parentNode;
    }
  
    return [];
  };
  
  getParentsUntil(document.querySelector('#home-link'), 'header');
  // [header, nav, ul, li]
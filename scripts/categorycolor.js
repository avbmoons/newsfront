let newsCategories = document.getElementsByClassName('news-category');
let newsCategoriesStyles = [];
let arrLenght = newsCategories.length;
let newsCategoriesColors = [];
let arrCategories = [
  'sport',
  'politics',
  'ecology',
  'economy',
  'culture',
  'technology',
  'auto',
  'world',
  'science',
  'nature',
];
let arrColors = [
  '#C340A1',
  '#92918d',
  '#34B639',
  '#EB9041',
  '#2641AF',
  '#35BFDE',
  '#DAC946',
  '#92918D',
  '#804C19',
  '#26B56D',
];
let arrCategoriesLenght = arrCategories.length;

for (i = 0; i < arrLenght; i++) {
  let elem = newsCategories[i];
  //console.log(elem);
  newsCategoriesStyles[i] = window.getComputedStyle(elem);
  let categoryColor = newsCategoriesStyles[i].color;
  newsCategoriesColors.push(categoryColor);
  //console.log(categoryColor);
}

// //console.log(newsCategories);
// //console.log(arrLenght);
// console.log(newsCategories);
// //console.log(newsCategoriesStyles);
// //console.log(newsCategoriesColors);

function domRangeColor(i, text, textColor) {
  //let root = document.getElementById('newscategory2').firstChild;
  let root = newsCategories[i].firstChild;
  let content = root.nodeValue;

  if (~content.indexOf(text)) {
    if (document.createRange) {
      let rng = document.createRange();
      rng.setStart(root, content.indexOf(text));
      rng.setEnd(root, content.indexOf(text) + text.length);

      let colorText = document.createElement('span');
      colorText.style.color = textColor;

      rng.surroundContents(colorText);
    } else {
      console.log('нет совпадений');
    }
  }
}

for (i = 0; i < arrCategoriesLenght; i++) {
  for (j = 0; j < arrLenght; j++) {
    domRangeColor(j, arrCategories[i], arrColors[i]);
  }
}

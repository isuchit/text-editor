
updateText = () => {
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerHTML = text;
}


makeBold = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold')
}

makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic')
}


makeUnderline = (elem) => {
  elem.classList.toggle('active');
  let formattedText = document.getElementById('text-output');
  if(formattedText.classList.contains('underline')){
    formattedText.classList.remove('underline');
  } else {
    formattedText.classList.add('underline');
  }
}


alignText = (elem, alignType) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonList = document.getElementsByClassName('align');
  for(let button of buttonList){
    button.classList.remove('active')
  }
  elem.classList.add('active');
}
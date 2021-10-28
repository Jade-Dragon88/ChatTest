
export default function AutoScroll(props) {
  let CHATFIELD = (document.querySelector('.CHATFIELD')) || null;
  if(CHATFIELD){
    let chatFieldContent = document.querySelector('.chatFieldContent');
    console.log('Объект CHATFIELD найден/активен')
    CHATFIELD.scrollTo(0, chatFieldContent.clientHeight);
  }
  else{
    console.log('Объект CHATFIELD НЕ найден или НЕ активен');
  }
}

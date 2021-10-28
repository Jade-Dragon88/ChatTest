
export default function AutoScroll() {
  let CHATFIELD = (document.querySelector('.CHATFIELD')) || null;
  if(!CHATFIELD){
    console.log('Объект CHATFIELD НЕ найден')
  }
  else{
    let chatFieldContent = document.querySelector('.chatFieldContent');
    console.log('Объект CHATFIELD найден')
    CHATFIELD.scrollTo(0, chatFieldContent.clientHeight);
  }
}

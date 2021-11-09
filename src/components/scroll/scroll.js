function AutoScroll() {
  const CHATFIELD = document.querySelector('.CHATFIELD') || null;
  if (CHATFIELD) {
    const chatFieldContent = document.querySelector('.chatFieldContent');
    console.log('Объект CHATFIELD найден/активен');
    CHATFIELD.scrollTo(0, chatFieldContent.clientHeight);
  } else {
    console.log('Объект CHATFIELD НЕ найден или НЕ активен');
  }
}

export default AutoScroll;

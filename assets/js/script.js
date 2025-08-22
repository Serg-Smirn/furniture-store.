
function toggleNav(){
  const el = document.getElementById('mainnav');
  el.style.display = (el.style.display === 'flex' || el.style.display === '') ? 'none' : 'flex';
}

// Подхватываем параметр product из URL и вставляем в поле формы
(function(){
  const params = new URLSearchParams(window.location.search);
  const prod = params.get('product');
  if(prod){
    const f = document.getElementById('productField');
    if(f) f.value = prod;
  }
})();

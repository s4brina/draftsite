//Nayzak Onclick Toggle Class JavaScript
document.querySelectorAll('.aside-toggle').forEach(dataModalVideo => {
  dataModalVideo.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-show');
  });
});

//Nayzak Onclick Copy HTML Code, Change Text And Put Back Old Text Through Set Timeout JavaScript
document.querySelectorAll('.icon-list .icon-item > div, .hd-doc-copy-to-clipboard.card').forEach(nayzakCopy => {
  nayzakCopy.addEventListener('click', (e) => {
    const result = nayzakCopy.querySelector('.copy-text');
    var oldText = result.innerHTML;
    var newText = result;
    result.textContent = '🎉 copied';
    setTimeout(() => {
      newText.innerHTML = oldText;
    }, 2000);
    const copyElement = document.createElement('input');
    copyElement.value = nayzakCopy.querySelector('i, svg').outerHTML;
    document.body.appendChild(copyElement);
    copyElement.select();
    document.execCommand('copy');
    document.body.removeChild(copyElement);
  });
});
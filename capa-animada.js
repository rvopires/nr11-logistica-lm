/* Capa animada (Avançado): cria a camada de efeitos sobre a foto da abertura.
   Enquadramento igual ao CSS da foto: object-fit: cover; object-position: right center.
   Capa atual = mesa com tablet e rádio-comunicador em primeiro plano (o resto
   da cena de "centro de comando" fica desfocada atrás). Pontos medidos na
   própria foto (1672×941):
   - tela do tablet (apoiado no suporte, de leve inclinada): ~50%–58% larg. / 62%–78% alt.
   - corpo do rádio, ao lado do tablet: ~58%–64% / 62%–78%
   - ponta da antena do rádio: ~60% / 59%
   - ponta da caneta sobre o mapa de papel: ~74,5% / 79,8% */
(function () {
  var IW = 1672, IH = 941;
  var photo = document.querySelector('.qs-home-photo');
  var img = document.getElementById('homePhotoImg');
  if (!photo || !img || photo.querySelector('.qs-fx')) return;

  var layer = document.createElement('div');
  layer.className = 'qs-fx';
  layer.setAttribute('aria-hidden', 'true');

  function add(cls, style, parent) {
    var el = document.createElement('i');
    el.className = cls;
    if (style) el.setAttribute('style', style);
    (parent || layer).appendChild(el);
    return el;
  }

  /* tela do tablet "ligada": brilho pulsando + uma linha de varredura descendo */
  var tablet = add('qs-fx-tablet', 'left:50%;top:62%;width:8%;height:16%');
  add('qs-fx-tablet-glow', null, tablet);
  add('qs-fx-tablet-scan', null, tablet);

  /* luz de status piscando no rádio */
  add('qs-fx-led', 'left:60.5%;top:65%');

  /* ondas de transmissão saindo da ponta da antena */
  [[0, 60, 59], [.8, 60, 59], [1.6, 60, 59]].forEach(function (r) {
    add('qs-fx-ring', 'left:' + r[1] + '%;top:' + r[2] + '%;--dl:' + r[0] + 's');
  });

  /* pulso de localização (ping) onde a caneta marca o mapa de papel */
  add('qs-fx-pin-dot', 'left:74.5%;top:79.8%');
  [[0, 74.5, 79.8], [.6, 74.5, 79.8], [1.2, 74.5, 79.8]].forEach(function (p) {
    add('qs-fx-pin-ring', 'left:' + p[1] + '%;top:' + p[2] + '%;--dl:' + p[0] + 's');
  });

  photo.insertBefore(layer, photo.querySelector('.qs-home-veil'));

  function place() {
    var w = photo.clientWidth, h = photo.clientHeight;
    if (!w || !h) return;
    var iw = img.naturalWidth || IW, ih = img.naturalHeight || IH;
    var s = Math.max(w / iw, h / ih);
    var rw = iw * s, rh = ih * s;
    layer.style.width = rw + 'px';
    layer.style.height = rh + 'px';
    layer.style.left = (w - rw) + 'px';
    layer.style.top = ((h - rh) / 2) + 'px';
  }
  place();
  img.addEventListener('load', place);
  window.addEventListener('resize', place);
  if (window.ResizeObserver) new ResizeObserver(place).observe(photo);
})();

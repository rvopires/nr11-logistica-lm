/* Capa animada — NR 11 Logística para Todos.
   Cria a camada de efeitos exatamente sobre a foto da abertura (assets/fotos/capa.png, 1280×720).
   Enquadramento igual ao CSS da foto: object-fit: cover; object-position: right center.
   Todas as posições abaixo são % da foto original (1280×720), medidas na própria foto:
   - giroflex da empilhadeira: centro em (903, 259) px = 70,6% / 35,9%
   - reflexo laranja no chão sob a empilhadeira: ~66% / 68%
   - lâmpadas do teto: duas fileiras que convergem para o fundo do corredor
   - cabeça da personagem: ~85% / 35% (o balão de fala aponta para ela)
   Para desfazer: remova o <link> do capa-animada.css e este <script> do sessao-aprender.html. */
(function () {
  var IW = 1280, IH = 720;
  var home = document.getElementById('home');
  var photo = document.querySelector('.qs-home-photo');
  var img = document.getElementById('homePhotoImg');
  if (!photo || !img || photo.querySelector('.qs-fx')) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var layer = document.createElement('div');
  layer.className = 'qs-fx';
  layer.setAttribute('aria-hidden', 'true');

  function add(tag, cls, style) {
    var el = document.createElement(tag);
    el.className = cls;
    if (style) el.setAttribute('style', style);
    layer.appendChild(el);
    return el;
  }

  /* luz do teto: [x%, y%, tamanho em cqw, atraso s] — esquerda e direita, do mais perto ao mais longe */
  var lamps = [
    [58.4, 2.5, 3.6, 0], [74.2, 2.1, 3.6, .3],
    [59.5, 11.5, 3.0, .5], [72.4, 11.0, 3.0, .8],
    [60.3, 17.9, 2.5, 1.0], [71.1, 17.6, 2.5, 1.3],
    [60.9, 22.6, 2.1, 1.5], [70.2, 22.3, 2.1, 1.8],
    [61.4, 26.1, 1.8, 2.0], [69.6, 25.9, 1.8, 2.3],
    [61.8, 29.0, 1.5, 2.5], [69.1, 28.8, 1.5, 2.8]
  ];
  lamps.forEach(function (l) {
    add('i', 'qs-fx-lamp', 'left:' + l[0] + '%;top:' + l[1] + '%;--s:' + l[2] + 'cqw;--dl:' + l[3] + 's');
  });
  /* brilho em estrela nas duas lâmpadas mais próximas */
  [[58.4, 2.5, 0], [74.2, 2.1, 1.7]].forEach(function (s) {
    add('i', 'qs-fx-star', 'left:' + s[0] + '%;top:' + s[1] + '%;--dl:' + s[2] + 's');
  });

  /* reflexo da luz no piso molhado [x%, topo%, altura%, largura cqw, atraso s] */
  [[53.9, 68, 32, 1.3, 0], [60.9, 70, 28, 1.2, 1.4], [73.0, 66, 32, 1.3, 2.6], [36.7, 68, 30, 1.2, .8]
  ].forEach(function (r) {
    add('i', 'qs-fx-shine', 'left:' + r[0] + '%;top:' + r[1] + '%;height:' + r[2] + '%;--w:' + r[3] + 'cqw;--dl:' + r[4] + 's');
  });

  /* sirene da empilhadeira: a luz tinge o chão, o giroflex pisca e um facho gira em volta */
  add('i', 'qs-fx-floorglow');
  add('i', 'qs-fx-beacon-sweep');
  add('i', 'qs-fx-beacon-halo');
  add('i', 'qs-fx-beacon');

  /* balão de fala da personagem: dicas de segurança que se alternam */
  var bubble = add('div', 'qs-fx-bubble');
  var tips = [
    'Bem-vindo(a) à Logística para Todos!',
    'Aqui, segurança vem em primeiro lugar.',
    'Bora começar? Clique em Iniciar!'
  ];

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

  /* ── balão: digita a frase, segura, some, próxima ── */
  var tipIdx = 0, typeTimer = null, cycleTimer = null;
  function visible() { return !home || !home.hidden; }
  function showTip() {
    if (!visible()) { cycleTimer = setTimeout(showTip, 1200); return; }
    var txt = tips[tipIdx % tips.length];
    tipIdx++;
    bubble.textContent = '';
    bubble.classList.add('is-on');
    var i = 0;
    clearInterval(typeTimer);
    typeTimer = setInterval(function () {
      i++;
      bubble.textContent = txt.slice(0, i);
      if (i >= txt.length) {
        clearInterval(typeTimer);
        cycleTimer = setTimeout(function () {
          bubble.classList.remove('is-on');
          cycleTimer = setTimeout(showTip, 700);
        }, 3200);
      }
    }, 38);
  }
  if (reduce) {
    bubble.textContent = tips[0];
    bubble.classList.add('is-on');
  } else {
    cycleTimer = setTimeout(showTip, 1400);
  }
})();

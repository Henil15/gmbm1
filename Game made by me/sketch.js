var a,aIMG,b,bIMG,c,cIMG,d,dIMG,e,eIMG,f,fIMG,
g,gIMG,h,hIMG,i,iIMG,j,jIMG,k,kIMG,l,lIMG,
m,mIMG,n,nIMG,o,oIMG,p,pIMG,q,qIMG,r,rIMG,
s,sIMG,t,tIMG,u,uIMG,v,vIMG,w,wIMG,x,xIMG,
y,yIMG,z,zIMG,backgroundImg;

function preload(){
  aIMG = loadImage("a i.png");
  bIMG = loadImage("b.png");
  cIMG = loadImage("c.png");
  dIMG = loadImage("d.png");
  eIMG = loadImage("e.png");
  fIMG = loadImage("f.png");
  gIMG = loadImage("g.png");
  hIMG = loadImage("h.png");
  iIMG = loadImage("i.png");
  jIMG = loadImage("j.png");
  kIMG = loadImage("k.png");
  lIMG = loadImage("l.png");
  mIMG = loadImage("m.png");
  nIMG = loadImage("n.png");
  oIMG = loadImage("o.png");
  pIMG = loadImage("p.png");
  qIMG = loadImage("q.png");
  rIMG = loadImage("r.png");
  sIMG = loadImage("s.png");
  tIMG = loadImage("t.png");
  uIMG = loadImage("u.png");
  vIMG = loadImage("v.png");
  wIMG = loadImage("w.png");
  xIMG = loadImage("x.png");
  yIMG = loadImage("y.png");
  zIMG = loadImage("z.png");
  backgroundImg = loadImage("images.png")
}

function setup(){
 createCanvas(1536,750)

 aB = new Group();
bB = new Group();
cB = new Group();
dB = new Group();
eB = new Group();
fB = new Group();
gB = new Group();
hG = new Group();
iB = new Group();
jB = new Group();
kB = new Group();
lB = new Group();
mB = new Group();
nB = new Group();
oB = new Group();
pB = new Group();
qB = new Group();
rB = new Group();
sB = new Group();
tB = new Group();
uB = new Group();
vB = new Group();
wB = new Group();
xB = new Group();
yB = new Group();
zB = new Group();

ahillum();
bhillum();
chillum();
dhillum();
ehillum();
fhillum();
ghillum();
hhillum();
ihillum();
jhillum();
khillum();
lhillum();
mhillum();
nhillum();
ohillum();
phillum();
qhillum();
rhillum();
shillum();
thillum();
uhillum();
vhillum();
whillum();
xhillum();
yhillum();
zhillum();
}


function draw(){
background(backgroundImg)

var select_hillum = Math.round(random(1,26));
  
if (World.frameCount % 100 == 0) {
  if (select_hillum == 1) {
    ahillum();
  } else if (select_hillum == 2) {
    bhillum();
  } else if (select_hillum ==3) {
    chillum();
  } else if (select_hillum == 4) {
    dhillum();
  } else if (select_hillum == 5) {
    ehillum();
  } else if (select_hillum == 6) {
    fhillum();
  } else if (select_hillum == 7) {
    ghillum();
  } else if (select_hillum == 8) {
    hhillum();
  } else if (select_hillum == 9) {
    ihillum();
  } else if (select_hillum == 10) {
    jhillum();
  } else if (select_hillum == 11) {
    khillum();
  } else if (select_hillum == 12) {
    lhillum();
  } else if (select_hillum == 13) {
    mhillum();
  } else if (select_hillum == 14) {
    nhillum();
  } else if (select_hillum == 15) {
    ohillum();
  } else if (select_hillum == 16) {
    phillum();
  } else if (select_hillum == 17) {
    qhillum();
  } else if (select_hillum == 18) {
    rhillum();
  } else if (select_hillum == 19) {
    shillum();
  } else if (select_hillum == 20) {
    thillum();
  } else if (select_hillum == 21) {
    uhillum();
  } else if (select_hillum == 22) {
    vhillum();
  } else if (select_hillum == 23) {
    whillum();
  } else if (select_hillum == 24) {
    xhillum();
  } else if (select_hillum == 25) {
    yhillum();
  } else {
    zhillum();
  }
}

keyPressed();

    drawSprites();
}

function ahillum() {
  var a = createSprite(0,Math.round(random(10, 750)), 10, 10);
  a.addImage(aIMG);
  a.velocityX =8;
  a.lifetime = 100;
  a.scale = 0.4;
  aB.add(a)
}

function bhillum() {
  var b = createSprite(0,Math.round(random(10, 750)), 10, 10);
  b.addImage(bIMG);
  b.velocityX =8;
  b.lifetime = 100;
  b.scale = 0.4;
  bB.add(b)
}

function chillum() {
  var c = createSprite(0,Math.round(random(10, 550)), 10, 10);
  c.addImage(cIMG);
  c.velocityX =8;
  c.lifetime = 150;
  c.scale = 0.4;
  cB.add(c)
}

function dhillum() {
  var d = createSprite(0,Math.round(random(10, 550)), 10, 10);
  d.addImage(dIMG);
  d.velocityX =8;
  d.lifetime = 150;
  d.scale = 0.4;
  dB.add(d)
}

function ehillum() {
  var e = createSprite(0,Math.round(random(10, 550)), 10, 10);
  e.addImage(eIMG);
  e.velocityX =8;
  e.lifetime = 150;
  e.scale = 0.4;
  eB.add(e)
}

function fhillum() {
  var f = createSprite(0,Math.round(random(10, 550)), 10, 10);
  f.addImage(fIMG);
  f.velocityX =8;
  f.lifetime = 150;
  f.scale = 0.4;
  fB.add(f)
}

function ghillum() {
  var g = createSprite(0,Math.round(random(10, 550)), 10, 10);
  g.addImage(gIMG);
  g.velocityX =8;
  g.lifetime = 150;
  g.scale = 0.4;
  gB.add(g)
}

function hhillum() {
  var h = createSprite(0,Math.round(random(10, 550)), 10, 10);
  h.addImage(hIMG);
  h.velocityX =8;
  h.lifetime = 150;
  h.scale = 0.4;
  hG.add(h)
}

function ihillum() {
  var i = createSprite(0,Math.round(random(10, 550)), 10, 10);
  i.addImage(iIMG);
  i.velocityX =8;
  i.lifetime = 150;
  i.scale = 0.4;
  iB.add(i)
}

function jhillum() {
  var j = createSprite(0,Math.round(random(10, 550)), 10, 10);
  j.addImage(jIMG);
  j.velocityX =8;
  j.lifetime = 150;
  j.scale = 0.4;
  jB.add(j)
}

function khillum() {
  var k = createSprite(0,Math.round(random(10, 550)), 10, 10);
  k.addImage(kIMG);
  k.velocityX =8;
  k.lifetime = 150;
  k.scale = 0.4;
  kB.add(k)
}

function lhillum() {
  var l = createSprite(0,Math.round(random(10, 550)), 10, 10);
  l.addImage(lIMG);
  l.velocityX =8;
  l.lifetime = 150;
  l.scale = 0.4;
  lB.add(l)
}

function mhillum() {
  var m = createSprite(0,Math.round(random(10, 550)), 10, 10);
  m.addImage(mIMG);
  m.velocityX =8;
  m.lifetime = 150;
  m.scale = 0.4;
  mB.add(m)
}

function nhillum() {
  var n = createSprite(0,Math.round(random(10, 550)), 10, 10);
  n.addImage(nIMG);
  n.velocityX =8;
  n.scale = 0.1
  n.lifetime = 150;
 nB.add(n)
}

 function ohillum() {
  var o = createSprite(0,Math.round(random(10, 550)), 10, 10);
  o.addImage(oIMG);
  o.velocityX =8;
  o.scale = 0.4
  o.lifetime = 150;
 oB.add(o)
 }

 function phillum() {
  var p = createSprite(0,Math.round(random(10, 550)), 10, 10);
  p.addImage(pIMG);
  p.velocityX =8;
  p.scale = 0.4
  p.lifetime = 150;
 pB.add(p)
 }

 function qhillum() {
  var q = createSprite(0,Math.round(random(10, 550)), 10, 10);
  q.addImage(qIMG);
  q.velocityX =8;
  q.scale = 0.4
  q.lifetime = 150;
 qB.add(q)
 }

 function rhillum() {
  var r = createSprite(0,Math.round(random(10, 550)), 10, 10);
  r.addImage(rIMG);
  r.velocityX =8;
  r.scale = 0.4
  r.lifetime = 150;
 rB.add(r)
 }

 function shillum() {
  var s = createSprite(0,Math.round(random(10, 550)), 10, 10);
  s.addImage(sIMG);
  s.velocityX =8;
  s.scale = 0.4
  s.lifetime = 150;
 sB.add(s)
 }

 function thillum() {
  var t = createSprite(0,Math.round(random(10, 550)), 10, 10);
  t.addImage(tIMG);
  t.velocityX =8;
  t.scale = 0.4
  t.lifetime = 150;
 tB.add(t)
 }

 function uhillum() {
  var u = createSprite(0,Math.round(random(10, 550)), 10, 10);
  u.addImage(uIMG);
  u.velocityX =8;
  u.scale = 0.4
  u.lifetime = 150;
 uB.add(u)
 }

 function vhillum() {
  var v = createSprite(0,Math.round(random(10, 550)), 10, 10);
 v.addImage(vIMG);
 v.velocityX =8;
 v.scale = 0.4
 v.lifetime = 150;
 vB.add(v)
 }

 function whillum() {
  var w = createSprite(0,Math.round(random(10, 550)), 10, 10);
  w.addImage(wIMG);
  w.velocityX =8
  w.scale = 0.4
  w.lifetime = 150;
 wB.add(w)
 }

 function xhillum() {
  var x = createSprite(0,Math.round(random(10, 550)), 10, 10);
  x.addImage(xIMG);
  x.velocityX =8;
  x.scale = 0.4
  x.lifetime = 150;
 xB.add(x)
 }

 function yhillum() {
  var y = createSprite(0,Math.round(random(10, 550)), 10, 10);
 y.addImage(yIMG);
  y.velocityX =8;
  y.scale = 0.4
  y.lifetime = 150;
 yB.add(y)
 }

 function zhillum() {
  var z = createSprite(0,Math.round(random(10, 550)), 10, 10);
  z.addImage(zIMG);
  z.velocityX =8;
  z.scale = 0.4
  z.lifetime = 150;
 zB.add(z)
 }


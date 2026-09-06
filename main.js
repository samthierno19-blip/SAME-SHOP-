
const products=[
{name:'Étagère à chaussures avec rangement',cat:'Maison',price:10000,image:'etagere-chaussures.jpg'},
{name:'Montre téléphone connectée GSM',cat:'Accessoires',price:15000,image:'montre-telephone.jpg'},
{name:'Smartphone Android',cat:'Autres',price:160000,image:'smartphone.jpg'},
{name:'Bouilloire électrique',cat:'Maison',price:8000,image:'bouilloire.jpg'},
{name:'Lot de serviettes de bain',cat:'Maison',price:7000,image:'serviettes.jpg'},
{name:'Ensemble homme TOUPHY noir',cat:'Mode',price:7000,image:'ensemble-homme.jpg'},
{name:'Robe moulante rose Calliara',cat:'Mode',price:7000,image:'robe-femme.jpg'},
{name:'Coffret de parfums',cat:'Accessoires',price:7000,image:'coffret-parfums.jpg'},
{name:'Sac à dos multifonction noir',cat:'Accessoires',price:8000,image:'sac-a-dos.jpg'},
{name:'Sac à main femme rose',cat:'Accessoires',price:6500,image:'sac-femme.jpg'},
{name:'Coffret parfums Angel Elves Homme',cat:'Accessoires',price:7000,image:'coffret-parfums-angel-elves-homme.jpg'},
{name:'Coffret parfums Angel Elves Femme',cat:'Accessoires',price:7000,image:'coffret-parfums-angel-elves-femme.jpg'},
{name:'Coffret parfums Angel Elves Mixte',cat:'Accessoires',price:7000,image:'coffret-parfums-angel-elves-mixte.jpg'},
{name:'Nike Mercurial Superfly — blanc/vert',cat:'Chaussures',price:13000,image:'crampons-football-blanc-vert.jpg'},
{name:'Nike Mercurial Superfly — blanc/bleu',cat:'Chaussures',price:13000,image:'crampons-football-blanc-bleu.jpg'},
{name:'Nike Mercurial Superfly — orange/vert',cat:'Chaussures',price:13000,image:'crampons-football-orange.jpg'},
{name:'Ensemble homme polo marron',cat:'Mode',price:7000,image:'ensemble-homme-marron.jpg'},
{name:'Ensemble homme polo rouge',cat:'Mode',price:7500,image:'ensemble-homme-rouge.jpg'},
{name:'Ensemble homme polo rose',cat:'Mode',price:7500,image:'ensemble-homme-rose.jpg'},
{name:'Ensemble homme 1997 noir',cat:'Mode',price:7000,image:'ensemble-homme-1997-noir.jpg'},
{name:'Montre ARHANORY dorée + bracelets',cat:'Accessoires',price:5000,image:'montre-set-dore.jpg'},
{name:'Montre ARHANORY bleue + bracelets',cat:'Accessoires',price:4000,image:'montre-set-bleu.jpg'},
{name:'Montre Geneva chronographe',cat:'Accessoires',price:3500,image:'montre-geneva-chronographe.jpg'},
{name:'Montre noire chronographe + bracelets',cat:'Accessoires',price:4000,image:'montre-noire-bracelets.jpg'},
{name:'Montre Geneva noire',cat:'Accessoires',price:4000,image:'montre-geneva-noire.jpg'},
{name:'Montre WOKAI bleue',cat:'Accessoires',price:3500,image:'montre-wokai-bleue.jpg'},
{name:'Montre BINDONG dorée',cat:'Accessoires',price:8000,image:'montre-bindong-doree.jpg'},
{name:'Montre carrée bleue',cat:'Accessoires',price:3500,image:'montre-carree-bleue.jpg'},
{name:'Montre BOLUN bleue',cat:'Accessoires',price:3500,image:'montre-bolun-bleue.jpg'},
{name:'Montre COGONG rouge',cat:'Accessoires',price:4000,image:'montre-cogong-rouge.jpg'},
{name:'Sac cabas imprimé africain',cat:'Accessoires',price:6500,image:'sac-cabas-africain.jpg'},
{name:'Sac cabas imprimé fille — noir',cat:'Accessoires',price:6500,image:'sac-cabas-noir-fille.jpg'},
{name:'Sac cabas imprimé femme — rose',cat:'Accessoires',price:6500,image:'sac-cabas-rose-femme.jpg'},
{name:'Sac cabas imprimé anime — rose',cat:'Accessoires',price:6500,image:'sac-cabas-rose-anime.jpg'},
{name:'Sac cabas imprimé femme — beige',cat:'Accessoires',price:6500,image:'sac-cabas-beige-femme.jpg'},
{name:'Montre noire + bracelets et accessoires',cat:'Accessoires',price:5000,image:'montre-set-noir-1.jpg'},
{name:'Montre noire chronographe + collier et bracelet',cat:'Accessoires',price:5000,image:'montre-set-noir-2.jpg'},
{name:'Montre ZHPEER dorée',cat:'Accessoires',price:5000,image:'montre-zhpeer-doree.jpg'},
{name:'Montre noire + bracelets et collier',cat:'Accessoires',price:5000,image:'montre-set-noir-3.jpg'},
{name:'Montre dorée avec bracelet cuir',cat:'Accessoires',price:5000,image:'montre-doree-cuir.jpg'},
{name:'Montre noire + bracelets',cat:'Accessoires',price:5000,image:'montre-set-noir-4.jpg'},
{name:'Montre ARHANORY cuir marron + bracelets',cat:'Accessoires',price:4500,image:'montre-set-marron.jpg'},
{name:'Montre Geneva noire + bracelets',cat:'Accessoires',price:4500,image:'montre-geneva-bracelets-noire.jpg'},
{name:'Montre cuir marron + bracelets',cat:'Accessoires',price:4500,image:'montre-set-cuir-marron.jpg'},
{name:'Montre blanche + bracelet et collier',cat:'Accessoires',price:5000,image:'montre-set-blanc.jpg'},
{name:'Montre homme noire + bracelets',cat:'Accessoires',price:5000,image:'montre-homme-bracelets-noir-1.jpg'},
{name:'Montre luxe dorée + bracelet',cat:'Accessoires',price:5000,image:'montre-luxe-doree-bracelet.jpg'},
{name:'Montre GUSALAI bleue',cat:'Accessoires',price:4000,image:'montre-gusalai-bleue.jpg'},
{name:'Montre noire + bracelets',cat:'Accessoires',price:5000,image:'montre-bracelets-noir-2.jpg'},
{name:'Montre cuir brun + bracelets',cat:'Accessoires',price:4500,image:'montre-cuir-brun-bracelets.jpg'},
{name:'Montre classique en cuir marron',cat:'Accessoires',price:4500,image:'montre-cuir-classique.jpg'},
{name:'Montre BOLUN noire',cat:'Accessoires',price:3500,image:'montre-bolun-noire.jpg'},
{name:'Montre BOLUN marron',cat:'Accessoires',price:3500,image:'montre-bolun-brune.jpg'},
{name:'Montre BOLUN bleue — modèle 2',cat:'Accessoires',price:3500,image:'montre-bolun-bleue-2.jpg'},
{name:'Montre BOLUN bleue — modèle 3',cat:'Accessoires',price:3500,image:'montre-bolun-bleue-3.jpg'},
{name:'Montre BOLUN dorée avec bracelet cuir',cat:'Accessoires',price:3500,image:'montre-bolun-doree-cuir.jpg'},
{name:'Montre bleue avec bracelet cuir marron',cat:'Accessoires',price:3500,image:'montre-bleue-cuir-marron.jpg'},
{name:'Set de sacs — gris',cat:'Accessoires',price:8000,image:'sac-set-gris.jpg'},
{name:'Set de sacs — bleu ciel',cat:'Accessoires',price:8000,image:'sac-set-bleu-ciel.jpg'},
{name:'Set de sacs 3-en-1 — noir',cat:'Accessoires',price:8000,image:'sac-set-3-en-1.jpg'},
{name:'Set de sacs — noir',cat:'Accessoires',price:8000,image:'sac-set-noir.jpg'},
{name:'Set de sacs — blanc et noir',cat:'Accessoires',price:8000,image:'sac-set-blanc-noir.jpg'},
{name:'Set de sacs 5 pièces — noir',cat:'Accessoires',price:8000,image:'sac-set-5-pieces.jpg'},
{name:'Sèche-cheveux professionnel',cat:'Maison',price:9000,image:'seche-cheveux-professionnel.jpg'},
{name:'Montre SAWA + bracelets',cat:'Accessoires',price:4000,image:'montre-sawa-bracelets.jpg'},
{name:'Montre ARHANORY violette + bijoux',cat:'Accessoires',price:5000,image:'montre-arhanory-violet-bijoux.jpg'},
{name:'Montre noire + bracelet cœur',cat:'Accessoires',price:6000,image:'montre-coeur-noir-bracelet.jpg'},
{name:'Montre carrée noire et blanche + bijoux cœur',cat:'Accessoires',price:6000,image:'montre-carree-noir-blanc-coeur.jpg'},
{name:'Montre papillon rose + parure',cat:'Accessoires',price:5000,image:'montre-papillon-rose.jpg'},
{name:'Montre + parure bijoux verts',cat:'Accessoires',price:6000,image:'montre-bijoux-vert.jpg'},
{name:'Montre + parure cœurs',cat:'Accessoires',price:6000,image:'montre-coeur-noir-parure.jpg'},
{name:'Montre argentée + parure cœurs roses',cat:'Accessoires',price:5500,image:'montre-argent-parure-coeurs-roses.jpg'},
{name:'Montre blanche + parure nœud',cat:'Accessoires',price:5000,image:'montre-blanche-noeud-parure.jpg'},
{name:'New Balance 530 — blanc/rose',cat:'Chaussures',price:12000,image:'baskets-sport-rose.jpg'},
{name:'adidas Campus 00s — noir/rose',cat:'Chaussures',price:10000,image:'baskets-noir-rose.jpg'},
{name:'ASICS GEL-1130 — blanc/bleu',cat:'Chaussures',price:12000,image:'baskets-sport-bleu-blanc.jpg'},
{name:'Étagère à chaussures noire — 5 niveaux',cat:'Maison',price:7500,image:'etagere-chaussures-noire.jpg'},
{name:'Baskets fashion — blanc/gris',cat:'Chaussures',price:8000,image:'baskets-fashion-blanches-grises.jpg'},
{name:'Baskets GALUIN — beige/noir à motif',cat:'Chaussures',price:8000,image:'baskets-galuin-motif-beige-noir.jpg'},
{name:'Baskets ALALAZI — beige/vert',cat:'Chaussures',price:8000,image:'baskets-alalazi-beige-vert.jpg'},
{name:'Baskets sport — noires',cat:'Chaussures',price:8000,image:'baskets-sport-noires.jpg'},
{name:'Baskets blanches à semelle épaisse',cat:'Chaussures',price:8000,image:'baskets-blanches-semelle-epaisse.jpg'},
{name:'Armoire de rangement pour vêtements',cat:'Maison',price:15000,image:'armoire-rangement-vetements.jpg'},
{name:'Robe courte zébrée Calliara',cat:'Mode',price:5000,image:'robe-courte-zebree-calliara.jpg'},
{name:'Ensemble Calliara rouge à jupe fleurie',cat:'Mode',price:8000,image:'ensemble-rouge-jupe-fleurie-calliara.jpg'},
{name:'Robe courte léopard Calliara',cat:'Mode',price:5000,image:'robe-courte-leopard-calliara.jpg'},
{name:'Ensemble Marshmello noir',cat:'Mode',price:7500,image:'ensemble-marshmello-noir.jpg'},
{name:'Ensemble polo + pantalon beige',cat:'Mode',price:10000,image:'ensemble-polo-pantalon-beige.jpg'},
{name:'Ensemble étoile noir',cat:'Mode',price:7500,image:'ensemble-etoile-noir.jpg'},
{name:'Ensemble t-shirt + short vert',cat:'Mode',price:7500,image:'ensemble-t-shirt-short-vert.jpg'},
{name:'Ensemble t-shirt + short noir',cat:'Mode',price:7500,image:'ensemble-t-shirt-short-noir.jpg'},
{name:'Ensemble papillon gris',cat:'Mode',price:7500,image:'ensemble-papillon-gris.jpg'},
{name:'Ensemble t-shirt + short tacheté gris',cat:'Mode',price:8000,image:'ensemble-tachete-gris.jpg'},
{name:'Ensemble t-shirt + short blanc',cat:'Mode',price:8000,image:'ensemble-t-shirt-short-blanc.jpg'},
{name:'Ensemble Calliara Summer 28',cat:'Mode',price:7000,image:'ensemble-summer-28-call-iara.jpg'},
{name:'Ensemble logo lapin noir',cat:'Mode',price:7500,image:'ensemble-logo-lapin-noir.jpg'}
,{name:'Robe moulante léopard Calliara',cat:'Mode',price:6000,image:'robe-calliara-leopard.jpg'}
,{name:'Robe moulante orange et blanc Calliara',cat:'Mode',price:5000,image:'robe-calliara-orange.jpg'}
,{name:'Ensemble homme noir à motif bleu',cat:'Mode',price:5500,image:'ensemble-homme-noir-motif-bleu.jpg'}
,{name:'Armoire de rangement motif marron',cat:'Maison',price:15000,image:'armoire-rangement-motif.jpg'}
,{name:'Baskets streetwear — noir/blanc',cat:'Chaussures',price:8000,image:'baskets-streetwear-noir-blanc.jpg'}
,{name:'Ader Star — noir/gris',cat:'Chaussures',price:8000,image:'ader-star-noir-gris.jpg'}
,{name:'Baskets streetwear — blanc/beige',cat:'Chaussures',price:8000,image:'baskets-streetwear-blanc-beige.jpg'}
,{name:'Ader Star — blanc/bleu',cat:'Chaussures',price:8000,image:'ader-star-blanc-bleu.jpg'}
,{name:'Étagère à chaussures noire — 5 niveaux',cat:'Maison',price:7500,image:'etagere-chaussures-noire-2.jpg'}
];
let category='Tous',cart=[],selectedProduct=null,selectedSize=null,selectedQty=1;
const shoeSizes=[37,38,39,40,41,42,43,44,45,46];
const clothingSizes=['S','M','L','XL','XXL','XXXL'];
function money(n){return n==null?'Prix à confirmer':new Intl.NumberFormat('fr-FR').format(n)+' FCFA'}
function setCat(c,el){category=c;document.querySelectorAll('.cat').forEach(x=>x.classList.remove('active'));el.classList.add('active');render()}
function productNeedsSize(p){return p.cat==='Chaussures'||p.cat==='Mode'}
function sizeLabel(p){return p.cat==='Chaussures'?'Pointure':'Taille'}
function sizeOptions(p){return p.cat==='Chaussures'?shoeSizes:clothingSizes}
function render(){
 let q=document.getElementById('search').value.toLowerCase(),s=document.getElementById('sort').value;
 let a=products.filter(p=>(category==='Tous'||p.cat===category)&&p.name.toLowerCase().includes(q));
 if(s==='low')a.sort((x,y)=>(x.price??Infinity)-(y.price??Infinity));
 if(s==='high')a.sort((x,y)=>(y.price??-Infinity)-(x.price??-Infinity));
 document.getElementById('productCount').textContent=`(${a.length} produits)`; document.getElementById('products').innerHTML=a.map(p=>`<article class="product">
 <div class="pic" onclick="openDetails(${products.indexOf(p)})"><img src="${p.image}" alt="${p.name}" loading="eager" decoding="async" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<div style="padding:20px;text-align:center;color:#746b63">Image indisponible</div>')"></div>
 <div class="info"><small>${p.cat}</small><h3>${p.name}</h3><div class="price">${money(p.price)}</div>
 <div class="product-actions"><button class="add" onclick="openDetails(${products.indexOf(p)})">Ajouter au panier</button></div></div></article>`).join('')||'<p class="empty">Aucun produit trouvé.</p>'
}
function openDetails(i){
 selectedProduct=products[i]; selectedSize=null; selectedQty=1;
 let p=selectedProduct, opts=productNeedsSize(p)?`<div class="option"><label>${sizeLabel(p)}</label><div class="options">${sizeOptions(p).map(v=>`<button class="optionbtn" onclick="chooseSize('${v}')">${v}</button>`).join('')}</div></div>`:'';
 document.getElementById('detailContent').innerHTML=`
 <div class="detailgrid"><div><img class="detailimg" src="${p.image}" alt="${p.name}"></div>
 <div><small>${p.cat}</small><h2>${p.name}</h2><div class="price">${money(p.price)}</div>
 ${opts}
 <div class="option"><label>Quantité</label><div class="qty"><button onclick="changeDetailQty(-1)">−</button><span id="detailQty">1</span><button onclick="changeDetailQty(1)">+</button></div></div>
 <button class="add" style="margin-top:18px" onclick="addSelected()">🛒 Ajouter au panier</button></div></div>`;
 document.getElementById('details').classList.add('show');
}
function chooseSize(v){selectedSize=v;document.querySelectorAll('.optionbtn').forEach(b=>b.classList.toggle('selected',b.textContent===String(v)))}
function changeDetailQty(d){selectedQty=Math.max(1,selectedQty+d);document.getElementById('detailQty').textContent=selectedQty}
function addSelected(){
 if(!selectedProduct)return;
 if(productNeedsSize(selectedProduct)&&selectedSize===null){alert('Veuillez choisir '+sizeLabel(selectedProduct)+' avant d’ajouter au panier.');return}
 addToCart(selectedProduct,selectedQty,selectedSize);closeDetails();openCart()
}
function addToCart(p,qty,size){
 let existing=cart.find(x=>x.product===p && x.size===size);
 if(existing)existing.qty+=qty;else cart.push({product:p,qty,size});
 update()
}
function update(){
 let count=cart.reduce((s,x)=>s+x.qty,0);document.getElementById('count').textContent=count;
 if(!cart.length){document.getElementById('cart').innerHTML='<p class="empty">Votre panier est vide.</p>';return}
 document.getElementById('cart').innerHTML=cart.map((x,i)=>`<div class="cartitem">
 <img src="${x.product.image}" alt="${x.product.name}">
 <div><b>${x.product.name}</b><div class="cartmeta">${x.size!==null?' '+sizeLabel(x.product)+': '+x.size+' • ':''}${money(x.product.price)} l'unité</div>
 <div class="qty" style="margin-top:7px"><button onclick="changeCartQty(${i},-1)">−</button><span>${x.qty}</span><button onclick="changeCartQty(${i},1)">+</button></div></div>
 <div><b>${money(x.product.price*x.qty)}</b><button onclick="removeCart(${i})" style="display:block;margin-top:7px;border:0;background:#eee;border-radius:8px;padding:6px;cursor:pointer">✕</button></div>
 </div>`).join('')+`<h3>Total : ${cart.every(x=>x.product.price!=null)?money(cart.reduce((s,x)=>s+x.product.price*x.qty,0)):'Prix à confirmer'}</h3>`;
}
function changeCartQty(i,d){cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);update()}
function removeCart(i){cart.splice(i,1);update()}
function openCart(){document.getElementById('modal').classList.add('show');update()}
function closeCart(){document.getElementById('modal').classList.remove('show')}
function closeDetails(){document.getElementById('details').classList.remove('show')}
function payWave(){
 if(!cart.length){alert('Votre panier est vide.');return}
 window.location.href='https://pay.wave.com/m/M_sn_u_ECddtJPIjb/c/sn/';
}
function checkout(){
  if(!cart.length)return alert('Votre panier est vide.');
  const base=window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
  let lines=cart.map(x=>{
    const imageUrl=new URL(x.product.image,base).href;
    const productUrl=new URL(window.location.href);
    productUrl.hash='produit-'+encodeURIComponent(x.product.name);
    return `📦 ${x.product.name}%0A💰 Prix : ${money(x.product.price)}%0A${x.size!==null?'📏 '+sizeLabel(x.product)+': '+x.size+'%0A':''}🔢 Quantité : ${x.qty}%0A🖼️ Photo : ${encodeURIComponent(imageUrl)}%0A🔗 Produit : ${encodeURIComponent(productUrl.href)}`;
  }).join('%0A%0A');
  let total=cart.every(x=>x.product.price!=null)?money(cart.reduce((s,x)=>s+x.product.price*x.qty,0)):'Prix à confirmer';
  let text=`Bonjour SAME-SHOP 🛍️,%0A%0AJe souhaite commander :%0A%0A${lines}%0A%0A💵 TOTAL : ${total}%0A%0AMerci de me confirmer la disponibilité et la livraison.`;
  window.open('https://wa.me/221709498124?text='+text,'_blank')
}
document.getElementById('year').textContent=new Date().getFullYear();render();

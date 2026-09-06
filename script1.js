
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); deferredInstallPrompt = e;
  const bar=document.getElementById('installBar'); if(bar) bar.style.display='block';
});
const installBtn=document.getElementById('installBtn');
if(installBtn) installBtn.addEventListener('click', async()=>{
  if(!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt=null;
  const bar=document.getElementById('installBar'); if(bar) bar.style.display='none';
});
window.addEventListener('appinstalled',()=>{ const bar=document.getElementById('installBar'); if(bar) bar.style.display='none'; });
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));

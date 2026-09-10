/* SAME-SHOP runtime integration */
(function(){
  const cfg=document.createElement('script'); cfg.src='supabase-config.js'; document.head.appendChild(cfg);
  cfg.onload=function(){
    const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    s.onload=function(){
      window.sameShopSupabase=supabase.createClient(window.sameShopSupabaseConfig.SUPABASE_URL,window.sameShopSupabaseConfig.SUPABASE_ANON_KEY);
      window.dispatchEvent(new Event('same-shop-supabase-ready'));
    }; document.head.appendChild(s);
  };
})();

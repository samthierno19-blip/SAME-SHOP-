async function getCurrentUser(){const{data,error}=await sameShopSupabase.auth.getUser();if(error||!data.user){location.href='auth.html';return null}return data.user}
async function loadProfile(){const user=await getCurrentUser();if(!user)return;const m=user.user_metadata||{};document.getElementById('email').textContent=user.email||'—';document.getElementById('name').textContent=m.full_name||'—';document.getElementById('phone').textContent=m.phone||'—'}
async function logout(){await sameShopSupabase.auth.signOut();location.href='index.html'}
loadProfile();
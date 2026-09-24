function openLogin(){document.getElementById('loginModal').classList.add('show')}
function closeLogin(){document.getElementById('loginModal').classList.remove('show');document.getElementById('loginMessage').textContent=''}
function closeOnBackdrop(e){if(e.target.id==='loginModal')closeLogin()}
function demoLogin(){
  const phone=document.getElementById('phone').value.trim().replace(/\s+/g,'');
  const password=document.getElementById('password').value;
  const msg=document.getElementById('loginMessage');
  if(phone==='+9647000000000' && password==='123456'){
    msg.textContent='Demo login successful. A secure dashboard will be connected when the database is added.';
  }else{
    msg.textContent='Demo mode: use +9647000000000 / 123456';
  }
}
function toggleMenu(){document.querySelector('.nav nav').classList.toggle('mobile')}

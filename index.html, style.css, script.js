<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Love Game Room 💜💙</title>
<style>
body{margin:0;font-family:Arial,sans-serif;text-align:center;overflow:hidden;color:#fff;background:linear-gradient(-45deg,#4b0082,#6a5acd,#1e90ff,#8a2be2);background-size:400% 400%;animation:bg 10s ease infinite}
@keyframes bg{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.container{padding:20px;max-width:700px;margin:auto}.card{background:rgba(255,255,255,.14);backdrop-filter:blur(14px);padding:20px;margin:15px 0;border-radius:28px;box-shadow:0 12px 30px rgba(0,0,0,.18)}.hidden{display:none}
button,input{padding:10px 14px;border:none;border-radius:12px;font-size:16px}button{cursor:pointer;background:linear-gradient(135deg,#8a2be2,#1e90ff);color:#fff;box-shadow:0 8px 20px rgba(0,0,0,.25);transition:transform .2s ease,opacity .2s ease}button:hover{transform:translateY(-2px);opacity:.95}.shake{animation:shake .4s}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}50%{transform:translateX(5px)}75%{transform:translateX(-5px)}}
.heart{position:fixed;bottom:-30px;font-size:22px;animation:floatUp linear forwards}
@keyframes floatUp{to{transform:translateY(-110vh);opacity:0}}
</style>
</head>
<body>
<div class="container">
<h1>💜 Precy & Babi Premium 💙</h1><p>Made with love by Babet for Babi ✨</p>
<div class="card" id="loginBox">
<h2>🔐 Enter Password</h2>
<input id="passwordInput" type="password" placeholder="Enter password...">
<button onclick="unlock()">Unlock 💖</button>
<p id="unlockMsg"></p><p id="hint"></p>
</div>
<div id="gameArea" class="hidden">
<div class="card"><h2>💫 Premium Menu</h2><button onclick="showSection('mainSec')">Main</button> <button onclick="showSection('funSec')">Fun</button> <button onclick="showSection('loveSec')">Love</button> <button onclick="showSection('vipSec')">VIP</button></div>
<div id="mainSec" class="section">
<p id="typing"></p>
<div class="card"><h2>💖 Why I Love You</h2><button onclick="showReason()">Reveal 💜</button><p id="reasonBox"></p></div>
</div><div id="funSec" class="section hidden"><div class="card"><h2>🎡 Spin the Wheel</h2><div id="wheel" style="width:170px;height:170px;border-radius:50%;margin:10px auto;border:8px solid rgba(255,255,255,.7);display:flex;align-items:center;justify-content:center;font-size:24px;transition:transform 3s cubic-bezier(.2,.8,.2,1)">🎯</div><button onclick="spinWheel()">SPIN 💫</button><p id="wheelResult"></p></div>
<div class="card"><h2>🎟️ Scratch Card</h2><button onclick="scratch()">Scratch 💜</button><p id="scratchResult">████████</p></div>
<div class="card"><h2>💬 Mini Chat Game</h2><button onclick="chat()">Talk</button><p id="chatBox"></p></div>
</div><div id="loveSec" class="section hidden"><div class="card"><h2>🏆 Love Points</h2><button onclick="addPoint()">Earn Love 💜</button><p id="points">0 💜</p></div>
<div class="card"><h2>💌 Love Letter</h2><button onclick="letter()">Open</button><p id="letter" class="hidden">My Babi 💜💙<br><br>Thank you for loving your Babet every day.<br><br>Happy monthsary always, love. Forever us ❤️</p></div>
<div class="card"><h2>🎬 Final Scene</h2><button onclick="finalScene()">Finish Game</button></div>
<div class="card"><h2>⏳ Countdown Timer</h2><p id="countdown"></p></div>
<div class="card"><h2>❓ Love Quiz</h2><p>What color represents us most?</p><button onclick="quiz('purple')">Purple</button> <button onclick="quiz('green')">Green</button><p id="quizResult"></p></div>
<div class="card"><h2>🎮 Mini Game: Catch Hearts</h2><button onclick="tapHeart()">Tap Heart 💜</button><p id="tapScore">0 hearts caught</p></div>
<div class="card"><h2>🔐 Secret Ending</h2><p>Reach 25 Love Points to unlock 💖</p><p id="secretMsg"></p></div>
<div id="vipSec" class="section hidden"><div class="card"><h2>👑 VIP Surprise</h2><button onclick="vipLove()">Open Surprise</button><p id="vipMsg"></p></div><div class="card"><h2>📈 Love Progress</h2><div style="background:rgba(255,255,255,.2);border-radius:999px;height:18px;overflow:hidden"><div id="bar" style="height:100%;width:0%;background:#fff"></div></div><p id="barText">0%</p></div></div></div></div>
<script>
let attempts=0,points=0,i=0,r=0;
const text='Welcome to your Love Game Room 💜💙';
const reasons=['God-fearing','Faithful','Kind and gentleman','Smart','Talented','Very gwapo','You support me and make me feel special','You appreciate and compliment me','Patient with me','You make me feel safe and secure','Always there for me','Being yourself... pinaka love nako'];
const prizes=['💜 Unlimited Bite','💙 Try again','💜 So sad.. wala','💙 Hug','💜 Kisssss','💙 You decide'];
function unlock(){const pass=document.getElementById('passwordInput').value;const box=document.getElementById('loginBox');if(pass==='Babi'){document.getElementById('gameArea').classList.remove('hidden');document.getElementById('unlockMsg').innerHTML='💜 Hii babi welcomee 💙';typeText();showSection('mainSec');}else{attempts++;document.getElementById('unlockMsg').innerHTML='Wrong password 💔';document.getElementById('hint').innerHTML=attempts>=2?'Hint: Baby with I':'';box.classList.add('shake');setTimeout(()=>box.classList.remove('shake'),400)}}
function typeText(){if(i<text.length){document.getElementById('typing').innerHTML+=text[i++];setTimeout(typeText,50)}}
function showReason(){document.getElementById('reasonBox').innerHTML=reasons[r++%reasons.length]}
function spinWheel(){const idx=Math.floor(Math.random()*prizes.length);const wheel=document.getElementById('wheel');const deg=1440+(idx*60);wheel.style.transform='rotate('+deg+'deg)';setTimeout(()=>{document.getElementById('wheelResult').innerHTML=prizes[idx]},3000)}
function scratch(){const msgs=['💜 iloveyousomuchh babi','💜 iloveyou more than words can say','💜 Free cuddle coupon'];document.getElementById('scratchResult').innerHTML=msgs[Math.floor(Math.random()*msgs.length)]}
function chat(){const msgs=['Babi: I love you so much','You: Mas love tika 🙄','Babi: Fakii','You: Ayg tuo'];document.getElementById('chatBox').innerHTML=msgs[Math.floor(Math.random()*msgs.length)]}
function addPoint(){points++;document.getElementById('points').innerHTML=points+' 💜';const pct=Math.min(points*4,100);document.getElementById('bar').style.width=pct+'%';document.getElementById('barText').innerHTML=pct+'%';if(points>=25){document.getElementById('secretMsg').innerHTML='💖 Secret Unlocked: You own my heart forever 💖'}}
function letter(){document.getElementById('letter').classList.remove('hidden')}
function finalScene(){document.body.innerHTML='<div id="endScene" style="height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;padding:20px;position:relative;overflow:hidden"><h1 style="z-index:2">💜 Game Complete 💙<br>Precy loves Babi forever 💖</h1></div>';setInterval(firework,400)}
function heart(){const h=document.createElement('div');h.className='heart';h.innerHTML='💜';h.style.left=Math.random()*100+'vw';h.style.animationDuration=(2+Math.random()*3)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),5000)}setInterval(heart,300)
function showSection(id){document.querySelectorAll('.section').forEach(s=>s.classList.add('hidden'));document.getElementById(id).classList.remove('hidden');window.scrollTo(0,0);}function vipLove(){const arr=['👑 You are my favorite person forever','💎 Premium reward: unlimited kisses','✨ VIP Access: my whole heart is yours'];document.getElementById('vipMsg').innerHTML=arr[Math.floor(Math.random()*arr.length)]}
function firework(){const f=document.createElement('div');f.innerHTML='✨';f.style.position='absolute';f.style.left=Math.random()*100+'vw';f.style.top=Math.random()*100+'vh';f.style.fontSize=(20+Math.random()*30)+'px';f.style.animation='pop .8s ease-out forwards';document.getElementById('endScene').appendChild(f);setTimeout(()=>f.remove(),800)}
function updateCountdown(){const target=new Date(Date.now()+300000);const now=new Date();const diff=target-now;const d=Math.max(0,Math.floor(diff/86400000));const h=Math.max(0,Math.floor(diff%86400000/3600000));const m=Math.max(0,Math.floor(diff%3600000/60000));document.getElementById('countdown').innerHTML=d+' days '+h+' hrs '+m+' mins until our next 5-minute love timer 💖'}setInterval(updateCountdown,1000);updateCountdown();
function quiz(ans){document.getElementById('quizResult').innerHTML=ans==='purple'?'💜 Correct! We are purple & blue forever 💙':'😝 Wrong answer babi try again'}
let taps=0;function tapHeart(){taps++;document.getElementById('tapScore').innerHTML=taps+' hearts caught 💜';if(taps===20){document.getElementById('tapScore').innerHTML+=' | Bonus unlocked!'}}

function createRel(){if(document.getElementById('relTimer'))return;const el=document.createElement('div');el.className='card';el.innerHTML='<h2>💞 Relationship Timer</h2><p id="relTimer"></p>';const sec=document.getElementById('mainSec');if(sec)sec.appendChild(el);} 

function updateRelationship(){const start=new Date('2025-03-28T00:00:00');const now=new Date();let diff=now-start;if(diff<0)diff=0;const days=Math.floor(diff/86400000);const hrs=Math.floor((diff%86400000)/3600000);const mins=Math.floor((diff%3600000)/60000);const secs=Math.floor((diff%60000)/1000);const y=Math.floor(days/365);const d=days%365;const el=document.getElementById('relTimer');if(el){el.innerHTML=y+'y '+d+'d '+hrs+'h '+mins+'m '+secs+'s together';}}

setInterval(()=>{createRel();updateRelationship();},1000);
updateRelationship();
</script>
</body>
</html>

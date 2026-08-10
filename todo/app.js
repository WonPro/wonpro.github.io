const initialTasks = [
  {id:1,title:'3분기 캠페인 기획안 마무리',project:'마케팅',due:'오늘',status:'progress',priority:'high',note:'목표 지표와 채널별 예산 확인'},
  {id:2,title:'신규 랜딩페이지 문구 검토',project:'웹사이트',due:'오늘',status:'todo',priority:'medium',note:'모바일 첫 화면 중심으로 검토'},
  {id:3,title:'주간 성과 데이터 정리',project:'데이터',due:'8월 12일',status:'todo',priority:'low',note:'지난주 대비 증감률 포함'},
  {id:4,title:'파트너 미팅 후속 메일 발송',project:'파트너십',due:'완료',status:'done',priority:'medium',note:'회의록과 다음 일정 공유'}
];
const statusLabel={todo:'할 일',progress:'진행 중',done:'완료'};
const priorityLabel={high:'긴급',medium:'보통',low:'여유'};
let tasks=load();let filter='all';let query='';
const $=s=>document.querySelector(s);
function load(){try{return JSON.parse(localStorage.getItem('wonpro-todo-tasks'))||initialTasks}catch{return initialTasks}}
function save(){localStorage.setItem('wonpro-todo-tasks',JSON.stringify(tasks))}
function escapeHtml(value){const d=document.createElement('div');d.textContent=value;return d.innerHTML}
function counts(){return{all:tasks.length,todo:tasks.filter(t=>t.status==='todo').length,progress:tasks.filter(t=>t.status==='progress').length,done:tasks.filter(t=>t.status==='done').length}}
function render(){const c=counts();const percent=c.all?Math.round(c.done/c.all*100):0;$('#progressText').textContent=`${percent}%`;$('#progressDetail').textContent=`${c.done}개 완료 · ${c.all-c.done}개 남음`;$('#ringText').innerHTML=`${percent}<small>%</small>`;$('#ring').style.setProperty('--p',`${percent*3.6}deg`);$('#todoCount').textContent=c.todo;$('#doingCount').textContent=c.progress;$('#doneCount').textContent=c.done;[...$('#filters').children].forEach((b,i)=>{b.querySelector('span').textContent=[c.all,c.todo,c.progress,c.done][i]});const visible=tasks.filter(t=>(filter==='all'||t.status===filter)&&`${t.title} ${t.project}`.toLowerCase().includes(query.toLowerCase()));$('#tasks').innerHTML=visible.length?visible.map(t=>`<article class="task ${t.status==='done'?'done':''}" data-id="${t.id}"><button class="check" aria-label="완료 처리">${t.status==='done'?'✓':''}</button><div class="task-main"><div class="title-row"><h3>${escapeHtml(t.title)}</h3><span class="priority ${t.priority}">${priorityLabel[t.priority]}</span></div><p>${escapeHtml(t.note||'메모가 없습니다.')}</p><div class="meta"><span>▣ ${escapeHtml(t.project)}</span><span>◷ ${escapeHtml(t.due)}</span></div></div><select class="status ${t.status}" aria-label="업무 상태"><option value="todo" ${t.status==='todo'?'selected':''}>할 일</option><option value="progress" ${t.status==='progress'?'selected':''}>진행 중</option><option value="done" ${t.status==='done'?'selected':''}>완료</option></select><button class="remove" aria-label="업무 삭제">×</button></article>`).join(''):'<div class="empty"><b>✓</b><h3>조건에 맞는 업무가 없어요</h3><p>새 업무를 추가하거나 필터를 바꿔보세요.</p></div>';save()}
function openModal(id){$(`#${id}`).classList.remove('hidden');if(id==='reportModal')$('#reportText').value=makeReport()}
function closeModal(id){$(`#${id}`).classList.add('hidden')}
function notify(msg){const t=$('#toast');t.textContent=`✓ ${msg}`;t.classList.remove('hidden');setTimeout(()=>t.classList.add('hidden'),2200)}
function makeReport(){const list=s=>{const a=tasks.filter(t=>t.status===s);return a.length?a.map(t=>`• ${t.title} (${t.project})`).join('\n'):'• 해당 없음'};const c=counts(),p=c.all?Math.round(c.done/c.all*100):0;return `[업무보고] ${new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric',weekday:'short'}).format(new Date())}\n\n1. 완료 업무\n${list('done')}\n\n2. 진행 중 업무\n${list('progress')}\n\n3. 예정 업무\n${list('todo')}\n\n4. 진행률\n전체 ${c.all}건 중 ${c.done}건 완료 (${p}%)`}
$('#addButton').onclick=()=>openModal('addModal');$('#reportButton').onclick=$('#navReport').onclick=()=>openModal('reportModal');document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));document.querySelectorAll('.backdrop').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));
$('#search').oninput=e=>{query=e.target.value;render()};$('#filters').onclick=e=>{const b=e.target.closest('button');if(!b)return;filter=b.dataset.filter;[...$('#filters').children].forEach(x=>x.classList.toggle('selected',x===b));render()};
$('#tasks').onclick=e=>{const card=e.target.closest('.task');if(!card)return;const id=Number(card.dataset.id);if(e.target.closest('.check'))tasks=tasks.map(t=>t.id===id?{...t,status:t.status==='done'?'todo':'done'}:t);if(e.target.closest('.remove'))tasks=tasks.filter(t=>t.id!==id);render()};
$('#tasks').onchange=e=>{if(!e.target.matches('.status'))return;const card=e.target.closest('.task'),id=Number(card.dataset.id);tasks=tasks.map(t=>t.id===id?{...t,status:e.target.value}:t);render()};
$('#taskForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);tasks.unshift({id:Date.now(),title:f.get('title'),project:f.get('project')||'일반',due:f.get('due')||'일정 없음',note:f.get('note')||'',priority:f.get('priority'),status:'todo'});e.target.reset();closeModal('addModal');notify('새 업무를 추가했어요');render()};
$('#copyReport').onclick=async()=>{await navigator.clipboard.writeText($('#reportText').value);notify('보고서를 복사했어요')};
render();

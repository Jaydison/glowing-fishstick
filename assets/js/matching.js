const inBand=(time,band)=>band==='Morning'?time<'12:00':band==='Afternoon'?time>='12:00'&&time<'18:00':time>='18:00';
const cap=(c,en)=>c.capacity-en.filter(x=>x.classroomId===c.id&&x.status==='active').length;
export function recommend(state,orgId,p){
 const out=[];
 state.classrooms.filter(c=>c.orgId===orgId&&c.status==='open'&&c.subject===p.subject&&cap(c,state.enrolments)>0&&c.mode===p.mode).forEach(c=>{
  const tutor=state.tutors.find(t=>t.id===c.tutorId&&t.status==='active'); if(!tutor)return;
  let score=25,reasons=['Correct subject','Registration open','Capacity available'],diff=[];
  if(c.level===p.level){score+=20;reasons.push('Level matches')}else diff.push('Different level');
  if(c.topic===p.topic){score+=15;reasons.push('Topic matches')}else diff.push('Different topic');
  if(c.day===p.day&&inBand(c.start,p.timeBand)){score+=15;reasons.push('Preferred schedule')}else diff.push('Different schedule');
  score+=10;reasons.push(c.mode+' mode');
  if(c.arrangement===p.arrangement){score+=10;reasons.push('Preferred arrangement')}else diff.push('Different arrangement');
  if(c.branch===p.branch){score+=5;reasons.push('Preferred branch')}else diff.push('Different branch');
  out.push({type:'classroom',id:c.id,title:c.title,score,label:score>=85?'Best Match':score>=70?'Good Match':'Possible Alternative',reasons,differences:diff,capacity:cap(c,state.enrolments),approval:c.approval});
 });
 if(p.arrangement!=='Group') state.tutors.filter(t=>t.orgId===orgId&&t.status==='active'&&t.modes.includes(p.mode)).forEach(t=>{
  const exp=state.expertise.find(e=>e.tutorId===t.id&&e.subject===p.subject); if(!exp)return;
  const av=state.availability.find(a=>a.tutorId===t.id&&a.day===p.day); if(!av)return;
  let score=50,reasons=['Correct subject','Tutor active',p.mode+' supported'],diff=[];
  if(exp.level===p.level){score+=20;reasons.push('Level matches')}else diff.push('Different level');
  if(exp.topic===p.topic){score+=15;reasons.push('Topic matches')}else diff.push('Different topic');
  if(inBand(av.start,p.timeBand)){score+=10;reasons.push('Preferred time band')}else diff.push('Different time band');
  if(t.branch===p.branch||p.mode==='Online'){score+=5;reasons.push('Location compatible')}else diff.push('Different branch');
  out.push({type:'tutor',id:t.id,title:state.users.find(u=>u.id===t.userId)?.name||'Tutor',score,label:score>=85?'Best Match':score>=70?'Good Match':'Possible Alternative',reasons,differences:diff,capacity:1,approval:'Administrator approval'});
 });
 return out.sort((a,b)=>{const pref=p.arrangement==='Group'?'classroom':p.arrangement==='One-to-one'?'tutor':'';return (b.type===pref)-(a.type===pref)||b.score-a.score});
}
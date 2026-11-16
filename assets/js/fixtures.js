export const seed={
meta:{version:1,seededAt:'2026-11-17T00:00:00+08:00'},
organisations:[
{id:'org-abc',name:'ABC Tuition Centre',slug:'abc-tuition',code:'ABC-2048',type:'Tuition centre',status:'active',location:'Ayer Keroh, Melaka',contact:'hello@abc.example',modes:['Physical','Online'],intro:'Focused academic support for primary and secondary learners.'},
{id:'org-daniel',name:'Daniel Mathematics Tutoring',slug:'daniel-maths',code:'DMT-1188',type:'Independent tutor',status:'active',location:'Online, Malaysia',contact:'daniel@tutor.example',modes:['Online'],intro:'One-to-one mathematics support.'},
{id:'org-library',name:'Melaka Community Library',slug:'melaka-library',code:'MCL-3321',type:'Library',status:'pending',location:'Melaka',contact:'learn@library.example',modes:['Physical'],intro:'Community workshops and digital skills sessions.'}],
users:[
{id:'u-platform',name:'Aina Rahman',email:'platform@tutorbit.example',status:'active'},
{id:'u-admin',name:'Nur Aisyah',email:'admin@abc.example',status:'active'},
{id:'u-daniel',name:'Daniel Tan',email:'daniel@tutor.example',status:'active'},
{id:'u-tutor',name:'Ahmad Faiz',email:'ahmad@abc.example',status:'active'},
{id:'u-guardian',name:'Siti Rahmah',email:'siti@example.test',status:'active'},
{id:'u-pending',name:'Farah Lee',email:'farah@library.example',status:'active'}],
memberships:[
{id:'m1',userId:'u-platform',orgId:null,roles:['platform_admin'],status:'active'},
{id:'m2',userId:'u-admin',orgId:'org-abc',roles:['organisation_admin'],status:'active'},
{id:'m3',userId:'u-daniel',orgId:'org-daniel',roles:['organisation_admin','tutor'],status:'active'},
{id:'m4',userId:'u-tutor',orgId:'org-abc',roles:['tutor'],status:'active'},
{id:'m5',userId:'u-guardian',orgId:'org-abc',roles:['guardian'],status:'active'},
{id:'m6',userId:'u-pending',orgId:'org-library',roles:['organisation_admin'],status:'pending'}],
learners:[{id:'l-amir',guardianUserId:'u-guardian',orgId:'org-abc',name:'Amir Hakim',level:'Form 4'},{id:'l-aina',guardianUserId:'u-guardian',orgId:'org-abc',name:'Aina Hakim',level:'Year 5'}],
tutors:[
{id:'t-ahmad',userId:'u-tutor',orgId:'org-abc',status:'active',bio:'Mathematics tutor specialising in secondary algebra.',modes:['Physical','Online'],branch:'Ayer Keroh'},
{id:'t-daniel',userId:'u-daniel',orgId:'org-daniel',status:'active',bio:'Independent mathematics tutor.',modes:['Online'],branch:'Online'}],
expertise:[{id:'e1',tutorId:'t-ahmad',subject:'Mathematics',topic:'Algebra',level:'Form 4'},{id:'e2',tutorId:'t-ahmad',subject:'Mathematics',topic:'Trigonometry',level:'Form 4'},{id:'e3',tutorId:'t-daniel',subject:'Mathematics',topic:'Algebra',level:'Form 4'}],
availability:[{id:'a1',tutorId:'t-ahmad',day:'Saturday',start:'14:00',end:'17:00'},{id:'a2',tutorId:'t-daniel',day:'Saturday',start:'10:00',end:'15:00'}],
unavailability:[{id:'ua1',tutorId:'t-ahmad',date:'2026-11-28',start:'14:00',end:'17:00'}],
classrooms:[
{id:'c1',orgId:'org-abc',title:'Form 4 Mathematics Group B',subject:'Mathematics',topic:'Algebra',level:'Form 4',tutorId:'t-ahmad',arrangement:'Group',mode:'Physical',branch:'Ayer Keroh',day:'Saturday',start:'14:00',end:'16:00',capacity:6,access:'Account required',approval:'Administrator approval',attendanceMethod:'QR-assisted',status:'open'},
{id:'c2',orgId:'org-abc',title:'Form 4 Mathematics Online',subject:'Mathematics',topic:'Trigonometry',level:'Form 4',tutorId:'t-ahmad',arrangement:'Group',mode:'Online',branch:'Online',day:'Saturday',start:'16:00',end:'17:00',capacity:8,access:'Account required',approval:'Automatic',attendanceMethod:'Manual',status:'open'},
{id:'c3',orgId:'org-daniel',title:'Algebra One-to-One',subject:'Mathematics',topic:'Algebra',level:'Form 4',tutorId:'t-daniel',arrangement:'One-to-one',mode:'Online',branch:'Online',day:'Saturday',start:'10:00',end:'11:00',capacity:1,access:'Account required',approval:'Administrator approval',attendanceMethod:'Manual',status:'open'}],
enrolments:[{id:'en1',classroomId:'c1',learnerId:'l-amir',status:'active'},{id:'en2',classroomId:'c1',learnerId:'l-aina',status:'active'}],
requests:[{id:'r1',orgId:'org-abc',learnerId:'l-amir',subject:'Mathematics',topic:'Algebra',level:'Form 4',day:'Saturday',timeBand:'Afternoon',mode:'Physical',branch:'Ayer Keroh',arrangement:'Group',earliestStart:'2026-11-21',selectedType:'classroom',selectedId:'c1',status:'pending_approval',createdAt:'2026-11-16T10:00:00+08:00'}],
sessions:[
{id:'s1',orgId:'org-abc',classroomId:'c1',topic:'Algebra Basics',date:'2026-11-21',start:'14:00',end:'16:00',status:'scheduled',checkInOpen:false},
{id:'s2',orgId:'org-abc',classroomId:'c1',topic:'Linear Equations',date:'2026-11-14',start:'14:00',end:'16:00',status:'completed',checkInOpen:false}],
attendance:[{id:'at1',sessionId:'s2',learnerId:'l-amir',status:'present',verifiedBy:'u-tutor'},{id:'at2',sessionId:'s2',learnerId:'l-aina',status:'late',verifiedBy:'u-tutor'}],
feedback:[{id:'f1',orgId:'org-abc',sessionId:'s2',learnerId:'l-amir',tutorId:'t-ahmad',need:5,clarity:4,organisation:5,attendAgain:true,comment:'The worked examples were useful.',createdAt:'2026-11-14'}],
notifications:[{id:'n1',userId:'u-admin',type:'matching_request',message:'A new matching request is awaiting review.',read:false,createdAt:'2026-11-16'}],
applications:[{id:'app1',orgId:'org-library',userId:'u-pending',status:'under_review',submittedAt:'2026-11-15',notes:''}],
invitations:[{id:'i1',orgId:'org-abc',email:'newtutor@example.test',roles:['tutor'],status:'pending',token:'QA-INVITE-101'}],
emails:[{id:'mail1',to:'farah@library.example',subject:'TutorBit application received',body:'Your application is under review.',status:'simulated',createdAt:'2026-11-15'}],
audit:[{id:'au1',actorId:'u-platform',orgId:'org-abc',action:'ORGANISATION_APPROVED',createdAt:'2026-11-01T09:00:00+08:00'}]
};
export const profiles=[
{id:'u-platform',label:'Platform Administrator'},
{id:'u-pending',label:'Pending Applicant'},
{id:'u-admin',label:'Organisation Administrator'},
{id:'u-daniel',label:'Independent Tutor (Admin + Tutor)'},
{id:'u-tutor',label:'Tutor'},
{id:'u-guardian',label:'Guardian'}];
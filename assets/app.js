const menuButton=document.querySelector('.menubtn');
const navigation=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  menuButton.setAttribute('aria-expanded',String(open));
  navigation.classList.toggle('open',open);
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&navigation.classList.contains('open')){
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.focus();
  }
});
document.querySelectorAll('.copy').forEach(button=>button.addEventListener('click',async()=>{
  const text=button.closest('.codeblock').querySelector('code').textContent;
  try{
    if(navigator.clipboard&&window.isSecureContext) await navigator.clipboard.writeText(text);
    else{
      const field=document.createElement('textarea');
      field.value=text;
      field.style.position='fixed';
      field.style.opacity='0';
      document.body.append(field);
      field.select();
      const copied=document.execCommand('copy');
      field.remove();
      if(!copied) throw new Error('No disponible');
    }
    button.textContent='Copiado';
  }catch{button.textContent='Selecciona el código';}
  setTimeout(()=>button.textContent='Copiar',2000);
}));
const sabores=['Jamaica','Limón','Tamarindo'];
let indice=0;
function cambiarSabor(){
  indice=(indice+1)%sabores.length;
  document.querySelector('#saborDemo').textContent=sabores[indice];
}
document.querySelector('#cambiar')?.addEventListener('click',cambiarSabor);
if(document.querySelector('#fadeBtn')){
  if(window.jQuery){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) $.fx.off=true;
    $('#fadeBtn').on('click',()=>$('#fadePanel').stop(true,true).fadeIn(400));
    $('#fadeReset').on('click',()=>$('#fadePanel').stop(true,true).hide());
    $('#slideBtn').on('click',function(){
      const expanded=this.getAttribute('aria-expanded')!=='true';
      this.setAttribute('aria-expanded',String(expanded));
      $('#slidePanel').stop(true,true).slideToggle(400);
    });
  }else{
    const notice=document.createElement('p');
    notice.className='error';
    notice.textContent='No se pudo cargar jQuery. Revisa assets/vendor/jquery-4.0.0.min.js.';
    document.querySelector('#fadeBtn').before(notice);
  }
}
document.querySelector('#parseBtn')?.addEventListener('click',()=>{
  const output=document.querySelector('#jsonResult');
  try{
    const data=JSON.parse(document.querySelector('#jsonEditor').value);
    if(!data||Array.isArray(data)||typeof data!=='object'||!['nombre','parece','sabe'].every(key=>typeof data[key]==='string'&&data[key].trim())){
      output.textContent='JSON válido, pero este ejemplo necesita un objeto con nombre, parece y sabe como textos no vacíos.';
      output.className='error';
      return;
    }
    output.textContent=`JSON válido. Es de ${data.nombre}, parece de ${data.parece} y sabe a ${data.sabe}.`;
    output.className='success';
  }catch{
    output.textContent='JSON inválido. Revisa las comillas dobles, las llaves y las comas; no se admiten comas finales.';
    output.className='error';
  }
});
document.querySelector('#loadJson')?.addEventListener('click',async function(){
  const output=document.querySelector('#catalogResult');
  this.disabled=true;
  output.textContent='Cargando catálogo…';
  try{
    const response=await fetch('assets/bebidas.json');
    if(!response.ok) throw new Error('HTTP');
    const data=await response.json();
    output.replaceChildren();
    data.forEach(drink=>{
      const item=document.createElement('p');
      item.className='catalogitem';
      item.textContent=`${drink.nombre}: ${drink.descripcion}`;
      output.append(item);
    });
  }catch{output.textContent='No se pudo cargar el catálogo. Ejecuta el sitio con Live Server o un servidor HTTP local.';}
  finally{this.disabled=false;}
});
const dnsSteps=['Paso 1: se cambia el registro en el proveedor DNS.','Paso 2: algunas redes todavía conservan la respuesta anterior en caché.','Paso 3: vence el TTL y el resolvedor necesita consultar de nuevo.','Paso 4: el resolvedor obtiene el registro actualizado. Otras redes pueden estar en un paso diferente.'];
let dnsStep=0;
document.querySelector('#dnsNext')?.addEventListener('click',()=>{
  dnsStep=(dnsStep+1)%dnsSteps.length;
  document.querySelector('#dnsText').textContent=dnsSteps[dnsStep];
});
document.querySelector('#dnsReset')?.addEventListener('click',()=>{
  dnsStep=0;
  document.querySelector('#dnsText').textContent=dnsSteps[0];
});
const quizAnswers=[
  {correcta:0,explicacion:'HTML organiza el contenido; CSS aplica estilo y JavaScript aporta comportamiento.',pagina:'javascript.html'},
  {correcta:1,explicacion:'let permite reasignar. const impide reasignar la referencia.',pagina:'javascript.html'},
  {correcta:1,explicacion:'mouseenter es un evento nativo. Hover describe una interacción y :hover es una pseudoclase CSS.',pagina:'javascript.html'},
  {correcta:1,explicacion:'jQuery es una librería escrita en JavaScript.',pagina:'jquery.html'},
  {correcta:0,explicacion:'slideToggle() abre o cierra un elemento con un efecto de deslizamiento.',pagina:'jquery.html'},
  {correcta:1,explicacion:'JSON.stringify() produce texto JSON; JSON.parse() interpreta el texto.',pagina:'json.html'},
  {correcta:0,explicacion:'JSON exige comillas dobles en claves y cadenas, y no permite comas finales.',pagina:'json.html'},
  {correcta:1,explicacion:'El web hosting aloja y sirve los archivos o aplicaciones.',pagina:'hosting.html'},
  {correcta:2,explicacion:'aprende es el subdominio; .com es el TLD y awasfreskas.com es el dominio.',pagina:'hosting.html'},
  {correcta:0,explicacion:'Los resolvedores pueden conservar registros anteriores hasta que vence el TTL de la caché.',pagina:'hosting.html'}
];
const quizForm=document.querySelector('#quizForm');
if(quizForm){
  const result=document.querySelector('#quizResult');
  const notice=document.querySelector('#quizNotice');
  function clearReview(){
    result.hidden=true;
    quizForm.querySelectorAll('.option').forEach(label=>label.classList.remove('correct','incorrect'));
    quizForm.querySelectorAll('.feedback').forEach(item=>{item.hidden=true;item.replaceChildren();});
  }
  quizForm.addEventListener('change',()=>{
    clearReview();
    notice.textContent='';
    const count=quizForm.querySelectorAll('input:checked').length;
    document.querySelector('#quizProgress').value=count;
    document.querySelector('#progressText').textContent=`${count} de 10 respondidas`;
  });
  quizForm.addEventListener('submit',event=>{
    event.preventDefault();
    clearReview();
    const missing=quizAnswers.findIndex((_,i)=>!quizForm.querySelector(`input[name="q${i}"]:checked`));
    if(missing!==-1){
      notice.textContent='Responde las 10 preguntas antes de revisar. Falta la pregunta '+(missing+1)+'.';
      document.querySelector(`#q${missing} input`).focus();
      return;
    }
    notice.textContent='';
    let score=0;
    quizAnswers.forEach((answer,i)=>{
      const field=document.querySelector(`#q${i}`);
      const selected=field.querySelector('input:checked');
      const correct=Number(selected.value)===answer.correcta;
      if(correct) score++;
      const right=field.querySelector(`input[value="${answer.correcta}"]`);
      right.closest('label').classList.add('correct');
      if(!correct) selected.closest('label').classList.add('incorrect');
      const feedback=field.querySelector('.feedback');
      const heading=document.createElement('strong');
      heading.textContent=correct?'Correcto.':'Respuesta incorrecta. Correcta: '+right.nextElementSibling.textContent;
      const explanation=document.createElement('p');
      explanation.textContent=answer.explicacion;
      const link=document.createElement('a');
      link.href=answer.pagina;
      link.textContent='Repasar este tema';
      feedback.replaceChildren(heading,explanation,link);
      feedback.hidden=false;
    });
    result.innerHTML=`<div class="eyebrow" style="color:white">TU RESULTADO</div><h2>${score} / 10 · ${score*10}%</h2><p>${score===10?'¡Todo correcto! Puedes volver a intentarlo cuando quieras.':score>=7?'Buen avance. Revisa las explicaciones para reforzar lo que falta.':'Sigue practicando. Abre los enlaces de repaso y vuelve a intentarlo.'}</p>`;
    result.hidden=false;
    result.focus();
    result.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
  });
  document.querySelector('#quizReset').addEventListener('click',()=>{
    quizForm.reset();
    clearReview();
    notice.textContent='';
    document.querySelector('#quizProgress').value=0;
    document.querySelector('#progressText').textContent='0 de 10 respondidas';
    quizForm.querySelector('input').focus();
  });
}

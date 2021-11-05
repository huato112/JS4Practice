//1. query target node
const okBtn = document.querySelector('#submitOK');
const divBtn = document.querySelector('#divButtonPanel');

//2. register event handler to target node
okBtn.addEventListener('click', showMessage);
divBtn.addEventListener('click', (e) => {
  alert(`div click!!
    event target: ${e.target}
    event current target: ${e.currentTarget}
    event phase: ${e.eventPhase}
    event type: ${e.type}`);
});

// okBtn.onclick = null;
//3. prepare event handler
function showMessage(e) {
  alert(`submit button click!!
    event target id : ${e.target.id}
    event current target: ${e.currentTarget}
    event phase: ${e.eventPhase}
    event type: ${e.type}`);
}
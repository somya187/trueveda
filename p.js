
const modeBtn = document.getElementById('modeBtn');

if (modeBtn) {
    modeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        modeBtn.textContent = isDark ? '☀️' : '🌙';
        modeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
}
let p = document.getElementsByClassName('doc-grid-ele')
let arr = ["Cardiology is the branch of medicine that deals with the diagnosis and treatment of heart and blood vessel diseases","Neurology & Neurosurgery deal with the diagnosis and treatment of disorders of the brain, spinal cord, and nervous system, with neurosurgery handling cases that require surgery.","Orthopedics is the medical specialty that focuses on diagnosing and treating disorders of the bones, joints, muscles, ligaments, and spine.","Pediatrics & NICU focus on the medical care of infants, newborns, and children, with the NICU providing specialized care for critically ill newborns."]
for(let i=0;i<p.length;i++){
    p[i].addEventListener('mouseenter',function(){
        let p1 = document.getElementById('expert')
        p1.innerText = arr[i]
    })
}

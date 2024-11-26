exp = document.getElementById("exp");
para = document.getElementById("para");
about  = document.getElementById("about");
intro = document.getElementById ("intro");
skills = document.getElementById ("skills");
award = document.getElementById ("aw");
ame = document.getElementById("ame");   

exp.addEventListener('click', function () {
    
})
exp.addEventListener('click',function () {
    ame.textContent = "Experience:-"
    para.textContent = "With three years of experience across various fields, I specialize as a Full-Cycle Recruiter and Talent-Acquisition Specialist, guiding candidates through every step of the hiring process. I am an Interview-Preparation Expert and Job-Application Assistant, dedicated to helping job seekers craft impactful, ATS-friendly resumes and compelling cover letters.<br> I also provide support in International Scholarship Applications, Research Paper and Thesis Writing, and LinkedIn outreach. As a Reverse Recruiter, I use strategic networking to connect talent with opportunities, all while continuously refining my skills to stay at the forefront of industry trends."
})
exp.addEventListener("click", function () {
    intro.style.display = "none"
} )

about.addEventListener('click',function () {
    ame.textContent = "About Me:-"
    para.textContent = " Hello! I'm Sarmad, a versatile professional skilled in full-cycle recruitment, talent acquisition, and job application assistance. I specialize in ATS-friendly resumes, interview preparation, and crafting impactful cover letters. I also guide candidates through scholarship applications and research writing. As a LinkedIn Outreach Expert and Reverse Recruiter, I connect talent with opportunities globally, blending creativity with precision."
    intro.style.display = "block"
})
skills.addEventListener('click', function () {
    ame.textContent = "My Skills:-"
    para.innerHTML = `
    
    <ul class="list-disc pl-6 space-y-2 text-gray-700 sm:text-base md:text-lg lg:text-xl">
        <li class="text-2xl font-medium text-yellow-900">Full-Cycle Recruiter</li>
        <li class="text-2xl font-medium text-yellow-900">Talent-Acquisition Specialist</li>
        <li class="text-2xl font-medium text-yellow-900">Interview-Preparation Expert</li>
        <li class="text-2xl font-medium text-yellow-900">Job-Application Assistant</li>
        <li class="text-2xl font-medium text-yellow-900">International Scholarship Application Specialist</li>
        <li class="text-2xl font-medium text-yellow-900">Research Paper and Thesis Writer</li>
        <li class="text-2xl font-medium text-yellow-900">Coverletter Writer</li>
        <li class="text-2xl font-medium text-yellow-900">ATS-Friendly Resume Writer</li>
        <li class="text-2xl font-medium text-yellow-900">LinkedIn Outreach Expert</li>
        <li class="text-2xl font-medium text-yellow-900">Reverse Recruiter</li>
    </ul>
`
intro.style.display = "none"
;
})
function sendEmail() {
    window.location.href = "mailto:sarmadshabbir2003@gmail.com";
}
// const menuButton = document.getElementById('menu-button');
// const menu = document.querySelector('ul');

// menuButton.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// }); 
// JavaScript to toggle the mobile menu
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
function toggleServices() {
    const dropdown = document.getElementById('servicesDropdown');
    dropdown.classList.toggle('hidden');
}  

AOS.init({
    duration: 700, // Animation duration in ms
    once: true,    // Animation happens only once - when scrolling down
  });
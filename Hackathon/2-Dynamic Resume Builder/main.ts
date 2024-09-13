document.getElementById('generate-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const profilePicInput = (document.getElementById('profile-pic') as HTMLInputElement);
    const profilePicURL = profilePicInput.files && profilePicInput.files[0]
        ? URL.createObjectURL(profilePicInput.files[0])
        : "folder/default.user.jpg"

    if (!name || !email || !phone) {
        alert('Please fill in the required fields: Name, Email, Phone, & Profile Picture.');
        return;
    }

    if (!education || !skills || !workExperience) {
        alert('Please fill in the required fields: Education, Skills, & Work Experience.');
        return;
    }

    const resumeContent = `
        <header>
            <h1>${name}</h1>
            <img src= ${profilePicURL} alt="Profile Picture">
        </header>
        <div class="personal-header">Personal Information</div>
        <section id="personal-sec">
            <span><strong>Email:</strong> ${email}</span><br>
            <span><strong>Phone:</strong> ${phone}</span><br>
            <span><strong>Address:</strong> ${address}</span><br>
            <span><strong>Date of Birth:</strong> ${dob}</span><br>
        </section>
        <div class="section-header"><span>Education</span>
            <button id="toggle-education">Toggle</button>
        </div>
        <section id="education-section">
            <p>${education.replace(/\n/g, '<br>')}</p>
        </section>
        <div class="section-header"><span>Skills</span>
            <button id="toggle-skills">Toggle</button>
        </div>
        <section id="skills-section">
            <p>${skills.replace(/\n/g, '<br>')}</p>
        </section>
        <div class="section-header"><span>Work Experience</span>
            <button id="toggle-experience">Toggle</button>
        </div>
        <section id="work-relevant-experience">
            <p>${workExperience.replace(/\n/g, '<br>')}</p>
        </section>
    `;

    const generatedResume = document.getElementById('generated-resume');
    if (generatedResume) {
        generatedResume.innerHTML = resumeContent;

        const toggleEducationButton = document.getElementById('toggle-education');
        const toggleSkillsButton = document.getElementById('toggle-skills');
        const toggleExperienceButton = document.getElementById('toggle-experience');
        const educationSection = document.getElementById('education-section');
        const skillsSection = document.getElementById('skills-section');
        const experienceSection = document.getElementById('work-relevant-experience');

        if (toggleEducationButton && educationSection) {
            toggleEducationButton.addEventListener('click', () => {
                educationSection.style.display = (educationSection.style.display === 'none') ? 'block' : 'none';
            });
        }

        if (toggleSkillsButton && skillsSection) {
            toggleSkillsButton.addEventListener('click', () => {
                skillsSection.style.display = (skillsSection.style.display === 'none') ? 'block' : 'none';
            });
        }

        if (toggleExperienceButton && experienceSection) {
            toggleExperienceButton.addEventListener('click', () => {
                experienceSection.style.display = (experienceSection.style.display === 'none') ? 'block' : 'none';
            });
        }
    }
})
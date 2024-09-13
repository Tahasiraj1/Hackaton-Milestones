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

    const username = name.toLowerCase().replace(/\s+/g, '-');
    const uniqueURL = `https://resumebuilderbytaha.com/resume/${username}`;

    const resumeContent = `
        <html>
            <head>
                <title>Resume PDF</title>
                <style>
                    header {
                        text-align: center;
                    }
                    header img {
                        width: 180px;
                        height: auto;
                        border-radius: 50%;
                    }
                    .personal-header, .section-header {
                        color: #dddddd;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                        font-size: x-large;
                        border-radius: 30px;
                        background-color: #424141;
                        margin: 20px 20px;
                        padding: 10px 20px;
                    }
                    section {
                        display: block;
                        margin: 20px 20px;
                        padding: 10px 20px;
                        font-size: 16px;
                        background-color: #ffffff;
                        border: 1px solid #dddddd;
                        border-radius: 20px;
                        cursor: text;
                        box-shadow: 0px 4px 8px rgba(8, 0, 0, 0.5);
                    }
                    #toggle-education, #toggle-skills, #toggle-experience {
                        width: auto;
                        background-color: #040608;
                        color: #fff;
                        border: none;
                        border-radius: 30px;
                        padding: 10px 20px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    #toggle-education:hover, #toggle-skills:hover, #toggle-experience:hover {
                        background-color: #141b22;
                    }
                    #education ul li,
                    #work-relevant-experience ul li {
                        padding-bottom: 10px;
                    }
                    #personal-sec span {
                        display: inline-block;
                        padding-bottom: 10px;
                    }
                    @media (max-width: 768px) {
                        body {
                            padding: 10px;
                        }
                        header img {
                            width: 100px;
                        }
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>${name}</h1>
                    <img src="${profilePicURL}" alt="Profile Picture">
                </header>
                <div class="personal-header">Personal Information</div>
                <section id="personal-sec">
                    <span contenteditable="true" data-field="email"><strong>Email:</strong> ${email}</span><br>
                    <span contenteditable="true" data-field="phone"><strong>Phone:</strong> ${phone}</span><br>
                    <span contenteditable="true" data-field="address"><strong>Address:</strong> ${address}</span><br>
                    <span contenteditable="true" data-field="dob"><strong>Date of Birth:</strong> ${dob}</span><br>
                </section>
                <div class="section-header"><span>Education</span>
                    <button id="toggle-education">Toggle</button>
                </div>
                <section id="education-section" contenteditable="true" data-field="education">
                    <p>${education.replace(/\n/g, '<br>')}</p>
                </section>
                <div class="section-header"><span>Skills</span>
                    <button id="toggle-skills">Toggle</button>
                </div>
                <section id="skills-section" contenteditable="true" data-field="skills">
                    <p>${skills.replace(/\n/g, '<br>')}</p>
                </section>
                <div class="section-header"><span>Work Experience</span>
                    <button id="toggle-experience">Toggle</button>
                </div>
                <section id="work-relevant-experience" contenteditable="true" data-field="workExperience">
                    <p>${workExperience.replace(/\n/g, '<br>')}</p>
                </section>
            </body>
        </html>
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

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download as PDF';
        downloadButton.id = 'download-button';
        downloadButton.onclick = () => {
            const resumeWindow = window.open('', '', 'width=800,height=600');
            if (resumeWindow) {
                resumeWindow.document.write(resumeContent);
                resumeWindow.document.close();
                resumeWindow.print();
            }
        }
        generatedResume.appendChild(downloadButton);
    
        const copyLinkButton = document.createElement('button');
        copyLinkButton.textContent = 'Copy Shareable Link';
        copyLinkButton.id = 'copy-link-button';
        copyLinkButton.onclick = () => {
            navigator.clipboard.writeText(uniqueURL);
            alert('Link copied to clipboard!');
        };
        generatedResume.appendChild(copyLinkButton);
    }


    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach((element) => {
        const field = element.getAttribute('data-field');

        if (field) {
            element.addEventListener('input', () => {
                const formElement = document.querySelector(`[name="${field}]`) as HTMLInputElement | HTMLTextAreaElement;

                if (formElement) {
                    formElement.value = element.textContent || '';
                }
            })
        }
    });
});
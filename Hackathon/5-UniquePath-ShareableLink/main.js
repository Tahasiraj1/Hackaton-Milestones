var _a;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var dob = document.getElementById('dob').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var profilePicInput = document.getElementById('profile-pic');
    var profilePicURL = profilePicInput.files && profilePicInput.files[0]
        ? URL.createObjectURL(profilePicInput.files[0])
        : "folder/default.user.jpg";
    if (!name || !email || !phone) {
        alert('Please fill in the required fields: Name, Email, Phone, & Profile Picture.');
        return;
    }
    if (!education || !skills || !workExperience) {
        alert('Please fill in the required fields: Education, Skills, & Work Experience.');
        return;
    }
    var username = name.toLowerCase().replace(/\s+/g, '-');
    var uniqueURL = "https://resumebuilderbytaha.com/resume/".concat(username);
    var resumeContent = "\n        <html>\n            <head>\n                <title>Resume PDF</title>\n                <style>\n                    header {\n                        text-align: center;\n                    }\n                    header img {\n                        width: 180px;\n                        height: auto;\n                        border-radius: 50%;\n                    }\n                    .personal-header, .section-header {\n                        color: #dddddd;\n                        display: flex;\n                        justify-content: space-between;\n                        align-items: center;\n                        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n                        font-size: x-large;\n                        border-radius: 30px;\n                        background-color: #424141;\n                        margin: 20px 20px;\n                        padding: 10px 20px;\n                    }\n                    section {\n                        display: block;\n                        margin: 20px 20px;\n                        padding: 10px 20px;\n                        font-size: 16px;\n                        background-color: #ffffff;\n                        border: 1px solid #dddddd;\n                        border-radius: 20px;\n                        cursor: text;\n                        box-shadow: 0px 4px 8px rgba(8, 0, 0, 0.5);\n                    }\n                    #toggle-education, #toggle-skills, #toggle-experience {\n                        width: auto;\n                        background-color: #040608;\n                        color: #fff;\n                        border: none;\n                        border-radius: 30px;\n                        padding: 10px 20px;\n                        font-size: 16px;\n                        cursor: pointer;\n                        transition: background-color 0.3s ease;\n                    }\n                    #toggle-education:hover, #toggle-skills:hover, #toggle-experience:hover {\n                        background-color: #141b22;\n                    }\n                    #education ul li,\n                    #work-relevant-experience ul li {\n                        padding-bottom: 10px;\n                    }\n                    #personal-sec span {\n                        display: inline-block;\n                        padding-bottom: 10px;\n                    }\n                    @media (max-width: 768px) {\n                        body {\n                            padding: 10px;\n                        }\n                        header img {\n                            width: 100px;\n                        }\n                    }\n                </style>\n            </head>\n            <body>\n                <header>\n                    <h1>".concat(name, "</h1>\n                    <img src=\"").concat(profilePicURL, "\" alt=\"Profile Picture\">\n                </header>\n                <div class=\"personal-header\">Personal Information</div>\n                <section id=\"personal-sec\">\n                    <span contenteditable=\"true\" data-field=\"email\"><strong>Email:</strong> ").concat(email, "</span><br>\n                    <span contenteditable=\"true\" data-field=\"phone\"><strong>Phone:</strong> ").concat(phone, "</span><br>\n                    <span contenteditable=\"true\" data-field=\"address\"><strong>Address:</strong> ").concat(address, "</span><br>\n                    <span contenteditable=\"true\" data-field=\"dob\"><strong>Date of Birth:</strong> ").concat(dob, "</span><br>\n                </section>\n                <div class=\"section-header\"><span>Education</span>\n                    <button id=\"toggle-education\">Toggle</button>\n                </div>\n                <section id=\"education-section\" contenteditable=\"true\" data-field=\"education\">\n                    <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n                </section>\n                <div class=\"section-header\"><span>Skills</span>\n                    <button id=\"toggle-skills\">Toggle</button>\n                </div>\n                <section id=\"skills-section\" contenteditable=\"true\" data-field=\"skills\">\n                    <p>").concat(skills.replace(/\n/g, '<br>'), "</p>\n                </section>\n                <div class=\"section-header\"><span>Work Experience</span>\n                    <button id=\"toggle-experience\">Toggle</button>\n                </div>\n                <section id=\"work-relevant-experience\" contenteditable=\"true\" data-field=\"workExperience\">\n                    <p>").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n                </section>\n            </body>\n        </html>\n    ");
    var generatedResume = document.getElementById('generated-resume');
    if (generatedResume) {
        generatedResume.innerHTML = resumeContent;
        var toggleEducationButton = document.getElementById('toggle-education');
        var toggleSkillsButton = document.getElementById('toggle-skills');
        var toggleExperienceButton = document.getElementById('toggle-experience');
        var educationSection_1 = document.getElementById('education-section');
        var skillsSection_1 = document.getElementById('skills-section');
        var experienceSection_1 = document.getElementById('work-relevant-experience');
        if (toggleEducationButton && educationSection_1) {
            toggleEducationButton.addEventListener('click', function () {
                educationSection_1.style.display = (educationSection_1.style.display === 'none') ? 'block' : 'none';
            });
        }
        if (toggleSkillsButton && skillsSection_1) {
            toggleSkillsButton.addEventListener('click', function () {
                skillsSection_1.style.display = (skillsSection_1.style.display === 'none') ? 'block' : 'none';
            });
        }
        if (toggleExperienceButton && experienceSection_1) {
            toggleExperienceButton.addEventListener('click', function () {
                experienceSection_1.style.display = (experienceSection_1.style.display === 'none') ? 'block' : 'none';
            });
        }
        var downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download as PDF';
        downloadButton.id = 'download-button';
        downloadButton.onclick = function () {
            var resumeWindow = window.open('', '', 'width=800,height=600');
            if (resumeWindow) {
                resumeWindow.document.write(resumeContent);
                resumeWindow.document.close();
                resumeWindow.print();
            }
        };
        generatedResume.appendChild(downloadButton);
        var copyLinkButton = document.createElement('button');
        copyLinkButton.textContent = 'Copy Shareable Link';
        copyLinkButton.id = 'copy-link-button';
        copyLinkButton.onclick = function () {
            navigator.clipboard.writeText(uniqueURL);
            alert('Link copied to clipboard!');
        };
        generatedResume.appendChild(copyLinkButton);
    }
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        var field = element.getAttribute('data-field');
        if (field) {
            element.addEventListener('input', function () {
                var formElement = document.querySelector("[name=\"".concat(field, "]"));
                if (formElement) {
                    formElement.value = element.textContent || '';
                }
            });
        }
    });
});

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
    var resumeContent = "\n        <header>\n            <h1>".concat(name, "</h1>\n            <img src= ").concat(profilePicURL, " alt=\"Profile Picture\">\n        </header>\n        <div class=\"personal-header\">Personal Information</div>\n        <section id=\"personal-sec\">\n            <span><strong>Email:</strong> ").concat(email, "</span><br>\n            <span><strong>Phone:</strong> ").concat(phone, "</span><br>\n            <span><strong>Address:</strong> ").concat(address, "</span><br>\n            <span><strong>Date of Birth:</strong> ").concat(dob, "</span><br>\n        </section>\n        <div class=\"section-header\"><span>Education</span>\n            <button id=\"toggle-education\">Toggle</button>\n        </div>\n        <section id=\"education-section\">\n            <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <div class=\"section-header\"><span>Skills</span>\n            <button id=\"toggle-skills\">Toggle</button>\n        </div>\n        <section id=\"skills-section\">\n            <p>").concat(skills.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <div class=\"section-header\"><span>Work Experience</span>\n            <button id=\"toggle-experience\">Toggle</button>\n        </div>\n        <section id=\"work-relevant-experience\">\n            <p>").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n        </section>\n    ");
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
    }
});

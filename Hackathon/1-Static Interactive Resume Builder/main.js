var toggleEducationButton = document.getElementById('toggle-education');
var educationSection = document.getElementById('education');
if (toggleEducationButton && educationSection) {
    toggleEducationButton === null || toggleEducationButton === void 0 ? void 0 : toggleEducationButton.addEventListener('click', function () {
        if ((educationSection === null || educationSection === void 0 ? void 0 : educationSection.style.display) === 'none') {
            educationSection.style.display = 'block';
        }
        else {
            educationSection.style.display = 'none';
        }
    });
}
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
        if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
var toggleExperienceButton = document.getElementById('toggle-Experience');
var experienceSection = document.getElementById('work-relevant-experience');
if (toggleExperienceButton && experienceSection) {
    toggleExperienceButton.addEventListener('click', function () {
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block';
        }
        else {
            experienceSection.style.display = 'none';
        }
    });
}

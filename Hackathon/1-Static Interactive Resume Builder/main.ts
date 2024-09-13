const toggleEducationButton = document.getElementById('toggle-education');
const educationSection = document.getElementById('education')

if (toggleEducationButton && educationSection) {
    toggleEducationButton?.addEventListener('click', () => {
        if (educationSection?.style.display === 'none') {
            educationSection.style.display = 'block';
        } else {
            educationSection.style.display = 'none';
        }
    });
}

const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton?.addEventListener('click', () => {
        if (skillsSection?.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
}

const toggleExperienceButton = document.getElementById('toggle-Experience');
const experienceSection = document.getElementById('work-relevant-experience');

if (toggleExperienceButton && experienceSection) {
    toggleExperienceButton.addEventListener('click', () => {
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block';
        } else {
            experienceSection.style.display = 'none';
        }
    });
}

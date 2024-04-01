const translation = {
  init: function() {
    const languageOptions = document.getElementById("language_select");
    
    languageOptions.addEventListener('click', translation.updateContent);
  
  },

  loadTranslations: function() {
    return fetch('js/translations.json')
      .then(response => response.json())
      .then(data => data);
  },

  updateContent: async function(event) {

    const htmlElement = document.querySelector('html');
   const buttonLanguage = event.currentTarget;
   
   if (buttonLanguage.textContent === "English") {
     buttonLanguage.textContent = "Français"
     let translations = await translation.loadTranslations();

    htmlElement.lang = "en";
    document.getElementById("about").textContent = translations.en.about;
    document.getElementById("skills_resume").textContent = translations.en.skills_resume
    document.getElementById("portfolio").textContent = translations.en.portfolio;
    document.getElementById("about_dropdown").textContent = translations.en.about;
    document.getElementById("skills_resume_dropdown").textContent = translations.en.skills_resume
    document.getElementById("portfolio_dropdown").textContent = translations.en.portfolio;
    document.getElementById("strong_title").textContent = translations.en.strong_title;
    document.getElementById("section_title").innerHTML = translations.en.section_title;
    document.getElementById("introduction_first_paragraph").innerHTML = translations.en.introduction_first_paragraph;
    document.getElementById("introduction_second_paragraph").innerHTML = translations.en.introduction_second_paragraph;
    document.getElementById("introduction_third_paragraph").innerHTML = translations.en.introduction_third_paragraph;
    document.getElementById("introduction_fourth_paragraph").innerHTML = translations.en.introduction_fourth_paragraph;
    document.getElementById("introduction_fifth_paragraph").innerHTML = translations.en.introduction_fifth_paragraph;
 
    document.getElementById("skills_resume_bloc_title").textContent = translations.en.skills_resume_bloc_title
    document.getElementById("section_skills_paragraph").textContent = translations.en.section_skills_paragraph;
 
    document.getElementById("hard_skills_title").textContent = translations.en.hard_skills_title;
 
    document.getElementById("soft_skills_title").textContent = translations.en.soft_skills_title;
 
    document.getElementById("soft_skills_one").innerHTML = `${translations.en.soft_skills_one}`;
    document.getElementById("soft_skills_two").innerHTML = `${translations.en.soft_skills_two}`;
    document.getElementById("soft_skills_three").innerHTML = `${translations.en.soft_skills_three}`;
    document.getElementById("soft_skills_four").innerHTML = `${translations.en.soft_skills_four}`;
    document.getElementById("soft_skills_five").innerHTML = `${translations.en.soft_skills_five}`;
    document.getElementById("soft_skills_six").innerHTML = `${translations.en.soft_skills_six}`;
    document.getElementById("soft_skills_seven").innerHTML = `${translations.en.soft_skills_seven}`;
    document.getElementById("soft_skills_eight").innerHTML = `${translations.en.soft_skills_eight}`;
    document.getElementById("soft_skills_nine").innerHTML = `${translations.en.soft_skills_nine}`;
    document.getElementById("soft_skills_ten").innerHTML = `${translations.en.soft_skills_ten}`;
 
    document.getElementById("spoken_languages").textContent = translations.en.spoken_languages;
    document.getElementById("french_language").innerHTML = translations.en.french_language;
    document.getElementById("english_language").innerHTML = translations.en.english_language;
   
    document.getElementById("CV_title").textContent = translations.en.CV_title;
    
    document.getElementById("portfolio_section_title").textContent = translations.en.portfolio_section_title;
    document.getElementById("footer_paragraph").innerHTML = translations.en.footer_paragraph

   } else if  (buttonLanguage.textContent === "Français") {
    buttonLanguage.textContent = "English"
    let translations = await translation.loadTranslations();
    htmlElement.lang = "fr";
    document.getElementById("about").textContent = translations.fr.about;
    document.getElementById("skills_resume").textContent = translations.fr.skills_resume
    document.getElementById("portfolio").textContent = translations.fr.portfolio;
    document.getElementById("about_dropdown").textContent = translations.fr.about;
    document.getElementById("skills_resume_dropdown").textContent = translations.fr.skills_resume
    document.getElementById("portfolio_dropdown").textContent = translations.fr.portfolio;
    document.getElementById("strong_title").textContent = translations.fr.strong_title;
    document.getElementById("section_title").innerHTML = translations.fr.section_title;
    document.getElementById("introduction_first_paragraph").innerHTML = translations.fr.introduction_first_paragraph;
    document.getElementById("introduction_second_paragraph").innerHTML = translations.fr.introduction_second_paragraph;
    document.getElementById("introduction_third_paragraph").innerHTML = translations.fr.introduction_third_paragraph;
    document.getElementById("introduction_fourth_paragraph").innerHTML = translations.fr.introduction_fourth_paragraph;
    document.getElementById("introduction_fifth_paragraph").innerHTML = translations.fr.introduction_fifth_paragraph;
 
    document.getElementById("skills_resume_bloc_title").textContent = translations.fr.skills_resume_bloc_title
    document.getElementById("section_skills_paragraph").textContent = translations.fr.section_skills_paragraph;
 
    document.getElementById("hard_skills_title").textContent = translations.fr.hard_skills_title;
 
    document.getElementById("soft_skills_title").textContent = translations.fr.soft_skills_title;
 
    document.getElementById("soft_skills_one").innerHTML = `${translations.fr.soft_skills_one}`;
    document.getElementById("soft_skills_two").innerHTML = `${translations.fr.soft_skills_two}`;
    document.getElementById("soft_skills_three").innerHTML = `${translations.fr.soft_skills_three}`;
    document.getElementById("soft_skills_four").innerHTML = `${translations.fr.soft_skills_four}`;
    document.getElementById("soft_skills_five").innerHTML = `${translations.fr.soft_skills_five}`;
    document.getElementById("soft_skills_six").innerHTML = `${translations.fr.soft_skills_six}`;
    document.getElementById("soft_skills_seven").innerHTML = `${translations.fr.soft_skills_seven}`;
    document.getElementById("soft_skills_eight").innerHTML = `${translations.fr.soft_skills_eight}`;
    document.getElementById("soft_skills_nine").innerHTML = `${translations.fr.soft_skills_nine}`;
    document.getElementById("soft_skills_ten").innerHTML = `${translations.fr.soft_skills_ten}`;
 
    document.getElementById("spoken_languages").textContent = translations.fr.spoken_languages;
    document.getElementById("french_language").innerHTML = translations.fr.french_language;
    document.getElementById("english_language").innerHTML = translations.fr.english_language;
   
    document.getElementById("CV_title").textContent = translations.fr.CV_title;
    
    document.getElementById("portfolio_section_title").textContent = translations.fr.portfolio_section_title;
    document.getElementById("footer_paragraph").innerHTML = translations.fr.footer_paragraph
   }






  }
};

export default translation;

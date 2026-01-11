// Function to show mentor details
function show(mentorId) {
    window.location.href = `mentor-profile.html?id=${mentorId}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const mentorList = document.getElementById('con-mentor');
    
    const mentors = [
        {
            id: 1,
            name: "Ayush Khan",
            title: "Web Developer",
            image: "img/img1.jpeg",
            experience: "10+ years in Software Development",
            education: "Ph.D. in Computer Science",
            skills: ["HTML", "CSS", "JavaScript", "React", "Design Thinking"],

                email: "swayam@example.com",
                phone: "+91 9876543210",
                linkedin: "https://linkedin.com/in/swayam",
                whatsapp: "https://wa.me/919876543210"
            
        },
        {
            id: 2,
            name: "Jane Doe",
            title: "UX Designer",
            image: "img/img2.jpeg",
            experience: "7+ years in UX Design",
            education: "Bachelor in Visual Communication",
            skills: ["Wireframing", "Prototyping", "Design Thinking"],
            
                email: "jane@example.com",
                phone: "+91 9876543211",
                linkedin: "https://linkedin.com/in/jane",
                whatsapp: "https://wa.me/919876543211"
            
        },
        {
            id: 3,
            name: "Rupali Verma",
            title: "Data Scientist",
            image: "img/img3.jpg",
            experience: "8+ years in Data Analytics & Machine Learning",
            education: "Master's in Data Science",
            skills: ["Python", "TensorFlow", "Data Visualization", "SQL"],
            
                email: "rahul@example.com",
                phone: "+91 9876543212",
                linkedin: "https://linkedin.com/in/rahul",
                whatsapp: "https://wa.me/919876543212"
            
        },
        {
            id: 4,
            name: "Apurve Williams",
            title: "Cyber Security Expert",
            image: "img/img4.jpg",
            experience: "12+ years in Cyber Security & Ethical Hacking",
            education: "Certified Ethical Hacker (CEH)",
            skills: ["Penetration Testing", "Network Security", "Cryptography"],
            
                email: "sophia@example.com",
                phone: "+91 9876543213",
                linkedin: "https://linkedin.com/in/sophia",
                whatsapp: "https://wa.me/919876543213"
            
        },
        {
            id: 5,
            name: "Michael Smith",
            title: "Cloud Architect",
            image: "img/img5.jpg",
            experience: "9+ years in Cloud Computing",
            education: "AWS Certified Solutions Architect",
            skills: ["AWS", "Azure", "Google Cloud", "DevOps"],
           
                email: "michael@example.com",
                phone: "+91 9876543214",
                linkedin: "https://linkedin.com/in/michael",
                whatsapp: "https://wa.me/919876543214"
            
        },
        {
            id: 6,
            name: "Nidhi Acharya",
            title: "AI/ML Engineer",
            image: "img/img6.jpeg",
            experience: "6+ years in AI & Deep Learning",
            education: "Ph.D. in Artificial Intelligence",
            skills: ["Deep Learning", "Computer Vision", "NLP"],
          
                email: "emily@example.com",
                phone: "+91 9876543215",
                linkedin: "https://linkedin.com/in/emily",
                whatsapp: "https://wa.me/919876543215"
            
        },
        {
            id: 7,
            name: "Tejas Navale",
            title: "Blockchain Developer",
            image: "img/img7.jpeg",
            experience: "5+ years in Blockchain & Smart Contracts",
            education: "Bachelor in Cryptography",
            skills: ["Ethereum", "Solidity", "DeFi", "Smart Contracts"],
            
                email: "david@example.com",
                phone: "+91 9876543216",
                linkedin: "https://linkedin.com/in/david",
                whatsapp: "https://wa.me/919876543216"
            
        },
        {
            id: 8,
            name: "Swayam Gode",
            title: "Mobile App Developer",
            image: "img/img8.jpeg",
            experience: "7+ years in Android & iOS Development",
            education: "M.Tech in Mobile Computing",
            skills: ["Flutter", "React Native", "Kotlin", "Swift"],
            
                email: "aisha@example.com",
                phone: "+91 9876543217",
                linkedin: "https://linkedin.com/in/aisha",
                whatsapp: "https://wa.me/919876543217"
            
        }
    ];
    
    
    mentors.forEach(mentor => {
        const mentorCard = document.createElement('div');
        mentorCard.classList.add('mentor-card');
        mentorCard.innerHTML = `
            <div class="card-mentor">
                <img src="${mentor.image}" alt="Profile Image" class="profile-image">
                <div class="name">${mentor.name}</div>
                <div class="title">${mentor.title}</div>
                <div class="description">
                    <ul>
                        <li>${mentor.experience}</li>
                        <li>${mentor.education}</li>
                        <li>${mentor.skills.join(', ')}</li>
                    </ul>
                </div>
                <div class="active-men"> 
                        ${mentor.email}<br>
                        ${mentor.phone}<br>
                        ${mentor.linkedin}
                    </div>
            </div>
        `;
        mentorList.appendChild(mentorCard);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".con-mentor");
    const clones = container.innerHTML; // Clone the cards

    // Duplicate the content to create a seamless loop
    container.innerHTML += clones;

    // Pause animation on hover
    container.addEventListener("mouseenter", function () {
        container.style.animationPlayState = "paused";
    });

    container.addEventListener("mouseleave", function () {
        container.style.animationPlayState = "running";
    });
});

// Function to navigate to the professions page
function navigateTo(category) {
    window.location.href = `professions.html?category=${category}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    const categoryTitle = document.getElementById("categoryTitle");
    const showCareer = document.querySelector(".showcareer");

    if (!category) {
        categoryTitle.innerText = "No category selected!";
        return;
    }

    categoryTitle.innerText = `Professions in ${category}`;

    fetch("streamscareer.json") // Make sure this file exists
        .then(response => response.json())
        .then(data => {
            if (!data[category]) {
                categoryTitle.innerText = "No professions found!";
                return;
            }

            let professions = data[category];
            showCareer.innerHTML = ""; // Clear previous data



        

            professions.forEach(profession => {
                let card = `
                    
                        <div class="card2 outline">
                            <div class="flex">
                                <div class="card-title">${profession.profession_title}</div>
                                
                            </div>
                            <div class="card-content3">${profession.eligibility_criteria}</div>
                            <div class="card-content2">${profession.information}</div>
                            <div class="flex">
                            <div class="button2">Estimated fee : ${profession.course_fee}/-</div>
                            <div class="button2"> ${profession.course_duration}</div>
                            </div>
                            
                            <div class="card-content4">Future mastery : ${profession.future_mastery}</div>
                        </div>
                   
                `;
                showCareer.innerHTML += card;
            });
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
            categoryTitle.innerText = "Error loading data!";
        });
});









        document.addEventListener("DOMContentLoaded", function () {
            var googleNavbar = document.querySelector(".goog-te-banner-frame.skiptranslate");
            if (googleNavbar) {
                googleNavbar.style.display = "none";
            }

            var googleGadget = document.querySelectorAll(".goog-logo-link, .goog-te-gadget span, .goog-te-gadget");
            googleGadget.forEach(function (element) {
                element.style.display = "none";
            });

            document.body.style.top = "0px";

            googleTranslateElementInit();

            var languageSelector = document.getElementById("languageSelector");
            languageSelector.addEventListener("change", function() {
                var selectedLanguage = languageSelector.value;
                var frame = document.querySelector('.goog-te-menu-frame');
                if (frame) {
                    var frameDocument = frame.contentDocument || frame.contentWindow.document;
                    var languageOption = frameDocument.querySelector('.goog-te-menu2-item span.text:contains("' + selectedLanguage + '")');
                    if (languageOption) {
                        languageOption.click(); 
                    }
                }
            });
        });

        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi'
            }, 'google_translate_element');
        }
    

        document.getElementById("chatbot-icon").addEventListener("click", function() {
            document.getElementById("video-popup").style.display = "flex";
        });
        
        document.getElementById("close-btn").addEventListener("click", function() {
            document.getElementById("video-popup").style.display = "none";
            
            // Stop the video when closing
            let iframe = document.getElementById("chatbot-video");
            iframe.src = iframe.src;  
        });
        
const questions = [
  {
    id: 1,
    question: "Introduce yourself? Tell me about yourself!",
    answer:
      "I am Ravi Ranjan Kumar, I live in Patna, Bihar.  I have pursued my bachelors in  Electronics and Telecom engineering from chouksey engineering college, Bilaspur, Chhatisgarh. I did my schooling in Patna. My father is a Retired Army personnel. This family background of selfless service landed me a job in an NGO Agastya International Foundation in my hometown. I worked for 2 and half years. While working there I found the need to upskill myself and I chose web development as a career and finally, I am learning MERN stack at Masai School. ",
  },
  {
    id: 2,
    question: "What are your strengths?",
    answer:
      "I am a quick learner as you know I come from a non-cs background and even then I quickly gained my proficiency over my coding skills in a short span of 6 months. I am a persistent learner, There are some concepts I don’t digest in one go but I again repeat the lecture multiple times and get my concepts clear. I acknowledge my mistake and try to not repeat it.",
  },
  {
    id: 3,
    question: "What are your weaknesses?",
    answer:
      "I am an agreeable person. I tend to say yes more frequently to anyone asking for help, I hesitate to say no easily, thinking of not hurting someones feeling or breaking someone’s faith in me. I am currently reading a book called the Art of saying No by Damon Zahariades to overcome my weakness.",
  },
  {
    id: 4,
    question: "Why do you want to work for our company?",
    answer:
      "Company vision aligns with my work ethic and I always wanted to join a company like yours which is doing revolutionary work in its fields. ",
  },
  {
    id: 5,
    question: "How did you hear about the company?",
    answer:
      "I came to know through a Linkedin post by one of your company employees.",
  },
  {
    id: 6,
    question:
      "What are your career objectives? Where do you see yourself 5 years from now",
    answer:
      "I want to become a proficient coder and excellent problem solver.5 years down the line I see myself as leading a strong team in a challenging project.",
  },
  {
    id: 7,
    question: "What is your greatest personal/professional achievement so far?",
    answer:
      "In the last six months, I had solved almost 300 data structure problems and made more than 30 small projects on web-development.",
  },
  {
    id: 8,
    question:
      "Tell me about a team project you did at work. What was your role, and what was the outcome?",
    answer:
      "I and my team-mate Md Tausif were given a task to clone Nordstrom. Nordstrom is a US-based eCommerce business dealing mainly in clothing and personal care items. The website was really big and complex in structure. Due to time constraints, we decided to clone some specific pages only, My role was to work on the Landing page, Men’s clothing section, checkout page and maintaining Github repo. Other tasks were taken by my teammate.On working on this challenging project of this kind for the first time, I got strong hands-on experience of using Html, CSS, javascript dom-manipulation and local storage and using GitHub for team collaboration.",
  },
  {
    id: 9,
    question:
      "What does your perfect day/workday look like? Take me through it?",
    answer:
      "My day starts around 7:00 am with a cup of hot tea. After some home exercise and household work, my actual workday starts sharply at 9:00 am with morning scrum followed by 15min meditation. At 9:30 we have a 1-hour long dsa contest followed by a live dsa class. At 12 we have our skillathon session or soft skill workshop where we are made familiar with work ethics and principles to be followed in life and the workplace. We have a break of 2 hr from 1 to 3 and again at 3, we have 3hr long live coding class where web-development technologies are taught through the wonderful IWY principle. In the evening from 6, we have assignment completion time followed by evening stand up at 7:45 pm. At 8 pm we have a  pre-class recorded lecture to be prepared for the next day.",
  },
  {
    id: 10,
    question: "Why did you join Masai school?",
    answer:
      "When I was looking for resources that can smoothen my process of a career change. I came to know about Masai school. Doing thorough research, one thing which made my mind was its military-style rigorous 9to9 schedule. Till now I had understood that without proper discipline and guidance, achieving my goal in a short span is a little tough task, and Masai school was providing a complete solution to my problem. ",
  },
  {
    id: 11,
    question: "What has been your experience at Masai school?",
    answer:
      "The journey at Masai has never been easy, at least for learners like me who have no coding or development background. The schedule at Masai is fully packed keeping the whole day engaged in learning and practicing. We have skilled and experienced teachers and IA’s helping us in all possible ways whenever we are in need. We are trained in a diverse field from learning coding to soft skills and making real-life projects.",
  },
  {
    id: 12,
    question:
      "Why should we hire you? Why do you think you are eligible for this job? /How can you contribute? /How will you be an asset to the company?",
    answer:
      "I am proficient in my tech stacks. I had hands-on experience in developing scalable projects and implementing end-to-end functionality with pixel-perfect design and complete responsiveness. I am a team player and problem solver. I am available for any work location. My work ethic aligns with the company’s objective.",
  },
  {
    id: 13,
    question: "Why did you leave your previous job?",
    answer:
      "As you know I was working in an NGO, I was enjoying my work there but for a better career option, I needed time to learn coding and frameworks. For this, I had to leave my job.",
  },
  {
    id: 14,
    question:
      "Why is there a gap in your employment? Gap years after education?",
    answer:
      "After my graduation, I was not able to secure a promising job in my core field and thus I started preparing for government jobs. I had cleared a couple of preliminary examinations but was not able to get good marks in the mains exam. While learning ",
  },
  {
    id: 15,
    question: "Can you explain why you changed your career paths?",
    answer:
      "During covid19 lockdown our NGO was contacted by STEMPEDIA, an organization teaching school students online coding just like whitehatjr. I was selected as my state coordinator for this project and I had to be present in all coding sessions organized by them. I was really amazed to see government school children of class 6-8 learning coding through their mobile and that moment was the eureka moment for me and I finally decided to quit my job and make my career in this development field.",
  },
  {
    id: 16,
    question: "Tell me how other people would describe you?",
    answer:
      "My friends and inner circle people would describe as an agreeable person. I am a kind of perceiving personality. I am not very much rigid about my actions or decision.",
  },
  {
    id: 17,
    question: "How do you deal when you face pressure?",
    answer:
      "Whenever I feel pressured I took a break and go on a walk and listen to some folk songs. When I start again I do a pen-paper analysis of the root cause with 5 why techniques and come to the possible solution. Discussing the situation with my friends also relaxes mental stress.",
  },
  {
    id: 18,
    question:
      "Tell me about a challenge you have faced at your work/life and how you dealt with it",
    answer:
      "Recently my nephew was very ill and he was hospitalized for a week and also needed post-hospitalization care. That was also the peak time of the covid second wave.  Being the only male adult guardian present in my home apart from my retired father. I had to take care of my family. At the same time, I also had to manage my Masai 9 to 9 classes and assignments. Keeping family first in such a situation, I informed my student coordinator about the issue and I attended lectures through mobile phone from the hospital and completed pending assignments on weekends and late nights. Even though performance dropped a little bit but I was able to secure good passing marks in my evaluation",
  },
  {
    id: 19,
    question: "What are your salary expectations?",
    answer:
      "Being a fresher with experience of making diverse projects during the learning phase. I expect to be paid as per the industry standard and the company’s reputation.",
  },
  {
    id: 20,
    question: "What are the other companies you are interviewing with?",
    answer:
      "Last week I attended the placement drive of Messo company for the SDE1 position. I was unfortunately not able to get on the final shortlisted list.",
  },
  {
    id: 21,
    question: "What are your hobbies and leisure interests?",
    answer:
      "I am in habit of reading books and financial blogs. I am also found of watching movies and web series.",
  },
  {
    id: 22,
    question: "What are the 3 things that are most important for you in a job?",
    answer:
      "For me learning opportunity at the workplace, career growth and work-life balance is three most important thing in any job.",
  },
  {
    id: 23,
    question: "Do you know anyone who works for us?",
    answer:
      "Some seniors from Masasi school are currently working in your company.",
  },
  {
    id: 24,
    question: "Do you have any questions for us?",
    answer: "I would appreciate ",
  },
];

export default questions;

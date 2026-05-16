// Site data — full content from existing site + new bio + races.

(function() {
const PARAN = {
  name: "Paran Sonthalia",
  location: "Manhattan, NY",
  email: "paran.websiteContact@gmail.com",
  taglines: {
    triplet: ["Engineer", "Founder", "Endurance athlete"],
    short: "Quant dev. Founder. Endurance athlete.",
  },
  bioShort: "Quantitative developer at Citadel in New York (Index Rebalance desk). UC Berkeley, '22 — Computer Science and Data Science. Previously co-founded DeWaste (YC-grant funded).",
  bioLong: "Quantitative developer at Citadel in New York, working on the index rebalance desk. Before Citadel I went to UC Berkeley for Computer Science and Data Science (class of '22), and co-founded DeWaste, a Y-Combinator-grant-funded startup working on food waste in dining institutions. Outside of work I'm training for long-distance races and uploading clips to Xcelerate.",
  now: [
    { label: "Working", text: "Quant dev at Citadel — index rebalance desk" },
    { label: "Training", text: "Building base for a fall 50-miler · 52 mi/week" },
    { label: "Reading", text: "Trading and Exchanges (Larry Harris)" },
    { label: "Listening", text: "Hardcore History · Carlin's Khan series" },
    { label: "Building", text: "Side tools for my own training-data logging" },
  ],
  socials: [
    { name: "GitHub", handle: "psonthalia", url: "https://github.com/psonthalia" },
    { name: "LinkedIn", handle: "paran-sonthalia", url: "https://www.linkedin.com/in/paran-sonthalia-9bba3285/" },
    { name: "Twitter", handle: "@paransonthalia", url: "https://twitter.com/paransonthalia" },
    { name: "YouTube", handle: "Xcelerate", url: "https://www.youtube.com/Xcelerate" },
    { name: "Email", handle: "paran.websiteContact@gmail.com", url: "mailto:paran.websiteContact@gmail.com" },
  ],

  // Endurance log — matter-of-fact, not braggy. Presented as a quiet
  // ledger inside the Xcelerate section.
  races: [
    { event: "100-mile ultra", where: "Big Bear, CA", dist: "100" },
    { event: "SF Ultra",        where: "San Francisco, CA", dist: "52.4" },
    { event: "JFK 50",          where: "Washington Co., MD", dist: "50" },
    { event: "Ironman",         where: "Texas",     dist: "140.6" },
    { event: "Ironman",         where: "Arizona",   dist: "140.6" },
    { event: "Half Ironman",    where: "Luxembourg", dist: "70.3" },
  ],

  projects: [
    { title: "DeWaste", year: "2020 — 2022", role: "Co-founder, CEO", text: "Food-waste startup. Worked with dining institutions to measure and reduce post-consumer waste. YC Startup School grant.", img: "assets/dewaste.png", tags: ["Startup", "YC", "Hardware"], url: "http://de-waste.com" },
    { title: "Xcelerate", year: "2020 — Now", role: "Creator", text: "YouTube channel documenting endurance training — running, biking, race prep. Long-form, no edits for the sake of it.", img: "assets/xcelerate.png", tags: ["Video", "Running"], url: "https://www.youtube.com/Xcelerate" },
    { title: "Drone (from scratch)", year: "2019", role: "Hardware", text: "Designed and CAD'd custom arms, landing gear, and hub. Sourced parts, built a photography drone end-to-end.", img: "assets/drone.png", tags: ["Hardware", "CAD"] },
    { title: "TrashCam", year: "2019", role: "Hackathon", text: "Self-sorting trash can. Computer vision + servos to route landfill, recycling, and compost in real time.", img: "assets/trashcam.png", tags: ["CV", "Hardware"], url: "https://devpost.com/software/trashcam-krdsz8" },
    { title: "College App Planner", year: "2018", role: "Built + shipped", text: "Online portal for students to build a college list, plan essay deadlines, and track applications.", img: "assets/collegeAppPlanner.png", tags: ["Web", "EdTech"], url: "https://collegeappplanner.com" },
    { title: "RoBotany", year: "2017", role: "Hardware + software", text: "Hardware-software combo to help home gardeners keep plants alive without thinking about it.", img: "assets/robotany.png", tags: ["IoT", "Hardware"], url: "https://devpost.com/software/robotany" },
    // Below the fold — revealed by "show more"
    { title: "Mountain View Art", year: "2018", role: "Built with the City", text: "Built with the Mayor of Mountain View to map every public artwork in the city.", img: "assets/mtnViewArt.png", tags: ["Civic", "Maps"], url: "mtnViewArt.html" },
    { title: "Droid Control", year: "2018", role: "Hackathon", text: "Teaching programming using augmented reality to make learning more interactive and entertaining.", img: "assets/droidcontrol.png", tags: ["AR", "EdTech"], url: "https://devpost.com/software/droid-control" },
    { title: "Auxilium Health", year: "2017", role: "Hackathon", text: "Scanning prescription labels and automatically reminding users when to take medications.", img: "assets/auxiliumHealth.png", tags: ["Health", "Mobile"], url: "auxiliumHealth.html" },
    { title: "Minute Tutor", year: "2017", role: "Built + shipped", text: "Tutors by the minute — for when you need help on just one homework problem, not a whole hour.", img: "assets/minuteTutor.png", tags: ["Web", "EdTech"], url: "minuteTutor.html" },
    { title: "Teender", year: "2016", role: "iOS app", text: "Social app for high schoolers to overcome social anxiety.", img: "assets/teender.png", tags: ["Mobile", "Social"], url: "teender.html" },
    { title: "Hyve", year: "2016", role: "Built + shipped", text: "Central place for students to register with clubs and clubs to manage announcements.", img: "assets/hyve.png", tags: ["Web", "Schools"] },
    { title: "Spikeball Attack", year: "2015", role: "iOS · first app", text: "My first iOS app — a game where the user keeps a jewel safe from bouncing spikeballs.", img: "assets/spikeballAttack.png", tags: ["iOS", "Game"], url: "http://mangoap.com/spikeballAttack" },
    { title: "EasyStudy", year: "2015", role: "Web", text: "An early study-tools project, built with high-school friends.", img: "assets/easyStudy.png", tags: ["Web", "EdTech"] },
  ],

  work: [
    { co: "Citadel", role: "Quantitative Developer", years: "2022 — Now", note: "Index Rebalance desk — quant systems for index trading.", img: "assets/citadel.png", loc: "New York", url: "https://citadel.com/" },
    { co: "Citadel", role: "SWE Intern", years: "Summer 2021", note: "Added persistent-disk functionality to Citadel's internal Kubernetes engine.", img: "assets/citadel.png", loc: "Chicago", url: "https://citadel.com/" },
    { co: "Amazon", role: "SWE Intern", years: "Summer 2020", note: "Automated analysis of device-connectivity data to reduce customer-service contacts.", img: "assets/amazon.png", loc: "Seattle (remote)", url: "https://amazon.com/" },
    { co: "DeWaste", role: "Co-founder, CEO", years: "2020 — 2022", note: "Y-Combinator-grant-funded food-waste startup. Hardware, software, business.", img: "assets/dewaste.png", loc: "Berkeley", url: "http://de-waste.com" },
    { co: "Pivotal", role: "SWE Intern", years: "Summer 2019", note: "Release Engineering — automated the shipping process for a new release.", img: "assets/pivotal.jpg", loc: "Palo Alto", url: "https://pivotal.io/" },
    { co: "MangoApps", role: "Founder, summer programs", years: "2017 — 2019", note: "Built a team of high-school interns; every summer we shipped a new project.", img: "assets/mangoapps.png", loc: "Remote", url: "http://mangoap.com" },
    { co: "LeanData", role: "SWE Intern", years: "Summer 2017", note: "Designed and developed multiple new capabilities on LeanData's product.", img: "assets/leanData.png", loc: "Sunnyvale", url: "http://www.leandatainc.com" },
  ],

  press: [
    { src: "Y Combinator", title: "Announcing the Startup School 2019 Grant Recipients", url: "https://blog.ycombinator.com/announcing-the-startup-school-2019-grant-recipients/", img: "assets/ycombinator.png" },
    { src: "HackerNoon", title: "How Two College Students Are Solving Food Waste", url: "https://hackernoon.com/how-two-college-students-are-solving-the-problem-of-food-waste", img: "assets/hackernoon.png" },
    { src: "Los Altos Town Crier", title: "MVHS alums launch startup to reduce food waste", url: "https://www.losaltosonline.com/news/sections/business/183-business-features/62812-mvhs-alums-launch-startup-to-reduce-food-waste", img: "assets/latc.png" },
    { src: "StartU", title: "How DeWaste is reducing food waste in dining institutions", url: "https://www.thestartu.com/post/dewaste", img: "assets/startu.jpeg" },
    { src: "EVCA", title: "UC Berkeley students launch startup to combat food waste", url: "https://evcauniversityedition.substack.com/p/april-2021", img: "assets/evca.png" },
    { src: "Berkeley Innovation", title: "Tech Uncovered — Student Startup (podcast)", url: "https://anchor.fm/berkeley/episodes/Tech-Uncovered---Student-Startup-ed0q34", img: "assets/berkeley_innovation.jpg" },
    { src: "Forward Thinking Founders", title: "Paran Sonthalia (DeWaste) — interview", url: "https://www.breaker.audio/forward-thinking-founders/e/56538116", img: "assets/breaker_audio.png" },
    // Below the fold
    { src: "Fundraising Radio", title: "Paran Sonthalia (DeWaste) on Fundraising Radio", url: "https://open.spotify.com/episode/2CSy1WywGF9j0XAKwkA20s", img: "assets/fundraising_radio.jpeg" },
    { src: "The Understory", title: "Using technology to proactively reduce food waste", url: "https://www.theunderstory.io/paran-sonthalia-of-dewaste-using-technology-to-proactively-reduce-food-waste/", img: "assets/understory.jpg" },
    { src: "Cal Poly Entrepreneurs", title: "DeWaste: Tackling Food Waste One Plate at a Time", url: "https://www.cpentrepreneurs.com/post/dewaste-tackling-food-waste-one-plate-at-a-time", img: "assets/cpentrepreneurs.png" },
    { src: "Medium · Cal Hacks", title: "Cal Hacks Fellowship 5.0 Teams", url: "https://medium.com/cal-hacks/cal-hacks-fellowship-5-0-teams-part-1-97d051aee0fa", img: "assets/medium.png" },
    { src: "MVHS Oracle", title: "Students organize first ever MV Hackathon", url: "https://www.mvhsoracle.com/2017/05/25/students-organize-first-ever-mv-hackathon/", img: "assets/oracle.png" },
  ],

  volunteer: [
    { co: "MVHacks", role: "Organizer", note: "Gathered sponsors, mentors, judges. Planned the event end-to-end.", img: "assets/mvhacks.png", url: "https://mvhacks.io/" },
    { co: "CS Mentors @ Berkeley", role: "Mentor", note: "Mentored UC Berkeley students through intro CS courses.", img: "assets/csm.png", url: "https://csmentors.berkeley.edu/" },
    { co: "Troop 103, Los Altos", role: "Webmaster (Eagle Scout)", note: "Rebuilt the troop's site as a resource hub.", img: "assets/boyScouts.png", url: "http://www.troop103losaltos.org" },
    { co: "JavaOne4Kids / tutor", role: "Tutor", note: "Taught a dozen-plus classes; continued tutoring at Berkeley.", img: "assets/codeone.png", url: "https://www.oracle.com/code-one/" },
  ],
};

window.PARAN = PARAN;
})();

// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "kunal-thakare-ai";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a passionate data science fresher, eager to unravel the insights hidden in data and make a meaningful impact through analytics and machine learning.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "PYTHON",
  },
  {
    id: 2,
    skill: <Icon icon="streamline:interface-content-chart-product-data-analysis-analytics-graph-line-business-board-chart" className="display-4" />,
    name: "Data Analysis",
  },
  {
    id: 3,
    skill: <Icon icon="pajamas:machine-learning" className="display-4" />,
    name: "Machine Learning",
  },
  {
    id: 4,
    skill: <Icon icon="ep:data-analysis" className="display-4" />,
    name: "Power BI",
  },
  {
    id: 5,
    skill: <Icon icon="fluent:communication-person-20-filled" className="display-4" />,
    name: "Communication",
  },
  {
    id: 6,
    skill: <Icon icon="arcticons:math-wiki" className="display-4" />,
    name: "Statistics",
  },
  {
    id: 7,
    skill: <Icon icon="mdi:sql-query" className="display-4" />,
    name: "SQL",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:r" className="display-4" />,
    name: "R",
  },
  {
    id: 9,
    skill: <Icon icon="iconoir:learning" className="display-4" />,
    name: "Deep Learning",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [ "movie_recommendation_flask", "Forbes-EDA", "filmpire"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mzblyklz";

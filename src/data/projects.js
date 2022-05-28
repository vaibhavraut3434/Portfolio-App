// import project1 from '../assets/project1';
// import project2 from '../assets/project2';
// import project3 from '../assets/project3';

const p1 = require('../assets/project1.png');
const p2 = require('../assets/project2.png');
const p3 = require('../assets/project3.png')

const PROJECT = [
    {
        id:1,
        title: "My first React app",
        description: "This is a Job portal app created using React",
        //image: "https://github.com/15Dkatz/ReactJS_VideoGuides/blob/master/portfolio/src/assets/project1.png",
        image: p1,
        link: "https://github.com/vaibhavraut3434/Job-Portal"
    },
    {
        id:2,
        title: "Node Demo",
        description: "This is project is for learning NodeJS ",
        //image: "https://github.com/15Dkatz/ReactJS_VideoGuides/blob/master/portfolio/src/assets/project2.png",
        image: p2,
        link: "https://github.com/vaibhavraut3434/Basic-Node-Demo"
    },
    {
        id:3,
        title: "My Portfolio app",
        description: "This is a portfolio app created using React",
        //image: "https://github.com/15Dkatz/ReactJS_VideoGuides/blob/master/portfolio/src/assets/project3.png",
        image: p3,
        link: "https://github.com/vaibhavraut3434/First-React-App"
    }
]

export default PROJECT;
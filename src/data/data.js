/* eslint-disable import/prefer-default-export */

import jesusGun from '../images/IMG_6490.JPG'
import jesusShocked from '../images/IMG_6568.JPG'
import garfield from '../images/IMG_7083.JPG'
import frogRing from '../images/IMG_7400.JPG'
import rapture from '../images/IMG_7639.JPG'
import fineFire from '../images/IMG_8080.PNG'
import screamingDog from '../images/IMG_8384.JPG'
import spongebob from '../images/IMG_8453.JPG'
import painScale from '../images/IMG_8461.JPG'
import funFrog from '../images/IMG_8490.JPG'
import feathersMcgraw from '../images/IMG_8591.JPG'
import profilePic from '../images/me.jpg'
import skate from '../images/skate.jpg'
import ostrich from '../images/ostrich.jpg'

export const messageData = [
    {
        title: 'About me',
        subtitle: 'and what this page is for',
        content: [
            { sender: 'me', text: 'hello!' },
            { sender: 'me', text: "how's it going?" },
            { sender: 'you', text: 'not bad' },
            {
                sender: 'me',
                text: "writing fake dialog is kinda hard isn't it?",
            },
            { sender: 'you', text: 'yeah 🤣' },
            { sender: 'you', text: 'so tell me a little bit about yourself!' },
            {
                sender: 'me',
                text: "my name is christen and i'm a 26 year old bay area native!",
            },
            {
                sender: 'me',
                text: '',
                image: profilePic,
                alt: 'pic of me',
                title: 'courtesy of my sister @avecvousphoto',
            },
            {
                sender: 'me',
                text: 'i built this app so i could make friends and maybe more than that! hence the play on Christian Mingle. ',
            },
            { sender: 'you', text: 'so like a dating portfolio?' },
            {
                sender: 'me',
                text: "exactly! except if you're a professional or employer please close this web page immediately this is too embarrassing of a side project to have to explain",
            },
            {
                sender: 'you',
                text: "great! i pinky promise i'm not an employer so i'm going to keep chatting!",
            },
            { sender: 'me', text: 'nice nice' },
            {
                sender: 'me',
                text: "so like i was saying, i'm hoping this website can help people understand more about me in a fun way! one of the most important things about me is that i am christian (whoo double entendre, cool domain or what??) and i want to date intentionally",
            },
            {
                sender: 'me',
                text: "my friends would describe me as funny, smart, and maybe adventurous. i'm very family oriented in the sense that i love my parents, siblings, and i'm a cool aunt to some nephews and a niece",
            },
            {
                sender: 'me',
                text: "i'm looking for a serious relationship with somone who loves Jesus and is kind, goofy, and has similar values",
            },
            {
                sender: 'you',
                text: "that's awesome! i'd love to hear more!",
            },
            {
                sender: 'me',
                text: 'k ',
            },
        ],
    },
    {
        title: 'Favorite things',
        subtitle: 'these are a few of my...',
        content: [
            { sender: 'you', text: 'hi!' },
            { sender: 'me', text: 'new phone who dis?' },
            { sender: 'me', text: 'lol jk hi' },
            { sender: 'you', text: 'lol' },
            { sender: 'you', text: 'okay so time for favorite things' },
            { sender: 'me', text: 'okay go' },
            { sender: 'you', text: "what's your favorite genre of music?" },
            {
                sender: 'me',
                text: 'indie, indie rock, indie pop, rnb, hip hop, neo-soul',
            },
            { sender: 'me', text: 'i return to these playlists a lot' },
            {
                sender: 'me',
                text: '',
                link: 'https://open.spotify.com/playlist/21CyKBJ4LQXG1QIEJo7LH8?si=b9fe49ab5e9c451c',
            },
            {
                sender: 'me',
                text: '',
                link: 'https://open.spotify.com/playlist/157zJiTh0Af6RUq5CnrbhL?si=555cadb024194b5c',
            },
            { sender: 'you', text: 'favorite foods?' },
            {
                sender: 'me',
                text: 'sushi, korean fried chicken, spring rolls, banh xeo',
            },
            { sender: 'you', text: 'favorite social media platform?' },
            { sender: 'me', text: 'twitter for sure' },
            {
                sender: 'you',
                text: 'what was your favorite cartoon growing up?',
            },
            { sender: 'me', text: 'most definitely spongebob' },
            {
                sender: 'you',
                text: 'what are some of your favorite shows right now?',
            },
            {
                sender: 'me',
                text: "wandavision, lovecraft country, the mandalorian, schitt's creek",
            },
            { sender: 'you', text: "who's your favorite superhero?" },
            { sender: 'me', text: 'matilda', read: true },
            { sender: 'me', text: 'hello??' },
        ],
    },
    {
        title: 'Hobbies',
        subtitle: 'so what do you like to do...',
        content: [
            {
                sender: 'you',
                text: 'so what do you like to do in your spare time besides building apps and making bad puns?',
            },
            {
                sender: 'me',
                text: 'i built this app not out of enjoyment but desperation...',
            },
            {
                sender: 'me',
                text: 'in my free time i love rollerskating! you can catch me at the rink working on my jam skating or taking bad spills on my tailbone at the skatepark!',
            },
            { sender: 'me', text: '', image: skate, alt: 'me skating' },
            { sender: 'you', text: 'what else do you like doing?' },
            {
                sender: 'me',
                text: "i really enjoy film photography, sewing, and chainstitching. i've also been dabbling in stained glass but i don't really have the space for it. i'd love to one day learn woodworking!",
            },
        ],
    },
    {
        title: 'Memes',
        subtitle: 'may-mays',
        content: [
            {
                sender: 'you',
                text: 'send me several memes that describe you in a nutshell',
            },
            {
                sender: 'me',
                text: '',
                image: jesusGun,
                alt: 'jesus holding a gun',
            },
            {
                sender: 'me',
                text: '',
                image: jesusShocked,
                alt: 'jesus shocked with small hand',
            },
            {
                sender: 'me',
                text: '',
                image: garfield,
                alt: 'no garfields allowed',
            },
            {
                sender: 'me',
                text: '',
                image: frogRing,
                alt: 'a very special visitor',
            },
            {
                sender: 'me',
                text: '',
                image: rapture,
                alt: 'jesus calls for the start of rapture',
            },
            {
                sender: 'me',
                text: '',
                image: fineFire,
                alt: 'this is fine but with a nice twist',
            },
            {
                sender: 'me',
                text: '',
                image: screamingDog,
                alt: 'screaming dog',
            },
            {
                sender: 'me',
                text: '',
                image: spongebob,
                alt: 'balling spongebob',
            },
            { sender: 'me', text: '', image: painScale, alt: 'pain scale' },
            { sender: 'me', text: '', image: funFrog, alt: 'fun frog' },
            {
                sender: 'me',
                text: '',
                image: feathersMcgraw,
                alt: 'feathers mcgraw',
            },
        ],
    },
    { title: 'Cons of dating me', content: [] },
    {
        title: "Let's keep in touch!",
        subtitle: 'Attachment: 1 image',
        content: [
            { sender: 'me', text: 'thanks for making it this far!' },
            {
                sender: 'me',
                text: 'if you read all this and think you would like to become friends, come find me on my social media!',
            },
            {
                sender: 'me',
                text: '',
                link: 'https://twitter.com/ChristenNguyen',
            },
            {
                sender: 'me',
                text: '',
                image: ostrich,
                alt: 'ostrich screaming at me',
            },
        ],
    },
]

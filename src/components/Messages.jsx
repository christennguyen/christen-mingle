import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import jesusGun from 'public/images/IMG_6490.jpg'
import jesusShocked from 'public/images/IMG_6568.jpg'
import garfield from 'public/images/IMG_7083.jpg'
import frogRing from 'public/images/IMG_7400.jpg'
import rapture from 'public/images/IMG_7639.jpg'
import fineFire from 'public/images/IMG_8080.jpg'
import screamingDog from 'public/images/IMG_8384.jpg'
import spongebob from 'public/images/IMG_8453.jpg'
import painScale from 'public/images/IMG_8461.jpg'
import funFrog from 'public/images/IMG_8490.jpg'
import feathersMcgraw from 'public/images/IMG_8591.jpg'

const StyledContainer = styled.div`
    background-color: grey;
    border-radius: 16px;
    border: 0.5px solid white;
    width: 1000px;
    height: 650px;
    color: white;
`

const StyledLayout = styled.div`
    display: flex;
`

const StyledSidebar = styled.div`
    width: 400px;
    background-color: #5a595a;
`

const messageItems = [
    {
        title: 'About me',
        content: [
            { sender: 'me', text: 'hello!' },
            { sender: 'me', text: "how's it going?" },
            { sender: 'you', text: 'not bad' },
            {
                sender: 'me',
                text: "writing fake dialog is kinda hard isn't it?",
            },
            { sender: 'you', text: 'yeah lol' },
            { sender: 'you', text: 'so tell me a little bit about yourself!' },
            {
                sender: 'me',
                text: "my name is christen and i'm a 26 year old bay area native!",
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
                text: 'https://open.spotify.com/playlist/21CyKBJ4LQXG1QIEJo7LH8?si=b9fe49ab5e9c451c',
            },
            {
                sender: 'me',
                text: 'https://open.spotify.com/playlist/157zJiTh0Af6RUq5CnrbhL?si=555cadb024194b5c',
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
            { sender: 'you', text: 'what else do you like doing?' },
            {
                sender: 'me',
                text: "i really enjoy film photography, sewing, and chainstitching. i've also been dabbling in stained glass but i don't really have the space for it. i'd love to one day learn woodworking!",
            },
        ],
    },
    {
        title: 'Memes',
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
        content: [
            { sender: 'me', text: 'thanks for making it this far!' },
            {
                sender: 'me',
                text: 'if you read all this and think you would like to become friends, come find me on my social media!',
            },
            { sender: 'me', text: 'https://twitter.com/ChristenNguyen' },
        ],
    },
]

const MessagePreview = styled.div`
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid white;
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`

const MessageContentContainer = styled.div`
    width: 600px;
    background-color: #1f1f1f;
`

const SpeechBubble = styled.div`
    background-color: ${(props) =>
        props.sender === 'me' ? '#218AFF' : '#3B3B3D'};
    border-radius: 23px;
    padding: 8px 14px;
    width: fit-content;
    margin-bottom: 3px;
    ${(props) => props.sender === 'me' && 'align-self: flex-end'};
    align-self: ${(props) =>
        props.sender === 'me' ? 'flex-end' : 'undefined'};
    max-width: 250px;
`

const Messages = () => {
    const [indexDisplayed, setIndexDisplayed] = useState(0)
    const handleClick = (index) => {
        setIndexDisplayed(index)
    }
    return (
        <StyledContainer>
            <StyledLayout>
                <StyledSidebar>
                    {messageItems.map((message, index) => (
                        <MessagePreview
                            key={uuidv4()}
                            index={index}
                            onClick={() => handleClick(index)}
                        >
                            {message.title}
                        </MessagePreview>
                    ))}
                </StyledSidebar>
                <MessageContentContainer>
                    <MessageContent>
                        {messageItems[indexDisplayed].content.map((text) => {
                            text.text === '' ? (
                                <img src={text.image} alt={text.alt} />
                            ) : (
                                <SpeechBubble sender={text.sender}>
                                    {text.text}
                                </SpeechBubble>
                            )
                        })}
                    </MessageContent>
                </MessageContentContainer>
            </StyledLayout>
        </StyledContainer>
    )
}

export default Messages

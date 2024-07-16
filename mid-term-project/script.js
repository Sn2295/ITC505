// Define your story stages as objects
const story = [
    {
        text: "You wake up in a strange room. What do you do?",
        choices: [
            { text: "Look around", nextStage: 1 },
            { text: "Stay in bed", nextStage: 2 }
        ],
        image: "room.jpg"
    },
    {
        text: "You find a key on the floor. What next?",
        choices: [
            { text: "Open the door", nextStage: 3 },
            { text: "Ignore the key", nextStage: 4 }
        ],
        image: "key.jpg"
    },
    {
        text: "You hear footsteps approaching. What do you do?",
        choices: [
            { text: "Hide under the bed", nextStage: 5 },
            { text: "Confront the person", nextStage: 6 }
        ],
        image: "footsteps.jpg"
    },
    {
        text: "The door opens to a garden. What do you do?",
        choices: [
            { text: "Explore the garden", nextStage: 7 },
            { text: "Go back inside", nextStage: 8 }
        ],
        image: "garden.jpg"
    },
    {
        text: "You decide to ignore the key and go back to sleep.",
        choices: [],
        image: "sleep.jpg"
    },
    {
        text: "You hide under the bed and wait silently.",
        choices: [],
        image: "hide.jpg"
    },
    {
        text: "You confront the person and realize it's your friend.",
        choices: [],
        image: "friend.jpg"
    },
    {
        text: "You explore the garden and find a hidden treasure.",
        choices: [],
        image: "treasure.jpg"
    },
    {
        text: "You go back inside and lock the door behind you.",
        choices: [],
        image: "inside.jpg"
    }
];

// Game state variables
let currentStage = 0;

// Function to start/restart the game
function startGame() {
    currentStage = 0;
    updatePage();
}

// Function to update the page with current stage of the story
function updatePage() {
    const stage = story[currentStage];
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const imageElement = document.getElementById('storyImage');

    // Update story text
    storyElement.textContent = stage.text;

    // Clear previous choices
    choicesElement.innerHTML = '';

    // Create choice buttons
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', function() {
            currentStage = choice.nextStage;
            updatePage();
        });
        choicesElement.appendChild(button);
    });

    // Update image
    imageElement.src = stage.image;
}

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', function() {
    startGame();
});

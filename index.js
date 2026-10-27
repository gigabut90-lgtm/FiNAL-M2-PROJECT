const form = document.getElementById("word-search");
const wordInput = document.getElementById("text");
const results = document.getElementById("results");

async function getWord(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        if (!response.ok) {
            throw new Error("could not fetch data")
        }
        const results = await response.json()

        return results


    }
    catch (error) {
        console.error(error)
    }

}
form.addEventListener("submit", async (event) => {
    event.preventDefault()

    // Validation checkf,orinpust
    const word = wordInput.value.trim();
    if (word === "") {
        results.textContent = "Please enter a word.";
        return;
    results.innerHTML = "";
    results.textContent = `Searching for "${word}"...`;

    }
    console.log(word)
    const data = await getWord(word);
    //handles when  word not found
    if (!data) {
        results.textContent = "The word you typed in is not found please try again";
        return;
    }

    displayresults(data);
})

function displayresults(data) {
    results.innerHTML = "";
    const entry = data[0];

    const title = document.createElement("h3");
    title.className = "text-3xl font-bold text-blue-600";
    title.textContent = entry.word;
    results.appendChild(title);

    const phonetic = document.createElement("p");
    phonetic.className = "text-gray-600 italic mb-2";
    phonetic.textContent = entry.phonetic || "Pronunciation not available";
    results.appendChild(phonetic);

    const Audiophonetic = entry.phonetics.find(
        item => item.audio
    );

    let audioURL;
    if (Audiophonetic !== undefined) {
        audioURL = Audiophonetic.audio
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = Audiophonetic.audio;

        results.appendChild(audio);
    }
    // 
    entry.meanings.forEach(meaning => {

        // Display the part of speech
        const partOfSpeech = document.createElement("h4");
        partOfSpeech.textContent = meaning.partOfSpeech;
        partOfSpeech.className = "text-xl font-bold mt-4";

        results.appendChild(partOfSpeech);

        // Loop through the definitions
        meaning.definitions.forEach(definition => {

            const definitionText = document.createElement("p");
            definitionText.textContent = definition.definition;
            definitionText.className = "mb-2";

            results.appendChild(definitionText);

            if (definition.example) {
                const example = document.createElement("p");
                example.textContent = `Example: ${definition.example}`
                example.className = "text-gray-500 italic mb-3"
                results.appendChild(example);
            }


        });
    });
const button = document.createElement("button")
button.textContent = "clear"
button.type = "button"
button.className = "clear-button";
button.addEventListener("click" ,() => {
    results.innerHTML=""
    wordInput.value = ""
})
results.appendChild(button)
} 

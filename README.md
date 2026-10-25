# 📚 WHATS THE WORD !!!

A simple, interactive dictionary web app that lets users search for English words and explore their meanings.

##  Features

- **Word search:** Search for an English word using the search form.
- **Definitions:** View definitions grouped by part of speech.
- **Pronunciation:** Display phonetic spelling when available.
- **Audio pronunciation:** Play pronunciation audio when the API provides it.
- **Example sentences:** Read example sentences when available.
- **Input validation:** Receive a message if the search field is empty.
- **Error handling:** Get feedback when a word cannot be found or a request fails.
- **Clear results:** Remove the displayed definition and clear the search input.
- **Responsive styling:** A clean interface built with CSS and Tailwind CSS.

## Methods used

- HTML5
- CSS3
- JavaScript (DOM manipulation, event listeners, `async`/`await`, and Fetch API)
- Tailwind CSS
- [Free Dictionary API](https://dictionaryapi.dev/)

##  Getting Started




### 3. Open the app

Open `index.html` in your browser. For local development, you can also use the **Live Server** extension in Visual Studio Code.

## 📖 How to Use

1. Open the dictionary app.
2. Type an English word into the search field.
3. Click **Search**.
4. Read the word's pronunciation, definitions, parts of speech, and available examples.
5. Use the audio controls if pronunciation audio is available.
6. Click **Clear results** to remove the current results and start again.

## 🔌 API Information

The app uses the Free Dictionary API to retrieve word information. The request URL follows this format:

```text
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

Replace `<word>` with the word being searched. The API response may include phonetics, audio, meanings, definitions, examples, and synonyms. Not every word has every field available.

## 🧯 Troubleshooting

- **No results appear:** Check your spelling and try another word.
- **The request fails:** Check your internet connection and try again.
- **Audio is unavailable:** Some entries do not provide audio pronunciation.
- **The page does not respond:** Open your browser's Developer Tools and check the Console for JavaScript errors.
- **JavaScript cannot find the form:** Ensure `scripts.js` is included in the HTML with `defer`, for example:

  ```html
  <script defer src="scripts.js"></script>
  ```

## 🌱 Future Improvements

- Display synonyms and antonyms when available.
- Add a loading indicator during searches.
- Add a search history.
- Improve accessibility and mobile responsiveness.
- Add tests for search validation, API failures, and DOM updates.

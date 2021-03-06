const button = document.querySelector('.read');
const textArea = document.querySelector('.text')

const speak = text => {
    const message = new SpeechSynthesisUtterance();
    message.lang = "ru-RU";
    message.text = text;
    window.speechSynthesis.speak(message);
}

button.addEventListener('click', () => {
    speak(textArea.value);
})
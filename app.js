import { API_KEY } from "./config.js";

// async function fetchData(){
//     const response = await fetch("https://api.openai.com/v1/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "text-davinci-003",
//         prompt: "How are you doing today this fine evening?",
//         max_tokens: 7
//       })
//     });
//     const data = await response.json()
//     console.log(data)
// }

// fetchData();

const submitButton = document.querySelector('#submit')

async function getMessage() {
  console.log('clicked')
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: {
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: "Hello!"}]
    },
  };
  try {
    await fetch('https://api.openai.com/v1/completions', options)
  } catch {

  }
}

submitButton.addEventListener('click', getMessage)
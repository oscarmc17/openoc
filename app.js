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
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch('https://api.openai.com/v1/completions', options)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

submitButton.addEventListener('click', getMessage)
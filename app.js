import { API_KEY } from "./config.js";

async function fetchData(){
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
}

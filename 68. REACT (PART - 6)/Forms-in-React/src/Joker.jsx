import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }
    getFirstJoke();
  }, []);
  return (
    <>
      <h1 style={{ color: "yellow" }}>Joker!</h1>
      <hr />
      <h4>{joke.setup}</h4>
      <h4>{joke.punchline}</h4>
      <hr />
      <button
        onClick={getNewJoke}
        style={{
          backgroundColor: "green",
          marginTop: "15px",
        }}
      >
        Get new Joke
      </button>
    </>
  );
}

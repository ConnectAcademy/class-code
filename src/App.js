import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [starter, setStarter] = useState(false);
  const [countedWords, setCountedWords] = useState(0);
  const textRef = useRef();
  useEffect(() => {
    if (timeRemaining > 0 && starter) {
      setTimeout(() => setTimeRemaining((pred) => pred - 1), 1000);
    } else {
      endGame();
    }
  }, [timeRemaining, starter]);

  function wordCount(text) {
    const wordArr = text.split(" ");
    return wordArr.filter((el) => el !== "").length;
  }

  function endGame() {
    setStarter(false);
    setCountedWords(wordCount(text));
    textRef.current.disabled = true;
  }

  function startGame() {
    setText("");
    setTimeRemaining(5);
    setStarter(true);
    setCountedWords(0);
    textRef.current.disabled = false;
    textRef.current.focus();
  }

  return (
    <>
      <h1>How fast do you type</h1>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={true}
        ref={textRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => startGame()}>START</button>
      <h1>Word count: {countedWords}</h1>
    </>
  );
};

export default App;
/**
 * Vezba-2:
 * Cekor 1: Kreirajte ja strukturata od applikacijata
 * 1. <h1> Naslov najgore
 * 2. <textarea> Vo koja ke mozime da pisuhvame tekst
 * 3. <h4> Da kazuva preostanato vreme
 * 4. <button> za da ja zapocnime igrata
 * 5. <h1> Da kazuva kolku zborovi se napishani vo tekstot
 *
 * Napomena: Vo cekor 1 ne treba da ja pishuvate logikata od igerata, nego samo dizajnot od aplikacijata vo JSX
 *
 * Cekor 2: Koristejki soodveten hook da se sledi sostojbata na tekstot shto e pishan vo textarea na sekoe
 * pritiskanje na kopce. Za da proverite dali raboti koristete console.log sega za sega.
 *
 * Cekor 3: Kreirajte funkcija koja ke broi kolku zborovi se vneseni vo textarea. Za pocetok testirajte ja
 * funkcijata so console.log koga kopceto ke se pritisne
 *
 * Cekor 4:
 * 1. Kreirajte "state" so soodveten hook shto ke ja drzi vrednosta na casovnikot. I da se pokaze vrednosta
 * vo "Time remaining: "
 * useEffect(() => {}, [])
 * 2. Koristete useEffect koj ke ni se povikuva sekoj pat koga ni se promenuva vrednosta od "state" shto go
 * napravivte predhodno za casovnikot. I sekoj pat koga ke se povika, posle 1 sekunda da ja namaluva vrednosta
 * na casovnikot. Pomosh: koristete setTimeout(() => {}, 1000)
 * 3 Napravete logika useEffect da ne se povikuva ako vrednosta na casovnikot ni e pomala ili ednakva na 0
 *
 * Cekor 5: Napravete nacin "START" kopceto da ni go zapocnuva tajmerot
 *
 * Cekor 6:
 * 1. Koga tajmerot ke dostigne vrednost 0, userot da se onevozmozi da pishuva vo textare, i izbrojte gi
 * zborovite shto se pishani vo textare i prikazete gi vo "Word count"
 * 2. Koga igrata ke zavrshi, napravete korisnikot da mozi povtorno da zapocne so igrata koga ke go pritisne kopceto "START"
 *
 * Cekor 7: Sekoj pat koga korisnikot ke zapocne nova igra avtomatski da se prefrli fokusot vo textarea i da moze odma da
 * zapocne so pishuvanje. Pomosh: koristete useRef() i metoda focus()
 */

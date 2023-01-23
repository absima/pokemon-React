export default function About() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>About</h2>
      <div
        style={{
          //line spacing
          lineHeight: '1.5rem',
          // font size
          fontSize: '1.0rem',
          // font family
          fontFamily: 'sans-serif',
          // alignment
          textAlign: 'left',
        }}
      >
        <p>
          This is a simple app to explore over 800 Pokemon characters. You can also
          play a simple "Memory" game. Another game called "Contest" is on the way, under
          development.
        </p>

        <p>
          To explore the Pokemon characters, click on the Pokedex link and you
          will be taken to a page with a search bar. To search for a Pokemon,
          type in the name or id of the Pokemon. The id is a number from 1 to
          809. The name search should be in English for now. The type of Pokemon
          can be fire, water, grass, etc.
        </p>
        <p>To see all the cards, type in "all" in the search bar.</p>

        <p>Have fun!</p>
      </div>
    </main>
  );
}

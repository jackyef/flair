export default function Home() {
  return (
    <>
      <main>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        Hello world!
      </main>
      <style jsx>{`
        main {
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          padding: 16px;
        }
      `}</style>
    </>
  );
}

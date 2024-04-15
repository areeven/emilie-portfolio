import Link from "next/link";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="flex w-1/2 h-full">
        <div className="w-1/2 bg-orange-200 h-max bg-cover"></div>
        <div className="w-1/2 bg-lime-100 h-max bg-cover">
          <article className="flex">
            <section>
              <ul className="w-3/4">
                <li className="ul-border font-bold">Meriter</li>
                <li className="ul-border">JavaScript</li>
                <li className="ul-border">TypeScript</li>
                <li className="ul-border">Vue</li>
                <li className="ul-border">React</li>
                <li className="ul-border">Next</li>
                <li className="ul-border">Jest</li>
                <li className="ul-border">Express</li>
                <li className="ul-border">Node</li>
                <li className="ul-border">MongoDB</li>
              </ul>
            </section>
            <section>
              <ul>
                <li className="ul-border font-bold">Erfarenhet</li>
                <li className="ul-border">Webbutvecklarutbildning</li>
                <li className="ul-border">Fullstack utvecklare 2 år</li>
              </ul>
            </section>
          </article>
        </div>
      </div>
      <h1 className="header">Välkommen</h1>
      <p>till min sida</p>
    </main>
  );
}

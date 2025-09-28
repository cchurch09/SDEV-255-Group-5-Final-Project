
function Header() {
  return (
    <header>
      <div>
        <a href="/">Site Title/Logo</a>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/schedule">Schedule</a></li>
        </ul>
      </nav>
      <div>
        <input type="text" name="search" id="search" placeholder='Search Anything' />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; Copyright 2025</p>
      </div>
    </footer>
  )
}

// Reuesable Button component with customizable classes for use site wide
function Button({href, text, classes}) {

  return (
    <>
    <a href={href} class={classes}>{text}</a>
    </>
  )
}

function App() {
  return (
  <div>
    <Header />
    
    <main>
      <h2>The rest of this site is coming soon!</h2>
      <Button href="/signup" text="Sign Up" classes="purplebutton" />
      <Button href="/schedule" text="View Schedule" classes="graybutton" />
    </main>

    <Footer />
  </div>
  )
}

export default App

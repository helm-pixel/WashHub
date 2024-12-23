import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="landing-page">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Smart Laundry Solutions for Busy Lives</h1>
          <p>Experience hassle-free laundry service with our innovative app. Schedule pickups, track orders, and get your clothes delivered fresh and clean.</p>
          <a href="#" class="cta-button">Get Started</a>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Choose WashWise?</h2>
        <p class="section-subtitle">We make laundry day a breeze with our premium services and features</p>
        
        <div class="features-grid">
          <div class="feature-card">
            <h3>Quick Pickup</h3>
            <p>Schedule pickups at your convenience with just a few taps</p>
          </div>
          <div class="feature-card">
            <h3>Real-time Tracking</h3>
            <p>Know exactly where your clothes are in the cleaning process</p>
          </div>
          <div class="feature-card">
            <h3>Premium Quality</h3>
            <p>Professional cleaning with eco-friendly products</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing">
      <div class="container">
        <h2 class="section-title">Weight-Based Pricing</h2>
        <p class="section-subtitle">Simple and transparent pricing based on your laundry weight</p>
        
        <div class="price-cards">
          <div class="price-card">
            <h3>Basic Load</h3>
            <div class="price">RM10</div>
            <p class="weight-range">5kg - 10kg</p>
            <ul>
              <li>Wash & Fold</li>
              <li>48hr Turnaround</li>
              <li>Free Delivery</li>
            </ul>
          </div>
          <div class="price-card">
            <h3>Medium Load</h3>
            <div class="price">RM21</div>
            <p class="weight-range">11kg - 16kg</p>
            <ul>
              <li>Wash & Fold</li>
              <li>48hr Turnaround</li>
              <li>Free Delivery</li>
            </ul>
          </div>
          <div class="price-card">
            <h3>Large Load</h3>
            <div class="price">RM35</div>
            <p class="weight-range">17kg - 22kg</p>
            <ul>
              <li>Wash & Fold</li>
              <li>48hr Turnaround</li>
              <li>Free Delivery</li>
            </ul>
          </div>
          <div class="price-card">
            <h3>Extra Large Load</h3>
            <div class="price">RM40</div>
            <p class="weight-range">23kg - 28kg</p>
            <ul>
              <li>Wash & Fold</li>
              <li>48hr Turnaround</li>
              <li>Free Delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
`

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
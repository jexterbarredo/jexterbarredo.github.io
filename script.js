let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');
const planetInfoBox = document.getElementById('planet-info');
const contactForm = document.getElementById('contactForm');
const submissionSuccessMessage = document.getElementById('submissionSuccess');

// Navbar hide/show on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 80) { // Scroll down
    navbar.classList.add('hidden');
  } else { // Scroll up
    navbar.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});

// Planet data for interactive display
const planetData = {
  sun: {
    name: "The Sun",
    description: "Our star, the Sun, is a yellow dwarf star at the center of the Solar System. It provides Earth with light and heat, essential for life. Its immense gravity holds the planets in orbit."
  },
  mercury: {
    name: "Mercury",
    description: "The smallest planet in our solar system and closest to the Sun. It has a heavily cratered surface, resembling Earth's Moon, and experiences extreme temperature variations."
  },
  venus: {
    name: "Venus",
    description: "Known as Earth's 'sister planet' due to its similar size and mass. It has a thick, toxic atmosphere of carbon dioxide and sulfuric acid clouds, resulting in a runaway greenhouse effect."
  },
  earth: {
    name: "Earth",
    description: "Our home planet, the third from the Sun. It is the only known celestial body to harbor life, characterized by vast oceans, diverse ecosystems, and a protective atmosphere."
  },
  mars: {
    name: "Mars",
    description: "Often called the 'Red Planet' due to its reddish appearance from iron oxide on its surface. Mars has polar ice caps, volcanoes, and canyons, with evidence of ancient water."
  },
  jupiter: {
    name: "Jupiter",
    description: "The largest planet in our solar system, a gas giant known for its Great Red Spot, a persistent colossal storm. It has a strong magnetic field and many moons, including the four Galilean moons."
  },
  saturn: {
    name: "Saturn",
    description: "Famous for its stunning system of rings, composed mainly of ice particles and rocky debris. Saturn is a gas giant with a pale yellow hue and is the second-largest planet."
  },
  uranus: {
    name: "Uranus",
    description: "An ice giant known for its unique sideways rotation, appearing to roll around the Sun. Its atmosphere is composed of hydrogen, helium, and methane, giving it a blue-green color."
  },
  neptune: {
    name: "Neptune",
    description: "The farthest known planet from the Sun, an ice giant with strong winds and large, dark storms. It has a deep blue color due to methane in its atmosphere and a faint ring system."
  }
};

// Add click listeners to planets
document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('click', function() {
    const planetKey = this.dataset.planet;
    const info = planetData[planetKey];

    if (info) {
      planetInfoBox.innerHTML = `<h3>${info.name}</h3><p>${info.description}</p>`;
      planetInfoBox.classList.add('active'); // Show info box
      planetInfoBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to it
    }
  });
});

// Form submission handler
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  // Simulate sending data (in a real app, you'd send this to a server)
  console.log('Form Submitted:', { name, email, mobile });

  // Show success message
  submissionSuccessMessage.classList.add('show');

  // Clear the form
  contactForm.reset();

  // Hide success message after a few seconds
  setTimeout(() => {
    submissionSuccessMessage.classList.remove('show');
  }, 3000);
});
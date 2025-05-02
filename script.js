// === Event Handling ===
document.getElementById('clickBtn').onclick = () => {
  alert('🎉 You clicked the button!');
};

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => hoverBox.style.background = '#c8e6c9');
hoverBox.addEventListener('mouseleave', () => hoverBox.style.background = '#e0f7fa');

document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log('You typed:', e.key);
});

document.getElementById('secretAction').addEventListener('dblclick', () => {
  alert('🤫 You discovered a secret!');
});

// === Interactive Elements ===
document.getElementById('colorChangeBtn').addEventListener('click', function () {
  this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

document.querySelectorAll('.tabBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabBtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tabContent').forEach(tc => tc.classList.add('hidden'));
    document.getElementById(`tab${btn.dataset.tab}`).classList.remove('hidden');
  });
});

// Gallery
let galleryIndex = 1;
document.getElementById('nextImg').addEventListener('click', () => {
  galleryIndex++;
  const img = document.getElementById('galleryImg');
  img.src = `https://picsum.photos/300/200?random=${galleryIndex}`;
});

// === Form Validation ===
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value.trim();

  if (!username) {
    feedback.textContent = '❌ Username is required.';
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    feedback.textContent = '❌ Invalid email format.';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = '❌ Password must be at least 8 characters.';
    return;
  }

  feedback.textContent = '✅ Success! Form looks good.';
});

document.getElementById('password').addEventListener('input', function () {
  const val = this.value;
  feedback.textContent = val.length < 8 ? 'Password too short.' : '✅ Password strength OK.';
});


const showModalBtn = document.getElementById('showModalBtn');
const modal = document.getElementById('customModal');
const closeModalBtn = document.getElementById('closeModalBtn');

showModalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

//  Close modal when clicking outside content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


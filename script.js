// Gerenciamento de modo escuro e claro
document.getElementById('darkModeToggle').addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked);
});

// Troca de páginas
const pages = {
  feed: `<h2>Feed Principal</h2><p>Aqui aparecem músicas e álbuns dos usuários seguidos.</p>`,
  favoritas: `<h2>Favoritas</h2><p>Suas músicas favoritas aparecerão aqui.</p>`,
  playlists: `<h2>Playlists</h2><p>Suas playlists criadas e salvas.</p>`,
  perfil: `<h2>Perfil</h2><p>Informações do usuário e histórico musical.</p>`
};

const content = document.getElementById('content');
document.querySelectorAll('.menu li').forEach(li => {
  li.addEventListener('click', () => {
    content.innerHTML = pages[li.dataset.page];
  });
});

// Inicializa feed padrão
content.innerHTML = pages.feed;

// Modal
const fab = document.getElementById('fab');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalInput = document.getElementById('modalInput');
const modalSave = document.getElementById('modalSave');

fab.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modalTitle.textContent = 'Nova Playlist / Comentário';
});
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modalSave.addEventListener('click', () => {
  const text = modalInput.value.trim();
  if (text) alert('Conteúdo salvo: ' + text);
  modalInput.value = '';
  modal.classList.add('hidden');
});
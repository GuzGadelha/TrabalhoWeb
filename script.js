(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {
    const toggleId = 'botaoModoEscuro';
    const toggle = document.getElementById(toggleId);

    const saved = localStorage.getItem('modoEscuro');
    if (saved === 'true') document.body.classList.add('dark');

    if (toggle) {
      toggle.checked = (saved === 'true');

      toggle.addEventListener('change', (e) => {
        const checked = !!e.target.checked;
        document.body.classList.toggle('dark', checked);
        localStorage.setItem('modoEscuro', checked);
      });
    }

    const menuLinks = document.querySelectorAll('.menu a[href]');
    if (menuLinks.length) {
      const current = (location.pathname || '').split('/').pop() || 'index.html';
      menuLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href === current || (href === 'index.html' && current === '')) {
          a.parentElement.classList.add('active');
        } else {
          a.parentElement.classList.remove('active');
        }
      });
    }

    const fab = document.getElementById('fab');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalInput = document.getElementById('modalInput');
    const modalSave = document.getElementById('modalSave');

    if (fab && modal) {
      fab.addEventListener('click', () => {
        modal.classList.remove('hidden');
        
        let title = "Nova Postagem";
        if (document.title === "Playlists") title = "Nova Playlist";
        if (document.title === "Social Music") title = "Novo Comentário";
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalInput) modalInput.focus();
      });
    }

    if (closeModal && modal) {
      closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    }

    if (modalSave && modal && modalInput) {
      modalSave.addEventListener('click', () => {
        const text = modalInput.value.trim();
        if (text) {
          
          if (document.title === "Playlists") {
            const novaPlaylist = {
              id: "p" + (mockPlaylists.length + 1),
              donoId: mockUsuario.id,
              titulo: text,
              privado: false,
              musicas: []
            };
            mockPlaylists.push(novaPlaylist);
            localStorage.setItem('minhasPlaylists', JSON.stringify(mockPlaylists));
          }
          
          if (document.title === "Social Music") {
             const novoComentario = {
                id: "c" + (mockComentarios.length + 1),
                origemId: mockUsuario.id,
                origemNome: mockUsuario.nome,
                conteudo: text,
                musicaId: "m-geral"
             };
             mockComentarios.push(novoComentario);
             localStorage.setItem('meusComentarios', JSON.stringify(mockComentarios));
          }
          
          location.reload();
        }
        modalInput.value = '';
        modal.classList.add('hidden');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
      }
    });
    
    const contentArea = document.getElementById('content');
    if (!contentArea) return;

    if (document.title === "Perfil") {
      document.getElementById('profile-pic').src = mockUsuario.avatarUrl;
      document.getElementById('profile-name').textContent = mockUsuario.nome;
      document.getElementById('profile-email').textContent = mockUsuario.email;
      
      const minhasPlaylists = mockPlaylists.filter(p => p.donoId === mockUsuario.id);
      const meusComentarios = mockComentarios.filter(c => c.origemId === mockUsuario.id);
      
      document.getElementById('stat-playlists').textContent = minhasPlaylists.length;
      document.getElementById('stat-comentarios').textContent = meusComentarios.length;
      document.getElementById('stat-favoritas').textContent = mockFavoritas.length;
    
      const activityFeed = document.getElementById('activity-feed');
      activityFeed.innerHTML = '';
      
      meusComentarios.slice().reverse().forEach(comentario => {
        const comentCard = document.createElement('div');
        comentCard.className = 'comment-card';
        comentCard.innerHTML = `<p><strong>${comentario.origemNome}</strong> disse:</p><p>${comentario.conteudo}</p>`;
        activityFeed.appendChild(comentCard);
      });
    }

    if (document.title === "Playlists") {
      const minhasPlaylists = mockPlaylists.filter(p => p.donoId === mockUsuario.id);

      if (minhasPlaylists.length > 0) {
        contentArea.innerHTML = '<h2>Playlists</h2>'; 

        minhasPlaylists.forEach(playlist => {
          const playlistCard = document.createElement('div');
          playlistCard.className = 'playlist-card'; 
          playlistCard.innerHTML = `
            <h3>${playlist.titulo}</h3>
            <p>${playlist.musicas.length} músicas</p>
            <span>${playlist.privado ? 'Privada' : 'Pública'}</span>
          `;
          contentArea.appendChild(playlistCard);
        });
      } else {
        contentArea.innerHTML = '<h2>Playlists</h2><p>Você ainda não criou nenhuma playlist.</p>';
      }
    }

    if (document.title === "Favoritas") {
        const minhasFavoritas = mockMusicas.filter(m => mockFavoritas.includes(m.id));

        if (minhasFavoritas.length > 0) {
            contentArea.innerHTML = '<h2>Favoritas</h2>'; 
    
            minhasFavoritas.forEach(musica => {
              const musicaCard = document.createElement('div');
              musicaCard.className = 'music-card';
              musicaCard.innerHTML = `
                <h3>${musica.nome}</h3>
                <p>${musica.autor}</p>
                <span>${musica.album}</span>
              `;
              contentArea.appendChild(musicaCard);
            });
          } else {
            contentArea.innerHTML = '<h2>Favoritas</h2><p>Você ainda não favoritou nenhuma música.</p>';
          }
    }

    if (document.title === "Social Music") {
        contentArea.innerHTML = '<h2>Pagina principal</h2>';
        
        const feedGeral = document.createElement('div');
        feedGeral.id = 'feed-container';
        contentArea.appendChild(feedGeral);

        mockComentarios.slice().reverse().forEach(comentario => {
            const comentCard = document.createElement('div');
            comentCard.className = 'comment-card';
            comentCard.innerHTML = `<p><strong>${comentario.origemNome}</strong> postou:</p><p>${comentario.conteudo}</p>`;
            feedGeral.appendChild(comentCard);
        });
    }

  });
})();
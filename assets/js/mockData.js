// Simula o usuário que "fez login"
const mockUsuario = {
  id: "aluno1",
  email: "aluno@faculdade.com",
  nome: "rafael donatelo michelangelo leonardo",
  // Adicione uma foto de perfil de placeholder
  avatarUrl: "https://i.pravatar.cc/150" 
};

// Simula músicas 
let mockMusicas = [
  { id: "m1", nome: "Stairway To Heaven", autor: "Led Zepellin", album: "Led Zepellin IV" },
  { id: "m2", nome: "Do for Love", autor: "TuPac", album: "Single" },
  { id: "m3", nome: "Chicago", autor: "Michael Jackson", album: "Xscape" },
  { id: "m4", nome: "Neutron Star Colision", autor: "muse", album:"Black Holes & Revelations"}
];

// Simula playlists 
let mockPlaylists = [
  { 
    id: "p1", 
    donoId: "Zé Beto", 
    titulo: "Pra chorar e ficar calado!", 
    privado: false, 
    musicas: ["m1", ""] // Lista de IDs de mockMusicas
  },
  { 
    id: "p2", 
    donoId: "Jennifer Alonso", 
    titulo: "White Girl Problems", 
    privado: true, 
    musicas: ["Party in U.S.A.", "I kiss a girl", ""]
  }
];

// Simula comentários
let mockComentarios = [
  { 
    id: "c1", 
    origemId: "u1", 
    origemNome: "Gabriela Azevedo",
    conteudo: "Minha música favorita!", 
    musicaId: "m4",
    avaliacao: 5
  },

  { 
    id: "c2", 
    origemId: mockUsuario.id, 
    origemNome: mockUsuario.nome,
    conteudo: "Michael sempre será o rei!", 
    musicaId: "m3", 
    avaliacao: 4
  }



];

const mockFavoritas = ["m1", "m2"];
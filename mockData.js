// Simula o usuário que "fez login"
const mockUsuario = {
  id: "aluno1",
  email: "aluno@faculdade.com",
  nome: "rafael donatelo michelangelo leonardo",
  // Adicione uma foto de perfil de placeholder
  avatarUrl: "https://i.pravatar.cc/150" 
};

// Simula músicas (baseado na classe Musica do UML)
let mockMusicas = [
  { id: "m1", nome: "Stairway To Heaven", autor: "Led Zepellin", album: "Led Zepellin IV" },
  { id: "m2", nome: "Do for Love", autor: "TuPac", album: "Single" },
  { id: "m3", nome: "Chicago", autor: "Michael Jackson", album: "Xscape" }
];

// Simula playlists (baseado na classe Playlist do UML)
// Usamos "let" para poder adicionar/remover itens
let mockPlaylists = [
  { 
    id: "p1", 
    donoId: "Zé Beto", 
    titulo: "Pra chorar e ficar calado!", 
    privado: false, 
    musicas: ["Tempo Perdido", "borboletas"] // Lista de IDs de mockMusicas
  },
  { 
    id: "p2", 
    donoId: "Jennifer Alonso", 
    titulo: "White Girl Problems", 
    privado: true, 
    musicas: ["Party in U.S.A."]
  }
];

// Simula comentários (baseado na classe Comentarios do UML)
let mockComentarios = [
  { 
    id: "c1", 
    origemId: "u1", // ID do mockUsuario
    origemNome: "Gabriela Azevedo",
    conteudo: "Adorei essa música!", 
    musicaId: "Neutron Star Colision" // Comentário na "Música Exemplo 1"
  }
];
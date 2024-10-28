let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  function calcularMedia(atletas) {
    atletas.forEach(atleta => {
      // Ordenar as notas
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
      // Eliminar a maior e a menor nota
      let notasComputadas = notasOrdenadas.slice(1, 4);
      // Calcular a média
      let somaNotas = notasComputadas.reduce((acc, nota) => acc + nota, 0);
      let media = somaNotas / notasComputadas.length;
  
      // Apresentar os resultados
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
      console.log(`Média Válida: ${media}`);
      console.log(''); // Linha em branco para separar os atletas
    });
  }
  
  calcularMedia(atletas);
  
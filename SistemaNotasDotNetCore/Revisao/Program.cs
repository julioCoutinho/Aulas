using System;

namespace Revisao
{
    class Program
    {
        
        static void Main(string[] args){
            Aluno[] alunos = new Aluno[5];
            int indiceAluno = 0; 
            string opUsuario = ObterOpcaoUsuario();

            while (opUsuario.ToUpper() != "X"){
                switch (opUsuario){
                    case "1":
                        Aluno aluno = new Aluno();
                        Console.Write("Informe o nome do aluno: ");
                        aluno.nome = Console.ReadLine();

                        Console.Write("Informe a nota do aluno "+ aluno.nome+": ");
                        if(decimal.TryParse(Console.ReadLine(), out decimal nota)){
                            aluno.nota = nota;
                        }else{
                            throw new ArgumentException("O valor da nota deve ser decimal.");
                        }

                        alunos[indiceAluno] = aluno;
                        indiceAluno++;
                        break;
                    case "2":
                        for(int i = 0; i < indiceAluno; i++)
                        {
                            Console.WriteLine($"Aluno: {alunos[i].nome} - Nota {alunos[i].nota} ");
                        }
                        Console.WriteLine();
                        break;
                    case "3":
                        decimal media = 0;
                        for(int i = 0; i < indiceAluno; i++){
                            media += alunos[i].nota;
                        }
                        media = media / indiceAluno;

                        Conceito conceito;

                        if (media < 2){
                            conceito = Conceito.E;
                        }else if( media < 4){
                            conceito = Conceito.D;
                        }else if(media < 6){
                            conceito = Conceito.C;
                        }else if(media < 8){
                            conceito = Conceito.B;
                        }else{
                            conceito = Conceito.A;
                        }

                        Console.WriteLine($"A média dos alunos é de: {media} - Conceito: {conceito}");

                        break;
                    default:
                        throw new ArgumentOutOfRangeException("Informe um valor de 1 a 3.");
                }
                opUsuario = ObterOpcaoUsuario();    
            }
            

        }

        private static string ObterOpcaoUsuario(){
            Console.WriteLine("Informe a opção desejada: ");
            Console.WriteLine("1 - Inserir novo aluno.");
            Console.WriteLine("2 - Listar alunos");
            Console.WriteLine("3 - Calcular média geral");
            Console.WriteLine("X - Sair");
            Console.WriteLine("");

            string opUsuario = Console.ReadLine();
            return opUsuario;
        }
    }
}

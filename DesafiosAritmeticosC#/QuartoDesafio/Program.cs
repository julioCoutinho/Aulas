using System; 

class minhaClasse {

    static void Main(string[] args) { 

            int diaInicio, diaTermino, horaMomentoInicio, minutoMomentoInicio, segundoMomentoInicio;
            int horaMomentoTermino, minutoMomentoTermino, segundoMomentoTerminio;
            //continue escrevendo a solucao

            string[] dadosInicio = Console.ReadLine().Split();
            diaInicio = Convert.ToInt32(dadosInicio[1]);

            string[] dadosMomentoInicio = Console.ReadLine().Split();
            horaMomentoInicio = Convert.ToInt32(dadosMomentoInicio[0]);
            minutoMomentoInicio = Convert.ToInt32(dadosMomentoInicio[2]);
            segundoMomentoInicio = Convert.ToInt32(dadosMomentoInicio[4]);

            string[] dadosTermino = Console.ReadLine().Split();
            diaTermino = Convert.ToInt32(dadosTermino[1]);

            string[] dadosMomentoTermino = Console.ReadLine().Split();
            horaMomentoTermino = Convert.ToInt32(dadosMomentoTermino[0]);
            minutoMomentoTermino = Convert.ToInt32(dadosMomentoTermino[2]);
            segundoMomentoTerminio = Convert.ToInt32(dadosMomentoTermino[4]);

            int transformaSegundosInicio = (diaInicio * 86400) + (horaMomentoInicio * 3600) + (minutoMomentoInicio * 60) + segundoMomentoInicio;
            int transformaSegundosTermino = (diaTermino * 86400) + (horaMomentoTermino * 3600) + (minutoMomentoTermino * 60) + segundoMomentoTerminio;

            int somaTotalSegundos = (transformaSegundosTermino - transformaSegundosInicio);
            
            
            
            int diaAtual = somaTotalSegundos / 86400;
            somaTotalSegundos = somaTotalSegundos - (diaAtual * 86400);
            
            int horasAtual = somaTotalSegundos / 3600;
            somaTotalSegundos = somaTotalSegundos - (horasAtual * 3600);
            
            int minutosAtual =  somaTotalSegundos / 60;
            somaTotalSegundos = somaTotalSegundos - (minutosAtual * 60);
           
          

            Console.WriteLine("{0} dia(s)", diaAtual);
            Console.WriteLine("{0} hora(s)", horasAtual);
            Console.WriteLine("{0} minuto(s)", minutosAtual);
            Console.WriteLine("{0} segundo(s)", somaTotalSegundos);



    }

}
using System;

namespace SistemaCalculaSalario
{
    class Program
    {
        static void Main(string[] args)
        {
            double salario, reajuste, novoSalario, percentual;
            salario = Convert.ToDouble(Console.ReadLine());

            //insira os valores corretos de acordo com o enunciado

            if(salario >= 0 && salario <= 400)
            {
                reajuste = salario * 0.15; 
                novoSalario = salario + reajuste;
                percentual = ((novoSalario - salario) * 100) /salario;
                Console.WriteLine("Novo salario: {0:0.00}", novoSalario);
                Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste);
                if(salario == 0){
                  Console.WriteLine("Em percentual: 15 %");
                }else{
                  Console.WriteLine("Em percentual: {0:0} %", percentual);
                }
            }
            else if (salario > 400 && salario <= 800)
            {
                reajuste = salario * 0.12;
                novoSalario = salario + reajuste;
                percentual = ((novoSalario - salario) * 100) / salario;
                Console.WriteLine("Novo salario: {0:0.00}", novoSalario);
                Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste);
                Console.WriteLine("Em percentual: {0:0} %", percentual);
            }
            else if (salario > 800 && salario <= 1200)
            {
                reajuste = salario * 0.10;
                novoSalario = salario + reajuste;
                percentual = ((novoSalario - salario) * 100) / salario;
                Console.WriteLine("Novo salario: {0:0.00}", novoSalario);
                Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste);
                Console.WriteLine("Em percentual: {0:0} %", percentual);
            }
            else if (salario > 1200 && salario <= 2000)
            {
                reajuste = salario * 0.07;
                novoSalario = salario + reajuste;
                percentual = ((novoSalario - salario) * 100) / salario;
                Console.WriteLine("Novo salario: {0:0.00}", novoSalario);
                Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste);
                Console.WriteLine("Em percentual: {0:0} %", percentual);
            }
            else
            {
                reajuste = salario * 0.04;
                novoSalario = salario + reajuste;
                percentual = ((novoSalario - salario) * 100) / salario;
                Console.WriteLine("Novo salario: {0:0.00}", novoSalario);
                Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste);
                Console.WriteLine("Em percentual: {0:0} %", percentual);
            }
        }

    }
}

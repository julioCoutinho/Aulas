using System;
using System.Collections.Generic;

namespace Dio.Bank
{
    class Program
    {
        static List<Conta> listContas = new List<Conta>();
        static void Main(string[] args)
        {
            string opcaoUsuario = ObterOpcaoUsuario();

            while(opcaoUsuario.ToUpper() != "X"){
                switch(opcaoUsuario){
                    case "1":
                        ListarContas();
                        break;
                    case "2":
                        InserirConta();
                        break;
                    case "3":
                        Transferir();
                        break;
                    case "4":
                        Sacar();
                        break;
                    case "5":
                        Depositar();
                        break;
                    case "C":
                        Console.Clear();
                        break;

                    default:
                        throw new ArgumentOutOfRangeException();
                }
                opcaoUsuario = ObterOpcaoUsuario();
            }

            Console.WriteLine("Obrigado por utilizar nossos serviços.");
            Console.ReadLine();

        }

        private static void Transferir()
        {
            Console.WriteLine("Transferir");

            Console.Write("Digite o número da conta de origem: ");
            int indiceContaOrigem = int.Parse(Console.ReadLine());

            Console.Write("Digite o número da conta de destino: ");
            int indiceContaDestino = int.Parse(Console.ReadLine());

            Console.Write("Informe o valor a ser transferido: ");
            double valorTransferido = double.Parse(Console.ReadLine());

            listContas[indiceContaOrigem].Transferir(valorTransferido,listContas[indiceContaDestino]);
        }

        private static void Depositar()
        {
            Console.WriteLine("Depositar");
            Console.Write("Digite o número da conta: ");
            int indiceConta = int.Parse(Console.ReadLine());

            Console.Write("Digite o valor a ser depositado: ");
            double valorDeposito = double.Parse(Console.ReadLine());

            listContas[indiceConta].Depositar(valorDeposito);
        }

        private static void Sacar()
        {
            Console.WriteLine("Sacar");
            Console.Write("Digite o número da conta: ");
            int indiceConta = int.Parse(Console.ReadLine());

            Console.Write("Digite o valor a ser sacado: ");
            double valorSacar = double.Parse(Console.ReadLine());

            listContas[indiceConta].Sacar(valorSacar);
        }

        private static void InserirConta()
        {
            Console.WriteLine("Inserir nova conta");
            
            Console.Write("Digite 1 para conta Física ou 2 para juridica: ");
            int entradaTipoConta = int.Parse(Console.ReadLine());

            Console.Write("Digite o nome do cliente: ");
            string entradaNome = Console.ReadLine();

            Console.Write("Digite o saldo inicial: ");
            double entradaSaldo = double.Parse(Console.ReadLine());

            Console.Write("Digite o crédito: ");
            double entradaCredito = double.Parse(Console.ReadLine());


            Conta novaConta = new Conta(entradaNome,(TipoConta)entradaTipoConta,entradaSaldo,entradaCredito);

            listContas.Add(novaConta);

        }

        private static void ListarContas()
        {
            Console.WriteLine("Listar Contas");
            
            if(listContas.Count == 0){
                Console.WriteLine("Nenhuma conta cadastrada. ");
                return;
            }

            int cont = 0;
            foreach (Conta conta in listContas){
                Console.Write("#{0} - ", cont);
                Console.WriteLine(conta);
                cont++;
            }
        }

        private static string ObterOpcaoUsuario(){
            Console.WriteLine();
            Console.WriteLine("DIO Bank a seu dispor!!!");
            Console.WriteLine("Informe a opção desejada: ");

            Console.WriteLine("1 - Listar contas");
            Console.WriteLine("2 - inserir nova conta");
            Console.WriteLine("3 - Transferir");
            Console.WriteLine("4 - Sacar");
            Console.WriteLine("5 - Depositar");
            Console.WriteLine("C - Limpar Tela");
            Console.WriteLine("X - Sair");

            string opcaoUsuario = Console.ReadLine().ToUpper();
            Console.WriteLine();
            return opcaoUsuario;
        }
    }
}

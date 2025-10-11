using System;
using System.Collections.Generic;
using System.Linq;

namespace DesafioProjetoHospedagem.Models
{
    public class Reserva
    {
        public List<Pessoa> Hospedes { get; set; }
        public List<Suite> Suites { get; set; }
        public int DiasReservados { get; set; }

        public Reserva()
        {
            Hospedes = new List<Pessoa>();
            Suites = new List<Suite>();
        }

        public Reserva(int diasReservados)
        {
            DiasReservados = diasReservados;
            Hospedes = new List<Pessoa>();
            Suites = new List<Suite>();
        }
        
        public void CriarReservaInterativa()
        {
            Console.Clear();
            Console.WriteLine("--- Inicio da Nova Reserva ---");

            Suite primeiraSuite = EscolherSuite();
            if (primeiraSuite == null)
            {
                Console.WriteLine("Processo de reserva cancelado.");
                return;
            }
            Suites.Add(primeiraSuite);
            // CORRIGIDO: Variável e propriedade com nome correto
            Console.WriteLine($"\nSuíte '{primeiraSuite.TipoSuite}' selecionada. Capacidade para {primeiraSuite.Capacidade} pessoas.");

            PedirDiasReservados();
            CadastrarHospedesInterativo();

            Console.WriteLine("\n--- Reserva Finalizada ---");
            ApresentarResumo();
        }

        private Suite EscolherSuite()
        {
            Console.WriteLine("\nPor favor, escolha uma das nossas suítes:");
            Console.WriteLine("1. Normal (Capacidade: 3, Diária: R$150)");
            Console.WriteLine("2. Deluxe (Capacidade: 4, Diária: R$250)");
            Console.WriteLine("3. Presidencial (Capacidade: 6, Diária: R$1200)");
            Console.Write("Digite o número da suíte desejada: ");

            // CORRIGIDO: ReadLine com 'L' maiúsculo
            switch (Console.ReadLine())
            {
                case "1": return CatalogoSuites.Normal;
                case "2": return CatalogoSuites.Deluxe;
                case "3": return CatalogoSuites.Presidencial;
                default:
                    Console.WriteLine("Opção inválida.");
                    return null;
            }
        }

        private void PedirDiasReservados()
        {
            while (true)
            {
                Console.Write("\nPor quantos dias deseja fazer a reserva? ");
                if (int.TryParse(Console.ReadLine(), out int dias) && dias > 0)
                {
                    DiasReservados = dias;
                    return;
                }
                else
                {
                    Console.WriteLine("Entrada inválida. Por favor, digite um número de dias válido (maior que zero).");
                }
            }
        }

        private void CadastrarHospedesInterativo()
        {
            Console.WriteLine("\nAgora, vamos cadastrar os hóspedes.");
            while (true)
            {
                Console.Write("Digite o nome do hóspede (ou 'FIM' para parar): ");
                string nomeHospede = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(nomeHospede) || nomeHospede.ToUpper() == "FIM")
                {
                    break;
                }

                Hospedes.Add(new Pessoa(nome: nomeHospede));
                Console.WriteLine($"'{nomeHospede}' adicionado(a).");

                int capacidadeTotal = Suites.Sum(s => s.Capacidade);
                if (Hospedes.Count > capacidadeTotal)
                {
                    HandleCapacidadeExcedida();
                }
            }
        }

        private void HandleCapacidadeExcedida()
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            // CORRIGIDO: Usando a lista 'Suites' (plural) em vez do tipo 'Suite' (singular)
            Console.WriteLine($"\nAtenção! A capacidade de {Suites.Last().Capacidade} pessoas da suíte foi excedida.");
            Console.WriteLine("Você gostaria de alugar outra suíte para acomodar mais pessoas?");
            Console.ResetColor();
            Console.Write("Digite 'S' para alugar outra suíte ou 'N' para cancelar a reserva: ");

            string escolha = Console.ReadLine().ToUpper();
            if (escolha == "S")
            {
                // CORRIGIDO: Declaração da variável com o tipo correto 'Suite'
                Suite suiteAdicional = EscolherSuite();
                if (suiteAdicional != null)
                {
                    Suites.Add(suiteAdicional);
                    Console.WriteLine($"\nÓtima escolha! A suíte '{suiteAdicional.TipoSuite}' foi adicionada à sua reserva.");
                    int novaCapacidadeTotal = Suites.Sum(s => s.Capacidade);
                    // CORRIGIDO: String formatada com '$' antes das aspas
                    Console.WriteLine($"Sua nova capacidade total é de {novaCapacidadeTotal} pessoas.");
                }
                else
                {
                    Console.WriteLine("\nNenhuma suíte adicional foi selecionada. O cadastro de hóspedes continuará com a capacidade atual.");
                }
            }
            else
            {
                Console.WriteLine("\nReserva cancelada. Nenhum hóspede foi registrado.");
                Hospedes.Clear();
                Suites.Clear();
                throw new OperationCanceledException("Reserva cancelada pelo usuário.");
            }
        }

        public void ApresentarResumo()
        {
            if (Hospedes.Any() && Suites.Any())
            {
                Console.WriteLine($"\nResumo da Reserva:");
                Console.WriteLine($"Hóspedes ({Hospedes.Count}): {string.Join(", ", Hospedes.Select(h => h.Nome))}");
                Console.WriteLine($"Suítes ({Suites.Count}): {string.Join(", ", Suites.Select(s => s.TipoSuite))}");
                Console.WriteLine($"Capacidade Total: {Suites.Sum(s => s.Capacidade)}");
                Console.WriteLine($"Dias Reservados: {DiasReservados}");
                
                decimal valorFinal = CalcularValorTotal(); // CORRIGIDO: Chamando o método renomeado
                Console.WriteLine($"Valor Total: {valorFinal.ToString("C")}");

                if (DiasReservados >= 10)
                {
                    Console.WriteLine("--> (Desconto de 10% aplicado para estadias de 10 dias ou mais!)");
                }
            }
        }

        // CORRIGIDO: Método renomeado para maior clareza
        public decimal CalcularValorTotal()
        {
            decimal valorDasDiarias = Suites.Sum(s => s.ValorDiaria);
            decimal valorTotal = valorDasDiarias * DiasReservados;

            if (DiasReservados >= 10)
            {
                valorTotal *= 0.90m;
            }

            return valorTotal;
        }
    }
}
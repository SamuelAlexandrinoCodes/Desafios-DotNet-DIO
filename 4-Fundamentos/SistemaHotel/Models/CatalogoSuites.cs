using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesafioProjetoHospedagem.Models
{
    public static class CatalogoSuites
    {
        // Usamos 'static readonly' para criar instâncias fixas e imutáveis
        // que são carregadas uma vez quando o programa começa.

        public static readonly Suite Deluxe = new Suite(
            tipoSuite: "Deluxe",
            capacidade: 4,
            valorDiaria: 250
        );
        public static readonly Suite Normal = new Suite(
        tipoSuite: "Normal",
        capacidade: 3,
        valorDiaria: 150
        );
        public static readonly Suite Presidencial = new Suite(
        tipoSuite: "Presidencial",
        capacidade: 6,
        valorDiaria: 1200
        );
    }
}
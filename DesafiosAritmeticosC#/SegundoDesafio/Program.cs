﻿using System;
using System.Collections.Generic;

class minhaClasse {

    static void Main(string[] args) { 

            int t = Convert.ToInt32(Console.ReadLine());
            int pa, pb;
            double cpa, cpb;
            int anos;
            
            for (int i = 0; i < t; i++)
            {
                anos = 0;
                string[] valores = Console.ReadLine().Split();
                pa = int.Parse(valores[0]);
                pb = int.Parse(valores[1]);
               
                cpa = double.Parse(valores[2]);
                cpb = double.Parse(valores[3]);
                
                while (pa <= pb)
                {
                    pa = pa + (int)(pa * cpa/100);
                    pb = pb + (int)(pb * cpb/100);
                    
                    anos++;
                    if (anos > 100)
                    {
                       Console.WriteLine("Mais de 1 seculo.");
                       break;
                    }
                }

                if (anos <= 100)
                {
                    Console.WriteLine("{0} anos.", anos);
                   
                }

            }

    }

}
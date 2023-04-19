import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            int op; 
            int id_n, id_b, id_1, id_2, id_3;

            id_n = 0; 
            id_b = 0; 
            id_1 = 0; 
            id_2 = 0; 
            id_3 = 0;

            System.out.println("Codificação");
            System.out.println("-----------");
            System.out.println("");
            
            do{
                System.out.println("[1]- Candidato_1");
                System.out.println("[2]- Candidato_2");
                System.out.println("[3]- Candidato_3");
                System.out.println("[4]- Voto nulo");
                System.out.println("[5]- VotoEm Branco");
                System.out.println("[0]- Terminar");
                System.out.print("opcao: ");
                op = ler.nextInt();
                
                switch(op) {
                    case 1: id_1++; break;
                    case 2: id_2++; break;
                    case 3: id_3++; break;
                    case 4: id_n++; break;
                    case 5: id_b++; break;
                    case 0: System.out.println("Obrigado pela sua contribuição.");
                    default: System.out.println("Operação invalida! Selecione um valor de [0 - 5]");
                }
            }while(op != 0);

            System.out.printf("Total de votos candidato_1 = %d. ", id_1);
            System.out.printf("Total de votos candidato_2 = %d. ", id_2);
            System.out.printf("Total de votos candidato_3 = %d. ", id_3);
            System.out.printf("Total de votos candidato_4 = %d. ", id_n);
            System.out.printf("Total de votos candidato_4 = %d. ", id_b);
        }

    }
}

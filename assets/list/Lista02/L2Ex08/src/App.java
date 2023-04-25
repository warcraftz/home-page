import java.util.Scanner;

public class App {
    public static void main(String[] args) {  
        try(Scanner read = new Scanner(System.in)){

            System.out.println("=====================================================================================================");
            System.out.println("          [SHOW]           |          [PREÇO POR PESSOA]           |          [DATA E HOTA]          ");
            System.out.println("=====================================================================================================");
            System.out.println("[1]- Tao Tui               |                15000                  |        03/04/2023 21:00         ");
            System.out.println("-----------------------------------------------------------------------------------------------------");
            System.out.println("[2]- Mini Band e os Amigos |                3500                   |        04/04/2023 17:00         ");
            System.out.println("-----------------------------------------------------------------------------------------------------");
            System.out.println("[3]- Kalê                  |                5000                   |        12/04/2023 18:00         ");
            System.out.println("-----------------------------------------------------------------------------------------------------");
            System.out.println("[4]- RAIO de Luz           |                12000                  |        14/04/2023 18:00         ");
            System.out.println("=====================================================================================================");

            // variveis
            String data1 = "03/04/2023 21:00", data2 = "04/04/2023 17:00", data3 = "12/04/2023 18:00", data4 = "14/04/2023 18:00";
            int show1 = 0, show2 = 0, show3 = 0, show4 = 0;

            int allPay = 0;
            
            System.out.print("Informe o total de Bilhetes: ");
            int allTicket = read.nextInt();

            // if reapet struct's allown!
            for(int i = 0; i < allTicket; i++){
                System.out.print("Digite o Id do Show: "); 
                int showID = read.nextInt();

                switch(showID){
                    case 1:
                        show1 = 1;
                        allPay = allPay + 15000;
                        break;
                    case 2:    
                        show2 = 1;
                        allPay = allPay + 3500;
                        break;
                    case 3:
                        show3 = 1;
                        allPay = allPay + 5000;
                        break;
                    case 4:
                        show4 = 1;
                        allPay = allPay + 12000;
                        break;
                }
            }


            System.out.printf("\n\n\n");            
            System.out.println("#### [RECIBO] ####");
            if(show1 == 1){
                System.out.printf("%s", data1);
                System.out.println("");
            }
            if(show2 == 1){
                System.out.printf("%s", data2);
                System.out.println("");
            }
            if(show3 == 1){
                System.out.printf("%s", data3);
                System.out.println("");
            }
            if(show4 == 1){
                System.out.printf("%s", data4);
                System.out.println("");
            }
            
            System.out.printf("Total Debito %d", allPay);
        }
      }
}

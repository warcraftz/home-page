import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        try (Scanner read = new Scanner(System.in)){
            
            System.out.println("Exercicio -02");
            System.out.println("-------------");
            int num, maior, cont;
            cont = 0;
        
            System.out.println("Informe o número: ");
            num = read.nextInt();
            maior = num;

            for(cont = 1; cont <= 9; cont++){
                System.out.println("Informe o valor: ");
                num = read.nextInt();
        
                if(num > maior){
                    maior = num;
                }
            }

            System.out.println("");
            System.out.printf("Dos 10 números inseridos %d é o maior.", maior);
            System.out.println("");
        }
    }
}

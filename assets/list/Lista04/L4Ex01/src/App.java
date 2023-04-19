import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            
            int numb, cont, i, j;
            cont = 0;
            for(i = 0; i < 10; i++) {
                System.out.printf("Digite o %d numero: ", i);
                numb = ler.nextInt();
                for(j = 0; j < numb; j++) {
                    if((numb % j) == 0) {
                        cont++;
                    }

                    if(cont == 2){
                        System.out.printf("O numero %d é primo", numb);
                    }
                }
            }
        }

    }
}


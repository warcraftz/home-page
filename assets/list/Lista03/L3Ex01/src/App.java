import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner read = new Scanner(System.in)) {
            System.out.println("Exercicio -01");
            System.out.println("-------------");
            int numb, soma, i;
            
            i = 0;
            soma = 0;
            i++;
            
            System.out.print("Informe um número: ");
            numb = read.nextInt();

            while(numb != 99) {
                soma = soma + numb;
                
                System.out.println("Informe outro numero: ");
                numb = read.nextInt();
                i++;
            }
            System.out.println("");
            System.out.printf("%d / %d = %2d", soma, i, (soma / i));
            System.out.println("");
        }
    }
}

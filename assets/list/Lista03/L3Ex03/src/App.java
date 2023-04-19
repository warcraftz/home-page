import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        try(Scanner read = new Scanner(System.in)){
            System.out.println("Exercicio -03");
            System.out.println("-------------");

            int f_numb, f_cont = 1, fact;
            fact = 1;

            f_numb = read.nextInt(); System.out.println("Digite um número inteiro positivo: ");
           

            if(f_numb >= 1){
                while(f_cont <= f_numb) {
                    fact = fact * f_cont;
                    f_cont++;
                }
                System.out.printf("%d! = %d", f_numb, fact);
                System.out.println("");
            }else {
                while(f_numb < 0) {
                    System.out.println("Erro! Digite um número inteiro positivo.");
                    System.out.println("Digite um número inteiro positivo:");
                    f_numb = read.nextInt();

                    while(f_cont <= f_numb){
                        fact = fact * f_cont;
                        f_cont++;
                    }
                    System.out.printf("%d! = %d", f_numb, fact);
                    System.out.println("");
                }
            }
        }
    }
}

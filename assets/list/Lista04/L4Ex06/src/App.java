import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            int i, numb, prim = 1, seg = 4, terc = 4;

            System.out.print("Digite um numero: ");
            numb = ler.nextInt();
            for(i = 1; i < numb; i++){
                System.out.printf("%d,", prim);
                prim++;
                System.out.printf("%d,", seg);
                seg++;
                System.out.printf("%d, ", terc);
                terc++;
            }
        }
    }
}

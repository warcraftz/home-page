import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            int num, res;

            num = ler.nextInt();

            while(num > 0) {
                res = num % 10;
                num = num / 10;
                System.out.print(res);
            }
        }
    }
}
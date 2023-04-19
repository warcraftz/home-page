import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            int numb = 1000;
            while(numb % 11 != 5){
                numb++;
            }
            System.out.printf("%d é o quinto número maior que 1000 cujo o resto da divisão é 5", numb);
        }
    }
}

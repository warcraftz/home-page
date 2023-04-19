import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            int square;
            int qtdgrao;

            qtdgrao = 0;
            for(square = 1; square <= 64; square++) {
                if(square == 1){
                    qtdgrao = qtdgrao + square;
                }else{
                    qtdgrao = 2 * qtdgrao;
                }
                System.out.printf("%d ", qtdgrao);
            }
            System.out.printf("\n A Rainha deverá pagar ao monge um total %d de grãos de trigo.", qtdgrao);
        }
    }
}
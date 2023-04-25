import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try(Scanner read = new Scanner(System.in)){
            float [] vetor = new float [20];
            int sizeVetor = vetor.length;
            float addNum;

            for(int i = 0; i < 10; i++){
                System.out.printf("Digite o valor in position [%d / %d] = ", i, sizeVetor);
                addNum = read.nextFloat();
                vetor[i] = addNum;

                // prencher na orden inversa
                vetor[20 - (i + 1)] = addNum;
            }
            
            System.out.printf("\n\n\n");
            System.out.print("Vetor = ");
            for(int i = 0; i < 20; i++){
                System.out.printf("[%.1f]  ", vetor[i]);
                if(i == 9){System.out.printf("\n\n");}
            }
        }
    }
}

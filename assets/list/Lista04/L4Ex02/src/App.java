import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            
            int idade, peso, maior, i, somaId;
            double mediaId;
            maior = 0;

            for(i = 0; i <= 22; i++) {
                System.out.printf("Digite a idade  do %d º atleta: ", i);
                idade[i] = ler.nextInt();

                System.out.println("");
                
                System.out.printf("Digite o peso  do %d º atleta: ", i);
                peso[i] = ler.nextInt();

                somaId = somaId + idade[i];
                if(peso[i] > 80){
                    maior++;
                }
            }
            mediaId = somaId / 22; 
            System.out.printf("%d têm o peso maior que 80k", maior);
            System.out.printf("%f é a media das idades dos atletas.", mediaId);
        }

    }
}


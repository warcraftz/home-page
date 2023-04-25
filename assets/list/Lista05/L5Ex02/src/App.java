import java.util.Scanner;

public class App {
    /**
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        try(Scanner read = new Scanner(System.in)){
           float [][] table = new  float[5][3];
           float [] maxHeight = new float[5];
           float getMaxHight = 0;

           for(int i = 0; i < 5; i++){
            for(int j = 0; j < 3; j++){
                System.out.printf("Digite a altura do %dª atleta da Equipe_%d: ", (j+1), (i+1));
                table[i][j] = read.nextFloat();
                
                if((table[0][0]) > table[i][j]){
                    getMaxHight = table[0][0];
                }
                else{
                    getMaxHight = table[i][j];
                }

            }
            System.out.println("");
            maxHeight[i] = getMaxHight; 
           }

           for(int i = 0; i < 5; i++){
            System.out.printf("Equipe_%d - Maior Altura = %.2f\n", (i+1), maxHeight[i]);
           }
        }
    }
}

import java.util.Scanner;

public class App {
    /**
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        try(Scanner read = new Scanner(System.in)){
            float [][] mat5x5 = new  float[5][5];
            float somaColumn = 0, lineThreeMult = 1, someElPrimaryDiagonal = 0;

            for(int i = 0; i < 5; i++){
                for(int j = 0; j < 5; j++){
                    System.out.printf("Digite o valor na positão mat5x5[%d][%d]: ", (j+1), (i+1));
                    mat5x5[i][j] = read.nextFloat();
                }
            }
            
            // Do operation here
            for(int i = 0; i < 5; i++){
                for(int j = 0; j < 5; j++){
                    // soma colun  [1ª]
                    if(i == 2){lineThreeMult = lineThreeMult * mat5x5[i][j];}
                    if(i == j){someElPrimaryDiagonal = someElPrimaryDiagonal + mat5x5[i][j];}
                }
                somaColumn = somaColumn + mat5x5[i][0];
            } 
            
            for(int i = 0; i < 5; i++){
                for(int j = 0; j < 5; j++){
                    System.out.printf("%.1f     ", mat5x5[i][j]);
                }
                System.out.println("");
                System.out.println("");
                System.out.println("");
           }
           System.out.printf("%.1f soma da primeira coluna: \n", somaColumn);
           System.out.printf("%.2f Multiplicação da 3º linha: \n", lineThreeMult);
           System.out.printf("%.1f soma dos ELementos na Diagonal Principal: \n", someElPrimaryDiagonal);
        }
    }
}

/*
 ij
 11 12 13
 21 22 23
 31 32 33
 */
import java.util.Scanner;

public class App {
    public static void main(String[] args){
        try(Scanner read = new Scanner(System.in)){
            System.out.print("Digite um número impar: ");
            int n = read.nextInt();

            int [][] matnxn = new int [n][n];

            int i = 0, j = n/2;

            for(int k = 1; k <= n*n; k++){
                matnxn[i][j] = k;
                int new_i = (i-1+n) % n;
                int new_j = (j+1) % n;
                if (matnxn[new_i][new_j] != 0) {
                    i += 1;
                } else {
                    i = new_i;
                    j = new_j;
                }
            }

            for (int[] linha : matnxn) {
                for (int x : linha) {
                    System.out.print(x + " ");
                }
                System.out.println();
            }
        }
    }
}

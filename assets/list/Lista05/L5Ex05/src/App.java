import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args){
        try(Scanner read = new Scanner(System.in)){
            System.out.print("Define o tamanho da mtriz quadrada: ");
            int n = read.nextInt();
            System.out.println("======================================");

            String [][] matnxn = new String [n][n];
            int novo_i = 0, novo_j = 0;

            // Choice disign of matriz [1 - 3]
            System.out.println("Escola o estilo da matriz desejada:");
            System.out.println("[1]- Fig.1");
            System.out.println("[2]- Fig.2");
            System.out.println("[3]- Fig.3");
            System.out.print("op: ");
            int op = read.nextInt();

            switch(op){
                case 1:
                    // comad here
                    for(int i = 0; i < matnxn.length; i++){
                        novo_i++;
                        for(int j = 0; j < matnxn.length; j++){
                            if(i == j){
                                matnxn[i][j] = "*";
                            }else if((novo_i + (j+1)) == (matnxn.length + 1)){
                                matnxn[i][novo_j] = "*";
                            }else{
                                matnxn[i][j] = ".";
                            }
                            novo_j++;
                        }
                        novo_j = 0;
                    }
                    break;
                case 2:
                    int half = matnxn.length / 2;
                    for(int i = 0; i < half; i++){
                        matnxn[i][j]
                    }
                    break;
                case 3:
                    // comad here [half | meio]
                    //int half = matnxn.length / 2;
                    break;
                default: System.out.println("Operação invalida");
            }

            
             for (String[] linha : matnxn) {
                for (String x : linha) {
                    System.out.print(x + "   ");
                }
                System.out.println();
            }
        }
    }
}

import java.util.Scanner;

public class App {
    /**
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        try(Scanner read = new Scanner(System.in)){
            double x1, x2, y1, y2;
        
            System.out.print("Digite o valor de x1 e x2: ");
            x1 = read.nextInt();
            x2 = read.nextInt();

            System.out.println();

            System.out.print("Digite o valor de y1 e y2: ");
            y1 = read.nextInt();
            y2 = read.nextInt();

            System.out.println();

            double d = Math.sqrt( ((Math.pow(x1, 2)) - (Math.pow(x2, 2)) )) + ((Math.pow(y1, 2)) - (Math.pow(y2, 2)) );
            System.out.print("");
            System.out.printf("D(x,y) = %f", d);
        }

    }
}

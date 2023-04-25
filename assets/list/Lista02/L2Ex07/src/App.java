import java.util.Scanner;

public class App {
    public static void main(String[] args) {  
        try(Scanner read = new Scanner(System.in)){
            System.out.print(" Digite o valor da temperatura em Luanda, em graus Celsius: ");
            float valor = read.nextFloat();

            if(valor < 10){
                System.out.println("Muito Frio");
            }else if((valor > 10) && (valor > 17)){
                System.out.println("Frio");
            }else if((valor > 17) && (valor > 23)){
                System.out.println("Bom Tempo");
            }else if((valor > 23) && (valor > 27)){
                System.out.println("Calor");
            }else if(valor > 27){
                System.out.println("Perigo de exposição solar");
            }
        }
      }
}

import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {

        try(Scanner read = new Scanner(System.in)){

            // This program virify if numer is strong or donsen't
            // Ex: 145 = 1! + 4! +5! = 1 + 24 + 120 = 145

            int num, f_num, r_num, somafact;

            // init variable
            somafact = 0;

            System.out.print("Digite um número: ");
            num = read.nextInt();
            f_num = num;
            r_num = num;

            while(num > 0){
                f_num = num % 10;
                num = num / 10;

                int i = 1, fact = 1;

                while(i <= f_num){
                    fact = fact * i;
                    i++;
                }
                somafact = somafact + fact;
                System.out.printf("\n%d!= %d", f_num, fact);
            }

            System.out.printf("\nsoma_fact = %d", somafact);
            if(r_num == somafact) {
                System.out.printf("\n%d é um número [FORTE]", r_num);
            }else{
                System.out.printf("\n%d não é um número [FORTE]", r_num);
            }
        }
    }
}

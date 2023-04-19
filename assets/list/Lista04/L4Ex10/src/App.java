import java.util.Scanner;

class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)) {
            // DNVT
            String res;
            int num_cart, num_mult, mult_valor;
            
            do{
                System.out.println("Digite o número da carta de condução: ");
                num_cart = ler.nextInt();
                System.out.println("Digite o número da multa: ");
                num_mult = ler.nextInt();

                int i, mult_total = 0;
                for(i=0; i<=num_mult; i++){
                    System.out.println("Digite valor da %dª multa: ");
                    mult_valor = ler.nextInt();

                    mult_total = mult_total + mult_valor;
                }
                
                System.out.println("..........................................");
                System.out.println("Deja ler dados para outro mutorista?");
                res = ler.next();
                if(res == "s"){
                    System.out.println("RESULTADO");
                }
                else{
                    System.out.println(res);
                }
            }while(res == "n");
        }
    }
}

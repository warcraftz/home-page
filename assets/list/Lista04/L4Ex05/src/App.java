import java.util.Scanner;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)){
            int numb1, numb2, maior, menor, tryNumbers;
            tryNumbers = 0;

            System.out.print("Duster: Olá! :) \n");
            System.out.print("Duster: Chame seu amigo pra brincar no meu app :) \n");
            System.out.print("Duster: Regra. Um de vocês vai inserir um número, \nDuster: o outro deve adivinhar qual número é esse. Facil não é :)? \n");
            System.out.print("Duster: Não! ;(.\nDuster: Não te preocupes eu ajudo você ;). Vamos começar: \n");
            System.out.print("Duster: Pensa num número e insira aqui: ");
            numb1 = ler.nextInt();

            
            System.out.print("\nDuster: Agora deixe seu amigo fazer os chutes :).\n");
            System.out.print("Duster: Tentar adivinhar o número :). Digite seu chute: ");

            do{
                numb2 = ler.nextInt();
                System.out.println("");

                // This comands is to hold diference logic ;)
                if(numb2 > numb1){maior = numb2; menor = numb1;}
                else {maior = numb1;  menor = numb2;}

                // Apply diference logic...
                if((maior - menor) > 100){
                    System.out.println("Frio");
                } 
                if(((maior - menor) >= 50) && ((maior - menor) <= 100)){
                    System.out.println("Morno");
                }
                if((maior - menor) < 50){
                    System.out.println("Quente");
                }
                if(numb1 == numb2){
                    System.out.println("Acertou");
                }

                tryNumbers++;
            }while(numb1 != numb2);
            System.out.printf("Duster: Seu amigo levou %d chutes para descubrir o número que você pensou ;)", tryNumbers);
        }
    }
}
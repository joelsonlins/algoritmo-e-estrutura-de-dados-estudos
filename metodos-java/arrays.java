public class arrays {
    public static int somarNumerosPares(int[] numeros){
        int soma = 0;
        for(int numero : numeros){
            if (numero % 2 ==0){
                soma += numero;
            }
        }
        return soma;
    }

    public static void main(String[] args) {
        int[] array1 = {1, 2, 3, 4, 5};
        int[] array2 = {10, 13, 17, 20};

        System.out.println(somarNumerosPares(array1));
        System.out.println(somarNumerosPares(array2));
    }


}

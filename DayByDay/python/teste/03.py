def verificar_repetidos():
    numeros = []
    for _ in range(5):
        while True:
            try:
                num = int(input("Digite um número inteiro: "))
                numeros.append(num)
                break
            except ValueError:
                print("Digite apenas números inteiros, tente novamente!")

    repeticoes = {}
    for indice, numero in enumerate(numeros):
        if numero in repeticoes:
            repeticoes[numero].append(indice)
        else:
            repeticoes[numero] = [indice]

    tem_repetido = False
    for numero, indices in repeticoes.items():
        if len(indices) > 1:
            tem_repetido = True
            print(f"O número {numero} repete nas posições: {indices}")

    if not tem_repetido:
        print("Não há números repetidos nessa lista.")

verificar_repetidos()
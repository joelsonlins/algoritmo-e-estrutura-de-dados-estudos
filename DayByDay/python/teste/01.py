def soma_entre_numeros():
    while True:
        try:
            num01 = int(input("Digite o primeiro número: "))
            break
        except ValueError:
            print("Digite apenas números inteiros, tente novamente!")

    while True:
        try:
            num02 = int(input(f"Digite o segundo número. Obs: Ele deve ser maior que o anterior: "))
            if num02 > num01:
                break
            else:
                print(f"O segundo número deverá ser maior que {num01}. digite novamente.")
        except ValueError:
            print("Digite apenas números inteiros, tente novamente!")

    soma_total = 0
    for numero in range(num01, num02 + 1):
        soma_total = soma_total + numero

    print(f"A soma dos inteiros entre {num01} e {num02} é: {soma_total}")

soma_entre_numeros()
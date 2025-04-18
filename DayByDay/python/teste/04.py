def calcula_notas_finais(notas):
    notas_finais = []
    for nota in notas:
        if nota < 38:
            notas_finais.append(nota)
        else:
            multiplo = ((nota // 5) + 1) * 5
            diferenca = multiplo - nota
            if diferenca < 3:
                notas_finais.append(multiplo)
            else:
                notas_finais.append(nota)
    return notas_finais

notas_escolares = [73, 67.38, 33]
resultado = calcula_notas_finais(notas_escolares)
print(resultado)
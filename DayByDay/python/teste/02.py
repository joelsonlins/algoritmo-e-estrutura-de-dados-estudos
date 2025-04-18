# 2) Usando a seguinte lista de temperatutas [23.6, 37.9, 25.1, 19.0, 29.8],escreva código que identifique e retorne.a) Menor temperaturab) Maior temperaturac) Temperatura média



lista_temp = [23.6, 37.9, 25.1, 19.0, 29.8]

temp_minima = min(lista_temp)

temp_maxima = max(lista_temp)

soma_das_temp = sum(lista_temp)
total_de_temp = len(lista_temp)
media_temp = soma_das_temp / total_de_temp

print(f"Menor temperatura: {temp_minima}")
print(f"Maior temperatura: {temp_maxima}")
print(f"Temperatura média é: {media_temp:.2f}")


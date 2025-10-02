#Criar um projeto com expo sem modelo nenhum#
npx create-expo-app@3.4.2 --example blank

#Criar link entre PC e Celular para acessar via ExpoGO#
npx expo start --tunnel

#iniciar repositório git#
git init

#Adicionar mudanças feitas na branch do git#
git add .

#"Lançar" update na branch#
git commit -m "Mensagem do commit"

#Adicionar repositório do github no projeto#
git remote add origin https:/seurepositóriogithub

#Empurrar mudanças feitas para o repositório do github#
git push origin main

#Instalar pacotes pra usar no projeto#
npx expo install expo-sqlite expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
<Não esqueça de baixar apenas os que você vai usar>

#Import dos comandos para utilizar#
import { View, Text, Button, StyleSheet, FlatList, TextInput, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from 'expo-sqlite';
<Não esqueça de baixar apenas os que você vai usar>

#Modelo de DB base com população#
await db.execSync(`
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
INSERT INTO test (value, intValue) VALUES ('test1', 123);
INSERT INTO test (value, intValue) VALUES ('test2', 456);
INSERT INTO test (value, intValue) VALUES ('test3', 789);
`);

#Exmplicação de algumas propriedades#

- Hooks (Responsaveis por estabelecer os setValues em alguma variavel, principalmente as que vamos alterar no DB)
- Flatlist (Responsavel por criar a lista e extrair as informações de cada item composto em treinos)
data={treinos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        - {item.atividade} | Min {item.duracaominuto} | {item.categoria} |  <Button title="Excluir" onPress={() => killTreino(item.id)}/>
                    </Text>
                )}

 - 
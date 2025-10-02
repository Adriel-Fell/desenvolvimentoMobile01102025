import { View, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
        <Link href="/crudTreinos" asChild>
          <Button title="Ir para TREINOS" />
        </Link>
      </View>
    );
}
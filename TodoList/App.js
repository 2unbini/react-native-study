/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import { styles } from 'ansi-colors';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>✔️ TO DO LIST 📌</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa1a1',
  },
  appTitle: {
    color: '#000000',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#ffa1a1',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 20,
  },
});

export default App;

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('')
  const [goals,setGoals]=useState([])
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler(){
    console.log(enteredGoalText)
    setGoals(currentGoals => [...goals,enteredGoalText])
    console.log(goals)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Input Your Goals' style={styles.textInput} onChangeText={goalInputHandler}/> 
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => 
        <View key={goal} style={styles.goalItem}>
        <Text style={styles.goalText}> {goal} </Text> 
        </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50,
    flex:1,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#CCCCCC',
    flex:1,
  },
  textInput:{
    borderWidth:1,
    borderColor:'#CCCCCC',
    width:'70%',
    marginRight:8,
    padding:8,
  },
  goalsContainer:{
    flex:5
  },
  goalItem:{
    
    backgroundColor:'green',
    margin:8,
    padding:8,
    borderRadius:6
  },
  goalText:{
    color:'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

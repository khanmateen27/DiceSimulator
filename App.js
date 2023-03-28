import { useState } from 'react'
import { Pressable } from 'react-native'
import { View , Image , Text , StyleSheet } from 'react-native'
import DiceOne from "./assets/dice1.png"
import DiceTwo from "./assets/dice2.png"
import DiceThree from "./assets/dice3.png"
import DiceFour from "./assets/dice4.png"
import DiceFive from "./assets/dice5.png"
import DiceSix from "./assets/dice6.png"

const App = ()=>{

  let [diceImg , setDiceImg] = useState(DiceOne);
  const playBtnHandler = () =>{
    const randomNumber = Math.floor(Math.random()*6)+1

    if(randomNumber == 1){
      setDiceImg(DiceOne)
    }
    else if(randomNumber == 2){
      setDiceImg(DiceTwo)
    }
    else if(randomNumber == 3){
      setDiceImg(DiceThree)
    }
    else if(randomNumber == 4){
      setDiceImg(DiceFour)
    }
    else if(randomNumber == 5){
      setDiceImg(DiceFive)
    }
    else{
      setDiceImg(DiceSix)
    }
  }

  const resetBtnHandler = ()=>{
    setDiceImg(DiceOne);
  }

  return <View style={styles.container}>
  <Image source={diceImg} style={styles.img}/>
  <Pressable onPress={playBtnHandler}><Text style={styles.playBtn}>Play Button</Text></Pressable>
  <Pressable onPress={resetBtnHandler}><Text style={styles.resetBtn}>Reset</Text></Pressable>
  </View>
}

export default App

const styles = StyleSheet.create({
  container : {
    flex:1 ,
    justifyContent : "center" ,
    alignItems : "center"
  } ,
  img:{
    width : 150 ,
    height : 150
  },
  playBtn : {
    fontSize : 20 ,
    marginTop : 30 ,
    color : "black" ,
    paddingHorizontal : 40 ,
    paddingVertical : 10 ,
    borderWidth : 3 ,
    borderRadius : 10
  } ,
  resetBtn : {
    fontSize : 20 ,
    marginTop : 20 ,
    backgroundColor : "black" ,
    color : "white" ,
    paddingHorizontal : 40 ,
    paddingVertical : 10 ,
    borderWidth : 3 ,
    borderRadius : 10
  }
})
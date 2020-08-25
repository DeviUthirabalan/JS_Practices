// Class State{
//     constructor(StartTimeStamp , difference , suspended){
//         this.StartTimeStamp = StartTimeStamp;
//         this.difference =difference;
//         this.suspended=suspended
//     }
//     static ready(){
//         return new state(null,0,0);

//     }

// }

// class StopWatch{
//     constructor(state){
//         this.state= state;
//     }
//     static ready(){
//         return new state(state.ready())
//     }
// }
// setState(newState){
//     this.state =(this.state,newState)
//     this.render()
// }

// tick(){
//     this.setState({
//         difference :new an
//     })
    
// }
// handleClickStart()  {
//     if(this.state.StartTimeStamp){
//         return
//     }
//     this.setState({
//         StartTimeStamp:new Date()-this.state.suspended,
//         suspended:0
//     })
//     this.requestAnimationId = requestAnimationFrame(this.tick)
// }


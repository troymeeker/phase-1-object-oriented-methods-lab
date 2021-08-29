function BoardMember(name,homeState,training){
    this.name = name
    this.homeState = homeState
    this.training = training


  
}

//const Bill = new BoardMember('bill','UT', '2 years'
 BoardMember.prototype.veto = function(){
    return 'No, I must disagree'
  }
  BoardMember.prototype.approve = function(){
    return 'You can do that!'
  }

  BoardMember.prototype.doCharity = function(){
    return 'I like to help people.'
  }

  BoardMember.prototype.releasePressStatement = function(){
    return 'You will see great things from Scuber.'
  }

  BoardMember.prototype.sayHi = function(name, homeState, training){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }

//   const polishedBoardMember =  new BoardMember('Mr. Polished', 'New York' , 'law')
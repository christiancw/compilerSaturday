// At the end of the day, our calculator will be able to do several things:
//
// Taken an input mathematical expression and generate the token stream
// Parse the token stream
// Output the tree
// Output the original expression from the tree
// Output the expression in reverse Polish notation
// Calculate the result of the expression

function Calculator(inputString){
  this.tokenStream = this.lexer(inputString);
}

Calculator.prototype.lexer = function(inputString){
  var tokenTypes = [
    ["NUMBER",    /^\d+/ ],
    ["ADD",       /^\+/  ],
    ["SUB",       /^\-/  ],
    ["MUL",       /^\*/  ],
    ["DIV",       /^\//  ],
    ["LPAREN",    /^\(/  ],
    ["RPAREN",    /^\)/  ]
  ];

  var tokens = [];
  var inputStringArr = inputString.split("");
  inputStringArr.forEach(function(element){
    tokenTypes.forEach(function(tokenType){
      if (tokenType[1].exec(element) !== null){
        tokens.push({name: tokenType[0], value: tokenType[1].exec(element)[0]});
      }
    })
  })
  if (!tokens.length) "Error: unparseable token";
  else return tokens;
}

// Next, write two prototype functions called peek and get.
//
// peek should return the next token from this.tokenStream but not modify tokenStream
//  get should return the next token and remove it from the tokenStream.

Calculator.prototype.peek = function(){
  var nextPeekToken = this.tokenStream[0];
  return nextPeekToken;
}

Calculator.prototype.get = function(){
  var nextGetToken = this.tokenStream[0]
  this.tokenStream = this.tokenStream.slice(1);
  return nextGetToken;
}

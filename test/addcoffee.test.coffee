describe 'test add (coffee)', ->
  it 'adds numbers', ->
    addCoffee(2, 3) is 5
  
  it 'adds equal numbers', ->
    addCoffee(2, 2) is 4

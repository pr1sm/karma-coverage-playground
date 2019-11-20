window.addCoffee = (a, b) ->
  if a == b
    a * 2
  else
    a + b

window.subtractCoffee = (a, b) ->
  if a == b then 0 else a - b

window.throwCoffeeError = ->
  throw new Error 'testing...'

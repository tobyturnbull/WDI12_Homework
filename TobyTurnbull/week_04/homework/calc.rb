def prompt(message)
  print message
  gets.chomp
end

def menu
  puts "(a) - addition"
  puts "(q) - quit"
  puts "(s) - subtract"
  puts "(m) - multiply"
  puts "(d) - divide"
  puts "(sq) - square_root"
  puts "(ex) - exponents"
  prompt ("Enter your choice: ").downcase
end

def add
  puts prompt('First number ').to_f + prompt('Second number ').to_f
end

def subtract
  puts prompt('First number ').to_f - prompt('Second number ').to_f
end

def multiply
  puts prompt('First number ').to_f * prompt('Second number ').to_f
end

def divide
  puts prompt('First number ').to_f / prompt('Second number ').to_f
end

def square_root
  sq_num = prompt('Number ').to_f
  puts Math.sqrt(sq_num)
end

def exponents
  puts prompt('First number ').to_f ** prompt('Second number ').to_f
end

choice = menu()

until choice == 'q'

  case choice
  when 'a'
    add()
  when 's'
    subtract()
  when 'm'
    multiply()
  when 'd'
    divide()
  when 'sq'
    square_root()
  when 'ex'
    exponents()

#ADD REST OF CASES HERE

  else
    puts "Invalid selection"
  end

  choice = menu()
end
  
puts "Thank you for using this crappy calculator"
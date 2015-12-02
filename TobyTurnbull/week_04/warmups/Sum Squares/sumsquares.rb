require 'pry'

def sum_of_squares(num = 10)
  result = 0  
  1.upto(10) {|i| result += (i ** 2)}
  result
end

def square_of_sums(num)
  result = 0
  1.upto(num){|i| result += i}
  puts.result ** 2
  puts (1..num).to_a.reduce(0) {|sum, current_num| sum += current_num}
end

square_of_sums(10)

binding,pry
